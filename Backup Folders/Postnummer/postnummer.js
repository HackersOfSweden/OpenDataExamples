//https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=adresser&q=&rows=400



const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
var requestUrl = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=postnummer_new&q=&rows=9999';
request.open('GET', requestUrl, true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
      data.records.forEach(postnumber => {
      const div = document.createElement('div');
      div.setAttribute('class', 'adress');

      const h1 = document.createElement('h1');
      h1.textContent = postnumber.fields.city;
     

     const p = document.createElement('p');
     
     p.textContent = `${postnumber.fields.postcode}`;
    
     
      
      container.appendChild(div);
      div.appendChild(h1);
      div.appendChild(p);
      
    
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