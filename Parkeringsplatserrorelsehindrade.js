const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=parkering_rorelsehindrade&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
 // console.log(data.records.fields.namn)
 //sorting out so you dont have to long info sheets.
  if (request.status >= 200 && request.status < 400) {
    //diving into each records section on the page.
    data.records.forEach(intoRecord => {

      console.log(intoRecord.fields.namn)
      //getting into and accessing data inside and outside
      //the field sections of the record sections.
      const pplats = document.createElement('div');
      pplats.setAttribute('class', 'record-container');

      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'record-title')
      h3.textContent = intoRecord.fields.namn;

      const p = document.createElement('p');
      p.textContent = "datasetid : " + intoRecord.datasetid;

      const p2 = document.createElement('p');
      p2.textContent ="recordid : " + intoRecord.recordid;

      const p3 = document.createElement('p');
      p3.textContent ="status : " + intoRecord.fields.status;

      const p4 = document.createElement('p');
      p4.textContent ="objectid : " + intoRecord.fields.objectid;

      const p5 = document.createElement('p');
      p5.textContent ="parkeringstyp : " + intoRecord.fields.parkeringtyp;

      const p6 = document.createElement('p');
      p6.textContent ="geo_point_2d : " + intoRecord.fields.geo_point_2d;

      const p7 = document.createElement('p');
      p7.textContent ="geo_shape type : " + intoRecord.fields.geo_shape.type;
      
      const p8 = document.createElement('p');
      p8.textContent ="geo_shape coordinates : " + intoRecord.fields.geo_shape.coordinates;

      const p9 = document.createElement('p');
      p9.textContent = "Antal platser : " + intoRecord.fields.antal_plats

      const p10 = document.createElement('p');
      p10.textContent ="avgift : " + intoRecord.fields.avgift;

      const p11 = document.createElement('p');
      p11.textContent ="agartyp : " + intoRecord.fields.agartyp;

      const p12 = document.createElement('p');
      p12.textContent ="geometry type : " + intoRecord.geometry.type;

      const p13 = document.createElement('p');
      p13.textContent ="geometry coordinates : " + intoRecord.geometry.coordinates;

      //appending all of the extracted data visually.

      container.appendChild(pplats);
      pplats.appendChild(h3);
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

// old attempt of making it work.
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