const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=stompunkter-plan&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.records.forEach(intoRecord => {

      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'pplats');

      const h1 = document.createElement('h1');
      h1.textContent = intoRecord.fields.name;

      const p = document.createElement('p');
      p.textContent = "datasetid : " + intoRecord.datasetid;

      const p2 = document.createElement('p');
      p2.textContent ="recordid : " + intoRecord.recordid;

      const p3 = document.createElement('p');
      p3.textContent ="objectid : " + intoRecord.fields.objectid;

      const p4 = document.createElement('p');
      p4.textContent ="originheight : " + intoRecord.fields.originheight;

      const p5 = document.createElement('p');
      p5.textContent ="dtype : " + intoRecord.fields.dtype;

      const p6 = document.createElement('p');
      p6.textContent ="accuracyplan : " + intoRecord.fields.accuracyplan;

      const p7 = document.createElement('p');
      p7.textContent ="stabilizemethod : " + intoRecord.fields.stabilizemethod;

      const p8 = document.createElement('p');
      p8.textContent ="srsoriginplan : " + intoRecord.fields.srsoriginplan;

      const p9 = document.createElement('p');
      p9.textContent ="y_sweref_99_13_30 : " + intoRecord.fields.y_sweref_99_13_30;

      const p10 = document.createElement('p');
      p10.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p11 = document.createElement('p');
      p11.textContent ="x_sweref_99_13_30 : " + intoRecord.fields.x_sweref_99_13_30;

      const p12 = document.createElement('p');
      p12.textContent ="geo_shape type : " + intoRecord.fields.geo_shape.type;
      
      const p13 = document.createElement('p');
      p13.textContent ="geo_shape coordinates : " + intoRecord.fields.geo_shape.coordinates;

      const p14 = document.createElement('p');
      p14.textContent = "z_value : " + intoRecord.fields.z_value;

      const p15 = document.createElement('p');
      p15.textContent ="srsoriginheight : " + intoRecord.fields.srsoriginheight;

      const p16 = document.createElement('p');
      p16.textContent ="commentary : " + intoRecord.fields.commentary;

      const p17 = document.createElement('p');
      p17.textContent ="modificationdate : " + intoRecord.fields.modificationdate;

      const p18 = document.createElement('p');
      p18.textContent ="originplan : " + intoRecord.fields.originplan;

      const p19 = document.createElement('p');
      p19.textContent ="supplier : " + intoRecord.fields.supplier;

      const p20 = document.createElement('p');
      p20.textContent ="geometry type : " + intoRecord.geometry.type;

      const p21 = document.createElement('p');
      p21.textContent ="geometry coordinates : " + intoRecord.geometry.coordinates;



      container.appendChild(pplats);
      pplats.appendChild(h1);
      pplats.appendChild(p);
      pplats.appendChild(p2);
      pplats.appendChild(p3);
      pplats.appendChild(p4);
      pplats.appendChild(p5);
      pplats.appendChild(p6);
      pplats.appendChild(p7);
      pplats.appendChild(p8);
      pplats.appendChild(p9);
      pplats.appendChild(p10);
      pplats.appendChild(p11);
      pplats.appendChild(p12);
      pplats.appendChild(p13);
      pplats.appendChild(p14);
      pplats.appendChild(p15);
      pplats.appendChild(p16);
      pplats.appendChild(p17);
      pplats.appendChild(p18);
      pplats.appendChild(p19);
      pplats.appendChild(p20);
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