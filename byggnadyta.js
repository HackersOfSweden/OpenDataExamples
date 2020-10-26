const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=byggnad-yta0&q=&rows=10', true);
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
      p2.textContent =  "Nonfreeholdproperty :" + record.fields.nonfreeholdproperty;
      const p3 = document.createElement('p');
      p3.textContent =  "Objectid :" + record.fields.objectid;
      const p4 = document.createElement('p');
      p4.textContent =  "Syncdate :" + record.fields.syncdate;
      const p5 = document.createElement('p');
      p5.textContent =  "Regdate :" + record.fields.regdate;
      const p6 = document.createElement('p');
      p6.textContent =  "Geo_shape type:" + record.fields.geo_shape.type;
      const p7 = document.createElement('p');
      p7.textContent =  "geo_shape coordinates :" + record.fields.geo_shape.coordinates;
      const p8 = document.createElement('p');
      p8.textContent =  "Shape_stlength :" + record.fields.shape_stlength;
      const p9 = document.createElement('p');
      p9.textContent =  "Shape_starea :" + record.fields.shape_starea;
      const p10 = document.createElement('p');
      p10.textContent =  "Uncertainuse :" + record.fields.uncertainuse;
      const p11 = document.createElement('p');
      p11.textContent =  "Liesonuuid :" + record.fields.liesonuuid;
      const p12 = document.createElement('p');
      p12.textContent =  "Gid :" + record.fields.gid;
      const p13 = document.createElement('p');
      p13.textContent =  "Buildingsid :" + record.fields.buildingsid;
      const p14 = document.createElement('p');
      p14.textContent =  "Modificationdate :" + record.fields.modificationdate;
      const p15 = document.createElement('p');
      p15.textContent =  "Ismainbuilding :" + record.fields.ismainbuilding;
      const p16 = document.createElement('p');
      p16.textContent =  "hHousenumber :" + record.fields.housenumber;
      const p17 = document.createElement('p');
      p17.textContent =  "Status :" + record.fields.status;
      const p18 = document.createElement('p');
      p18.textContent =  "Balstatus :" + record.fields.balstatus;
      const p19 = document.createElement('p');
      p19.textContent =  "Externalid :" + record.fields.externalid;
      const p20 = document.createElement('p');
      p20.textContent =  "Exemptaddressing :" + record.fields.exemptaddressing;
      const p21 = document.createElement('p');
      p21.textContent =  "Lieson :" + record.fields.lieson;
      const p22 = document.createElement('p');
      p22.textContent =  "Easementbuilding :" + record.fields.easementbuilding;
      const p23 = document.createElement('p');
      p23.textContent =  "Geo_point_2d :" + record.fields.geo_point_2d;
      const p24 = document.createElement('p');
      p24.textContent =  "Shape_starea :" + record.fields.stype;
      const p25 = document.createElement('p');
      p25.textContent =  "Shape_starea :" + record.fields.usefulfloorspace;
      const p26 = document.createElement('p');
      p26.textContent =  "Geometry type :" + record.geometry.type;
      const p27 = document.createElement('p');
      p27.textContent =  "Geometry coordinates :" + record.geometry.coordinates;
      const p28 = document.createElement('p');
      p28.textContent =  "record_timestamp :" + record.record_timestamp;

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
      wordpress.appendChild(p20);
      wordpress.appendChild(p21);
      wordpress.appendChild(p22);
      wordpress.appendChild(p23);
      wordpress.appendChild(p24);
      wordpress.appendChild(p25);
      wordpress.appendChild(p26);
      wordpress.appendChild(p27);
      wordpress.appendChild(p28);

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