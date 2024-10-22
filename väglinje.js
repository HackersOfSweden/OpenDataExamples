const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=vagkant-linje0&q=&rows=10', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.records.forEach(intorecord => {
      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'record-container');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'record-title')
      h3.textContent = + intorecord.datasetid;
      const p = document.createElement('p');
      p.textContent =  "Datasetid :" + intorecord.datasetid;
      const p1 = document.createElement('p');
      p1.textContent =  "Recordid :" + intorecord.recordid;
      const p2 = document.createElement('p');
      p2.textContent =  "Linktype :" + intorecord.fields.linktype;
      const p3 = document.createElement('p');
      p3.textContent =  "Status :" + intorecord.fields.status;
      const p4 = document.createElement('p');
      p4.textContent =  "Stype :" + intorecord.fields.stype;
      const p5 = document.createElement('p');
      p5.textContent =  "Objectid :" + intorecord.fields.objectid;
      const p6 = document.createElement('p');
      p6.textContent =  "Originheight :" + intorecord.fields.originheight;
      const p7 = document.createElement('p');
      p7.textContent =  "Accuracyplan :" + intorecord.fields.accuracyplan;
      const p8 = document.createElement('p');
      p8.textContent =  "Material :" + intorecord.fields.material;
      const p9 = document.createElement('p');
      p9.textContent =  "Srsoriginplan :" + intorecord.fields.srsoriginplan;
      const p10 = document.createElement('p');
      p10.textContent =  "regdate :" + intorecord.fields.regdate;
      const p11 = document.createElement('p');
      p11.textContent =  "geo_point_2d :" + intorecord.fields.geo_point_2d;
      const p12 = document.createElement('p');
      p9.textContent =  "hascurb :" + intorecord.fields.hascurb;
      const p13 = document.createElement('p');
      p13.textContent =  "geo_shape :" + intorecord.fields.geo_shape.type;
      const p14 = document.createElement('p');
      p14.textContent =  "srsoriginplan :" + intorecord.fields.geo_shape.coordinates;
      const p15 = document.createElement('p');
      p15.textContent =  "gid :" + intorecord.fields.gid;
      const p16 = document.createElement('p');
      p16.textContent =  "locationmethod :" + intorecord.fields.locationmethod;
      const p17 = document.createElement('p');
      p17.textContent =  "shape_stlength :" + intorecord.fields.shape_stlength;
      const p18 = document.createElement('p');
      p18.textContent =  "srsoriginheight :" + intorecord.fields.srsoriginheight;
      const p19 = document.createElement('p');
      p19.textContent =  "originplan :" + intorecord.fields.originplan;
      const p20 = document.createElement('p');
      p20.textContent =  "modificationdate :" + intorecord.fields.modificationdate;
      const p21 = document.createElement('p');
      p21.textContent =  "commentary :" + intorecord.fields.commentary;
      const p22 = document.createElement('p');
      p22.textContent =  "srsoriginplan :" + intorecord.fields.srsoriginplan;
      const p23 = document.createElement('p');
      p23.textContent =  "supplier :" + intorecord.fields.supplier;
      const p24 = document.createElement('p');
      p24.textContent =  "fitted :" + intorecord.fields.fitted;
      const p25 = document.createElement('p');
      p25.textContent =  "geometry :" + intorecord.geometry.type;
      const p26 = document.createElement('p');
      p26.textContent =  "geometry :" + intorecord.geometry.coordinates;
      container.appendChild(pplats);
      pplats.appendChild(h3);
      pplats.appendChild(p);
      pplats.appendChild(p1);
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
      pplats.appendChild(p21);
      pplats.appendChild(p22);
      pplats.appendChild(p23);
      pplats.appendChild(p24);
      pplats.appendChild(p25);
      pplats.appendChild(p26);
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