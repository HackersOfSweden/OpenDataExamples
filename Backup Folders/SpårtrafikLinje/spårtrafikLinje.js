//https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=adresser&q=&rows=400



const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=spartrafik-linje0&q=&rows=100', true);
//request.open('GET', 'https://dimitrij.github.io/JSONAPI/persons.json', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
      data.records.forEach(trainline => {
      const div = document.createElement('div');
      div.setAttribute('class', 'adress');


      const h1 = document.createElement('h1');
      h1.textContent = trainline.fields.gid;
     
      
     const objectId = document.createElement('p');
     const regdate = document.createElement('p');
     objectId.textContent = `object id: ${trainline.fields.objectid}`;
     regdate.textContent = `registration date: ${trainline.fields.regdate}`;
     
      
      container.appendChild(div);
      div.appendChild(h1);
      div.appendChild(objectId);
      div.appendChild(regdate);
    //  person.appendChild(p);
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