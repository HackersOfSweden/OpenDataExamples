//ToiletController
const ToiletController = (function() {

    return {

        getToa: async function(text) {
            const toaRes = await fetch(`https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=offentliga-toaletter&q=&facet=plats&facet=avgift&facet=antal_unisex&facet=antal_urinoar&facet=antal_hwc&facet=hwc_larm&facet=skotbord&facet=sasong&facet=oppettider&refine.plats=${text}`);
            const toilet = await toaRes.json();

            return {
                toilet
            }
        }

    }





})();


//UIController
const UIController = (function() {


    const Selectors = {
        toiletContainer: '#toiletContainer',
        searchToilet: '#searchToilet',
        alert: '#alert',
        boxSelect: '#boxSelect'
    }


    return {
        getSelectors: function() {
            return Selectors;
        },
        showToilet: function(toa) {
            if (typeof(toa.fields.antal_urinoar) === 'undefined') {
                toa.fields.antal_urinoar = 0;
            }
            if (typeof(toa.fields.senastrenoverad) === 'undefined') {
                toa.fields.senastrenoverad = '';
            }
            if (typeof(toa.fields.bildlank) === 'undefined') {
                toa.fields.bildlank = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/P%C3%A5lsj%C3%B6_kyrkog%C3%A5rd%2C_toalettpaviljongen.jpg/1200px-P%C3%A5lsj%C3%B6_kyrkog%C3%A5rd%2C_toalettpaviljongen.jpg';
            }

            const skapelsedatum = toa.fields.creationdate;
            const skp = skapelsedatum.substring(0, 10);

            document.querySelector(Selectors.toiletContainer).innerHTML = `
            <div class="row mt-2">
                <div class="col-md-4">
                    <img src="${toa.fields.bildlank}" class="img-thumbnail" style="height: 300px; width: 300px;">
                </div>
                <div class="col-md-8">
                    <div class="card-header">
                        <h3>Plats: ${toa.fields.plats}
                            <span class="float-right">Nr:<span class="badge badge-warning">${toa.fields.toalettnr}</span></span>
                        </h3>
                        <span class="badge badge-info">Öppettider: ${toa.fields.oppettider}</span>
                        <span class="float-right">Avgift: <span class="badge badge-danger">${toa.fields.avgift}</span></span>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">Typ: <span>${toa.fields.typ}</span><span class="float-right">Skapelsedagen: <span>${skp}</span></span>
                            </li>
                            <li class="list-group-item">Säsong: <span>${toa.fields.sasong}</span></li>
                            <li class="list-group-item">Skötbord: <span>${toa.fields.skotbord}</span><span class="float-right">${toa.fields.beskrivning}</span></li>
                            <li class="list-group-item d-flex justify-content-between bd-highlight">
                                <span class="bd-highlight">Antal-unisex: <span>${toa.fields.antal_unisex}</span></span>
                                <span class="bd-highlight">Antal-urinoar: <span>${toa.fields.antal_urinoar}</span></span>
                                <span class="bd-highlight">Hwc-larm: <span>${toa.fields.antal_hwc}</span></span>
                            </li>
                            <li class="list-group-item">Senastrenoverad: <span>${toa.fields.senastrenoverad}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
                <hr>
                `;
        },

        showAlert: function(text) {
            document.querySelector(Selectors.alert).innerHTML = `${text} is not found.`;
        },
        clear: function() {
            document.querySelector(Selectors.toiletContainer).innerHTML = "";
            document.querySelector(Selectors.alert).innerHTML = "";
        }

    }


})();


//AppController
const AppController = (function(ToaCtrl, UICtrl) {
    const UISelectors = UICtrl.getSelectors();
    const loadEventListener = function() {
        document.querySelector(UISelectors.searchToilet).addEventListener('keyup', searchToilet);
        document.querySelector(UISelectors.boxSelect).addEventListener('click', searchToilet);
        document.querySelector(UISelectors.boxSelect).addEventListener('click', addToBoxSelect);
    }

    searchToilet = function(e) {
        UICtrl.clear();
        let text = e.target.value;
        if (text !== '') {
            ToaCtrl.getToa(text).then(res => {
                if (res.toilet.records.length === 0) {
                    UICtrl.showAlert(text);
                } else {
                    UICtrl.showToilet(res.toilet.records[0]);
                }
            });
        }
    }

    addToBoxSelect = function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=offentliga-toaletter&q=&facet=plats&facet=avgift&facet=antal_unisex&facet=antal_urinoar&facet=antal_hwc&facet=hwc_larm&facet=skotbord&facet=sasong&facet=oppettider', true);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.responseText);
                data.records.forEach(element => {

                    let html = '';
                    html += `
                    <option>${element.fields.plats}</option>
                    `;

                    document.querySelector(UISelectors.boxSelect).innerHTML += html;

                });
            }
        }
        xhr.send();

    }






    return {
        init: function() {
            console.log("App starting...");


            loadEventListener();
        }
    }


})(ToiletController, UIController);

AppController.init();