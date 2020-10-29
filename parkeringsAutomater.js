//ToiletController
const ParkController = (function() {

    return {

        getPark: async function(text) {
            const parkRes = await fetch(`https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_new&q=&rows=300&facet=status&refine.namn=${text}`);
            const park = await parkRes.json();

            return {
                park
            }
        }

    }





})();


//UIController
const UIController = (function() {


    const Selectors = {
        parkContainer: '#parkContainer',
        searchPark: '#searchPark',
        alert: '#alert',
        boxSelect: '#boxSelect',
        map: '#map'
    }


    return {
        getSelectors: function() {
            return Selectors;
        },
        showPark: function(park) {

            document.querySelector(Selectors.parkContainer).innerHTML = `
                    <div class="border border-white shadow p-3 mb-5 bg-white rounded">
                <h2 class="text-center mb-3">Plats: ${park.fields.namn} <span class="badge badge-warning">Antal-plats:${park.fields.antal_plats}</span></h2>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card bg-primary text-white" style="width: 12rem;">
                            <div class="card-body">
                                <h1 style="font-size: 60px; font-weight: 900;" class="card-title text-center border border-white">P</h1>
                                <h6 class="text-center">Avgift</h6>
                                <h6 class="text-center">${park.fields.avgbeltid_vardag}</h6>
                                <h6 class="text-center">${park.fields.avgbeltid_vard_helg}</h6>
                                <h6 class="text-center">${park.fields.taxa_avgbeltid}kr/tim</h6>
                            </div>
                        </div>
                        <ul>
                            <li style="list-style-type:none;"><span class="badge badge-info bd-highlight">easypark_nr: ${park.fields.easypark_nr}</span></li>
                            <li style="list-style-type:none;"><span class="badge badge-info bd-highlight">tele_p_nr: ${park.fields.tele_p_nr}</span></li>
                        </ul>                    
                    </div>
                    <div class="col-md-9">
                        <div id="map" class="embed-responsive embed-responsive-21by9">
                            <iframe
                                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBKWycHdEHVh5bzIjJqy0uqDdX153Cubr8&center=${park.fields.geo_shape.coordinates[1]},${park.fields.geo_shape.coordinates[0]}&zoom=18&maptype=satellite">
                            </iframe>

                        </div>
                    </div>
                </div>
            </div>
                `;
        },

        showAlert: function(text) {
            document.querySelector(Selectors.alert).innerHTML = `${text} is not found.`;
        },
        clear: function() {
            document.querySelector(Selectors.parkContainer).innerHTML = "";
            document.querySelector(Selectors.alert).innerHTML = "";
        }

    }


})();


//AppController
const AppController = (function(ParkCtrl, UICtrl) {
    const UISelectors = UICtrl.getSelectors();
    const loadEventListener = function() {
        document.querySelector(UISelectors.searchPark).addEventListener('keyup', searchPark);
        document.querySelector(UISelectors.boxSelect).addEventListener('click', searchPark);
        document.querySelector(UISelectors.boxSelect).addEventListener('click', addToBoxSelect);
    }

    searchPark = function(e) {
        UICtrl.clear();
        let text = e.target.value;
        if (text !== '') {
            ParkCtrl.getPark(text).then(res => {
                if (res.park.records.length === 0) {
                    UICtrl.showAlert(text);
                } else {
                    UICtrl.showPark(res.park.records[0]);
                }
            });
        }
    }

    addToBoxSelect = function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_new&q=&rows=300&facet=status', true);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let data = JSON.parse(this.responseText);
                data.records.forEach(element => {

                    let html = '';
                    html += `
                    <option>${element.fields.namn}</option>
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


})(ParkController, UIController);

AppController.init();