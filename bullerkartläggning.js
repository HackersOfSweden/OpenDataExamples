const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bullerkartlaggning-2017-vag-och-tagtrafik-15m-leq&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.records.forEach(record => {
      const wordpress = document.createElement('div');
      wordpress.setAttribute('class', 'record-container');

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'record-title')
      h3.textContent = + record.fields.namn;

      const p = document.createElement('p');
      p.textContent =  "Datasetid :" + record.datasetid;
      const p1 = document.createElement('p');
      p1.textContent =  "Recordid :" + record.recordid;
      const p2 = document.createElement('p');
      p2.textContent =  "Geo_shape type :" + record.fields.geo_shape.type;
      const p3 = document.createElement('p');
      p3.textContent =  "Geo_shape coordinates :" + record.fields.geo_shape.coordinates;
      const p4 = document.createElement('p');
      p4.textContent =  "Shape_leng :" + record.fields.shape_leng;
      const p5 = document.createElement('p');
      p5.textContent =  "Shape_area :" + record.fields.shape_area;
      const p6 = document.createElement('p');
      p6.textContent =  "Geo_point_2d :" + record.fields.geo_point_2d;
      const p7 = document.createElement('p');
      p7.textContent =  "Isovalue :" + record.fields.isovalue;
      const p8 = document.createElement('p');
      p8.textContent =  "Geometry :" + record.geometry.type;
      const p9 = document.createElement('p');
      p9.textContent =  "Geometry :" + record.geometry.coordinates;
      const p10 = document.createElement('p');
      p10.textContent =  "Record_Timestamp :" + record.record_timestamp;

      container.appendChild(wordpress);
      wordpress.appendChild(h3);
      wordpress.appendChild(p);
      wordpress.appendChild(p1);
      wordpress.appendChild(p2);
      wordpress.appendChild(p3);
      wordpress.appendChild(p4);
      wordpress.appendChild(p5);
      wordpress.appendChild(p6);
      wordpress.appendChild(p7);
      wordpress.appendChild(p8);
      wordpress.appendChild(p9);
      wordpress.appendChild(p10);

    });
  } 
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();