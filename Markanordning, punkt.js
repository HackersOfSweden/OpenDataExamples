var request =  new XMLHttpRequest;
request.open('GET','https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=markanordning-punkt&q=', true);
request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(container);

request.onload = function () {

    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        
         data.records.forEach(markanordning);
         function markanordning(punkt) {

        const recordid = document.createElement('h6');
        recordid.setAttribute('class','record-title');
            recordid.textContent = "record id :" + punkt.recordid;

            const coordinates = document.createElement('p');
            coordinates.textContent = punkt.fields.geo_shape.coordinates;

            const labelrotationangle = document.createElement('p');
            labelrotationangle.textContent = punkt.fields.labelrotationangle;

            const symbolrotationangle = document.createElement('p');
            symbolrotationangle.textContent = punkt.fields.symbolrotationangle;

            const geo_point_2d = document.createElement('p');
            geo_point_2d.textContent = punkt.fields.geo_point_2d;

            const element = document.createElement('div');
            element.setAttribute('class','record-container');

            element.appendChild(recordid);
            element.appendChild(coordinates);
            element.appendChild(labelrotationangle);
            element.appendChild(symbolrotationangle);
            element.appendChild(geo_point_2d);

            container.appendChild(element);
  }
}

  else {
      console.log('none');
  }
}

