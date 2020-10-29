const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=kartografisk-text-mark-och-vatten&q=', true);
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
      p4.textContent ="objectid : " + intoRecord.fields.objectid;

      const p5 = document.createElement('p');
      p5.textContent ="flipangle : " + intoRecord.fields.flipangle;

      const p6 = document.createElement('p');
      p6.textContent ="symbolid : " + intoRecord.fields.symbolid;

      const p7 = document.createElement('p');
      p7.textContent ="verticalalignment : " + intoRecord.fields.verticalalignment;

      const p8 = document.createElement('p');
      p8.textContent ="shape_stlength : " + intoRecord.fields.shape_stlength;

      const p9 = document.createElement('p');
      p9.textContent ="annotationclassid : " + intoRecord.fields.annotationclassid;

      const p10 = document.createElement('p');
      p10.textContent ="shape_starea : " + intoRecord.fields.shape_starea;

      const p11 = document.createElement('p');
      p11.textContent ="underline : " + intoRecord.fields.underline;

      const p12 = document.createElement('p');
      p12.textContent ="characterwidth : " + intoRecord.fields.characterwidth;
      
      const p13 = document.createElement('p');
      p13.textContent ="wordspacing : " + intoRecord.fields.wordspacing;

      const p14 = document.createElement('p');
      p14.textContent ="fontname : "  + intoRecord.fields.fontname;

      const p15 = document.createElement('p');
      p15.textContent ="angle : " + intoRecord.fields.angle;

      const p16 = document.createElement('p');
      p16.textContent ="gid : " + intoRecord.fields.gid;

      const p17 = document.createElement('p');
      p17.textContent ="horizontalalignment : " + intoRecord.fields.horizontalalignment;

      const p18 = document.createElement('p');
      p18.textContent ="italic : " + intoRecord.fields.italic;

      const p19 = document.createElement('p');
      p19.textContent ="override : " + intoRecord.fields.override;

      const p20 = document.createElement('p');
      p20.textContent ="fontleading : " + intoRecord.fields.fontleading;

      const p21 = document.createElement('p');
      p21.textContent ="bold : " + intoRecord.fields.bold;

      const p22 = document.createElement('p');
      p22.textContent ="yoffset : " + intoRecord.fields.yoffset;

      const p23 = document.createElement('p');
      p23.textContent ="fontsize : " + intoRecord.fields.fontsize;

      const p24 = document.createElement('p');
      p24.textContent ="type : " + intoRecord.fields.geo_shape.type;

      const p25 = document.createElement('p');
      p25.textContent ="coordinates : " + intoRecord.fields.geo_shape.coordinates;

      const p26 = document.createElement('p');
      p26.textContent ="textalignment : " + intoRecord.fields.textalignment;

      const p27 = document.createElement('p');
      p27.textContent ="xoffset : " + intoRecord.fields.xoffset;

      const p28 = document.createElement('p');
      p28.textContent ="textstring : " + intoRecord.fields.textstring;

      const p29 = document.createElement('p');
      p29.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p30 = document.createElement('p');
      p30.textContent ="characterspacing : " + intoRecord.fields.characterspacing;

      const p31 = document.createElement('p');
      p31.textContent ="type : " + intoRecord.geometry.type;
      
      const p32 = document.createElement('p');
      p32.textContent ="coordinates : " + intoRecord.geometry.coordinates;

      const p33 = document.createElement('p');
      p33.textContent ="record_timestamp : " + intoRecord.record_timestamp;

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
      pplats.appendChild(p18);
      pplats.appendChild(p19);
      pplats.appendChild(p20);
      pplats.appendChild(p21);
      pplats.appendChild(p22);
      pplats.appendChild(p23);
      pplats.appendChild(p24);
      pplats.appendChild(p25);
      pplats.appendChild(p26);
      pplats.appendChild(p27);
      pplats.appendChild(p28);
      pplats.appendChild(p29);
      pplats.appendChild(p30);
      pplats.appendChild(p31);
      pplats.appendChild(p32);
      pplats.appendChild(p33);

  
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