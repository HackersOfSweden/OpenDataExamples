const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=vatten-punkt&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.records.forEach(intoRecord => {

      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'pplats');

      const h1 = document.createElement('h1');
      h1.textContent = intoRecord.fields.omrade;

      const p = document.createElement('p');
      p.textContent = "datasetid : " + intoRecord.datasetid;

      const p2 = document.createElement('p');
      p2.textContent ="recordid : " + intoRecord.recordid;

      const p3 = document.createElement('p');
      p3.textContent ="status : " + intoRecord.fields.status;

      const p4 = document.createElement('p');
      p4.textContent ="labelrotationangle : " + intoRecord.fields.labelrotationangle;

      const p5 = document.createElement('p');
      p5.textContent ="symbolrotationangle : " + intoRecord.fields.symbolrotationangle;

      const p6 = document.createElement('p');
      p6.textContent ="accuracyplan : " + intoRecord.fields.accuracyplan;

      const p7 = document.createElement('p');
      p7.textContent ="originheight : " + intoRecord.fields.originheight;

      const p8 = document.createElement('p');
      p8.textContent ="srsoriginplan : " + intoRecord.fields.srsoriginplan;

      const p9 = document.createElement('p');
      p9.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p10 = document.createElement('p');
      p10.textContent ="regdate : " + intoRecord.fields.regdate;

      const p11 = document.createElement('p');
      p11.textContent ="geo_shape type : " + intoRecord.fields.geo_shape.type;

      const p12 = document.createElement('p');
      p12.textContent ="geo_shape coordinates : " + intoRecord.fields.geo_shape.coordinates;
      
      const p13 = document.createElement('p');
      p13.textContent ="gid : " + intoRecord.fields.gid;

      const p14 = document.createElement('p');
      p14.textContent ="stype : "  + intoRecord.fields.stype;

      const p15 = document.createElement('p');
      p15.textContent ="commentary: " + intoRecord.fields.commentary;

      const p16 = document.createElement('p');
      p16.textContent ="srsoriginheight : " + intoRecord.fields.srsoriginheight

      const p17 = document.createElement('p');
      p17.textContent ="supplier : " + intoRecord.fields.supplier

      const p18 = document.createElement('p');
      p18.textContent ="modificationdate : " + intoRecord.fields.modificationdate

      const p19 = document.createElement('p');
      p19.textContent ="originplan : " + intoRecord.fields.originplan
      
      const p20 = document.createElement('p');
      p20.textContent ="fitted : " + intoRecord.fields.fitted

      const p21 = document.createElement('p');
      p21.textContent ="commentary : " + intoRecord.fields.commentary

      const p22 = document.createElement('p');
      p22.textContent ="geometry type : " + intoRecord.geometry.type

      const p23 = document.createElement('p');
      p23.textContent ="geometry coordinates : " + intoRecord.geometry.coordinates
      

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
      pplats.appendChild(p21);
      pplats.appendChild(p22);
      pplats.appendChild(p23);
  
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