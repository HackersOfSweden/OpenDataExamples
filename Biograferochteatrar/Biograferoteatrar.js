const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=biografer-och-teatrar&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

    data.records.forEach(intoRecord => {

      console.log(intoRecord.fields.namn)

      //intoRecord.fields.forEach(intoFields => {
      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'pplats');

      const h1 = document.createElement('h1');
      h1.textContent = intoRecord.fields.namn;

      const p = document.createElement('p');
      p.textContent = "datasetid : " + intoRecord.datasetid;

      const p2 = document.createElement('p');
      p2.textContent ="recordid : " + intoRecord.recordid;

      const p3 = document.createElement('p');
      p3.textContent ="objectid : " + intoRecord.fields.objectid;

      const p4 = document.createElement('p');
      p4.textContent ="url : " + intoRecord.fields.url;

      const p6 = document.createElement('p');
      p6.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p7 = document.createElement('p');
      p7.textContent ="geo_shape type : " + intoRecord.fields.geo_shape.type;
      
      const p8 = document.createElement('p');
      p8.textContent ="geo_shape coordinates : " + intoRecord.fields.geo_shape.coordinates;

      const p9 = document.createElement('p');
      p9.textContent = "adress : " + intoRecord.fields.adress

      const p12 = document.createElement('p');
      p12.textContent ="geometry type : " + intoRecord.geometry.type;

      const p13 = document.createElement('p');
      p13.textContent ="geometry coordinates : " + intoRecord.geometry.coordinates;



      container.appendChild(pplats);
      pplats.appendChild(h1);
      pplats.appendChild(p);
      pplats.appendChild(p2);
      pplats.appendChild(p3);
      pplats.appendChild(p4);
      pplats.appendChild(p6);
      pplats.appendChild(p7);
      pplats.appendChild(p8);
      pplats.appendChild(p9);
      pplats.appendChild(p12);
      pplats.appendChild(p13);
 // });
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


/*
const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_rorelsehindrade&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.records.forEach(pplatseer => {
        pplatseer.fields.forEach(pplatser => {
          const pplats = document.createElement('div');
          pplats.setAttribute('class', 'pplats');

          const h1 = document.createElement('h1');
          h1.textContent = pplatser.namn;
          console.log(pplatser.namn)
        //  const p = document.createElement('p');
        //  persons.description = persons.description.substring(0, 300);
        //  p.textContent = `${persons.description}...`;

          container.appendChild(pplats);
          pplats.appendChild(h1);
        //  person.appendChild(p);
    });
  })
}
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();
*/