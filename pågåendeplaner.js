const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=pagaende-planer_new&q=&rows=10&facet=projektnamn&facet=skede', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) 
  {
    data.records.forEach(record => {

      const wordpress = document.createElement('div');
      wordpress.setAttribute('class', 'record-container');

      const h3 = document.createElement('h3');
      h3.setAttribute('class','record-title')
      h3.textContent = + record.fields.name;

      const p = document.createElement('p');
      p.textContent =  "Datasetid :" + record.datasetid;
      
      const p1 = document.createElement('p');
      p1.textContent =  "Recordid :" + record.recordid;
      
      const p2 = document.createElement('p');
      p2.textContent =  "omrade :" + record.fields.omrade;
      
      const p3 = document.createElement('p');
      p3.textContent =  "Objectid :" + record.fields.objectid;
      
      const p4 = document.createElement('p');
      p4.textContent =  "Granskning_Start :" + record.fields.granskning_start;
      
      const p5 = document.createElement('p');
      p5.textContent =  "URL :" + record.fields.url;
      
      const p6 = document.createElement('p');
      p6.textContent =  "Beslutsdatum :" + record.fields.beslutsdatum;
      
      const p7 = document.createElement('p');
      p7.textContent =  "Geo_point_2d :" + record.fields.geo_point_2d;
      
      const p8 = document.createElement('p');
      p8.textContent =  "diarienr :" + record.fields.diarienr;
      
      const p9 = document.createElement('p');
      p9.textContent =  "samrad_slut :" + record.fields.samrad_slut;
      
      const p10 = document.createElement('p');
      p10.textContent =  "syfte :" + record.fields.syfte;
      
      const p11 = document.createElement('p');
      p11.textContent =  "samrad_start :" + record.fields.samrad_start;
      
      const p12 = document.createElement('p');
      p12.textContent =  "skede :" + record.fields.skede;
      
      const p13 = document.createElement('p');
      p13.textContent =  "geo_shape type :" + record.fields.geo_shape.type;
      
      const p14 = document.createElement('p');
      p14.textContent =  "geo_shape coordinates :" + record.fields.geo_shape.coordinates;
      
      const p15 = document.createElement('p');
      p15.textContent =  "Projektnamn :" + record.fields.projektnamn;
      
      const p16 = document.createElement('p');
      p16.textContent =  "granskning_slut :" + record.fields.granskning_slut;
      
      const p17 = document.createElement('p');
      p17.textContent =  "geometry type :" + record.geometry.type;

      const p18 = document.createElement('p');
      p18.textContent =  "geometry coordinates :" + record.geometry.coordinates;

      const p19 = document.createElement('p');
      p19.textContent =  "record_timestamp :" + record.record_timestamp;


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
      wordpress.appendChild(p11);
      wordpress.appendChild(p12);
      wordpress.appendChild(p13);
      wordpress.appendChild(p14);
      wordpress.appendChild(p15);
      wordpress.appendChild(p16);
      wordpress.appendChild(p17);
      wordpress.appendChild(p18);
      wordpress.appendChild(p19);   

    });  }
  // If there no such file or bad request. 
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Could not find a file';
    app.appendChild(errorMessage);
  }
}

request.send();