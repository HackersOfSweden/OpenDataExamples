//https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=adresser&q=&rows=400



const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
var requestUrl = 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=flygbilder&q=&rows=99&start=99&facet=flight_date';
request.open('GET', requestUrl, true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
      data.records.forEach(flightphoto => {

      const div = document.createElement('div');
      div.setAttribute('class', 'adress');

     const h1 = document.createElement('h1');
     h1.textContent = flightphoto.recordid;
     const link = document.createElement('a');
     link.setAttribute('href', `${flightphoto.fields.resource_url}`);
     link.textContent = "Link to flightphoto";
     const p = document.createElement('p');
     
     p.textContent = `${flightphoto.fields.flight_date}`;
    
     
      
      container.appendChild(div);
      div.appendChild(h1);
      div.appendChild(p);
      div.appendChild(link);
    
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