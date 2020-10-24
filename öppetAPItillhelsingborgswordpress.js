const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=oppet-api-till-helsingborgs-wordpressajter&q=', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    data.records.forEach(record => {
      const wordpress = document.createElement('div');
      wordpress.setAttribute('class', 'wordpress');

      const h1 = document.createElement('h1');
      h1.textContent = + record.fields.namn;

      const p = document.createElement('p');
      p.textContent =  "Datasetid :" + record.datasetid;
      const p1 = document.createElement('p');
      p1.textContent =  "Recordid :" + record.recordid;
      const p2 = document.createElement('p');
      p2.textContent =  "Format :" + record.fields.file.format;
      const p3 = document.createElement('p');
      p3.textContent =  "Filenamn :" + record.fields.file.filenamn;
      const p4 = document.createElement('p');
      p4.textContent =  "Width :" + record.fields.file.width;
      const p5 = document.createElement('p');
      p5.textContent =  "Id :" + record.fields.file.id;
      const p6 = document.createElement('p');
      p6.textContent =  "Height :" + record.fields.file.height;
      const p7 = document.createElement('p');
      p7.textContent =  "Thumbnail :" + record.fields.file.thumbnail;
      const p8 = document.createElement('p');
      p8.textContent =  "Record_Timestamp :" + record.record_timestamp;

      container.appendChild(wordpress);
      wordpress.appendChild(h1);
      wordpress.appendChild(p);
      wordpress.appendChild(p1);
      wordpress.appendChild(p2);
      wordpress.appendChild(p3);
      wordpress.appendChild(p4);
      wordpress.appendChild(p5);
      wordpress.appendChild(p6);
      wordpress.appendChild(p7);
      wordpress.appendChild(p8);

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