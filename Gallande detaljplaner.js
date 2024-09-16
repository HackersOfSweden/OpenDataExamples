var request = new XMLHttpRequest;
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=gallande-detaljplaner_new&q=', true);
request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

request.onload = function() {

    let data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {

        data.records.forEach(detaljplaner => {

            const recordid = document.createElement('h6');
            recordid.setAttribute('class','record-title');
            recordid.textContent = "record id: " + detaljplaner.recordid;

            const objectid = document.createElement('p');
            objectid.textContent = "object id: " + detaljplaner.fields.objectid;

            const shape_stlength = document.createElement('p');
            shape_stlength.textContent = "shape_stlength: " + detaljplaner.fields.shape_stlength;

            const geoshape = document.createElement('p');
            geoshape.textContent = "geoshape: " + detaljplaner.fields.geo_shape.type; 

            const shape_starea = document.createElement('p');
            shape_starea.textContent = "shape_starea: " + detaljplaner.fields.shape_starea;

           const element = document.createElement('div');
           element.setAttribute('class','record-container');

           element.appendChild(recordid);
           element.appendChild(objectid);
           element.appendChild(shape_stlength);
           element.appendChild(geoshape);
           element.appendChild(shape_starea);

           container.appendChild(element);
            
        });
    }

    else {
        console.log('error');
    }
}
