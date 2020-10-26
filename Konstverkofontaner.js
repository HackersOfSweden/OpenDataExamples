const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=konstverk-och-fontaner&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

    data.records.forEach(intoRecord => {

      console.log(intoRecord.fields.namn)

      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'pplats');

      const h1 = document.createElement('h1');
      h1.textContent = intoRecord.fields.namn;

      const p = document.createElement('p');
      p.textContent = "datasetid : " + intoRecord.datasetid;

      const p2 = document.createElement('p');
      p2.textContent ="recordid : " + intoRecord.recordid;

      const p3 = document.createElement('p');
      p3.textContent ="konstnar : " + intoRecord.fields.konstnar;

      const p4 = document.createElement('p');
      p4.textContent ="driftsstatus : " + intoRecord.fields.driftsstatus;

      const p5 = document.createElement('p');
      p5.textContent ="skotselkod : " + intoRecord.fields.skotselkod;

      const p6 = document.createElement('p');
      p6.textContent ="globalid : " + intoRecord.fields.globalid;

      const p7 = document.createElement('p');
      p7.textContent ="objectid : " + intoRecord.fields.objectid;
      
      const p8 = document.createElement('p');
      p8.textContent ="driftsansvar : " + intoRecord.fields.driftsansvar;

      const p9 = document.createElement('p');
      p9.textContent = "beskrivning : " + intoRecord.fields.beskrivning;

      const p10 = document.createElement('p');
      p10.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p11 = document.createElement('p');
      p11.textContent ="modificationdate : " + intoRecord.fields.modificationdate;

      const p12 = document.createElement('p');
      p12.textContent ="anlaggningsar : " + intoRecord.fields.anlaggningsar;

      const p13 = document.createElement('p');
      p13.textContent ="geo_shape type: " + intoRecord.fields.geo_shape.type;

      const p14 = document.createElement('p');
      p14.textContent ="geo_shape coordinates: " + intoRecord.fields.geo_shape.coordinates;

      const p15 = document.createElement('p');
      p15.textContent ="creationdate : " + intoRecord.fields.creationdate;

      const p16 = document.createElement('p');
      p16.textContent ="geometry type : " + intoRecord.geometry.type;

      const p17 = document.createElement('p');
      p17.textContent ="geometry coordinates : " + intoRecord.geometry.coordinates;

      const p18 = document.createElement('p');
      p18.textContent ="record_timestamp : " + intoRecord.record_timestamp;

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

