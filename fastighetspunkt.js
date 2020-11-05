const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
                       
console.log ('hej');

 var request = new XMLHttpRequest;

 request.open('GET', 
 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=fastighetspunkt-ap&q=&rows=20', true);
 
 request.onload = function()
 {
let data = JSON.parse(this.response);
console.log("here");
if(request.status >= 200 && request.status < 400) 
{
    data.records.forEach( fastighetspunkt => {

        const newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'record-container');

        const recordid = document.createElement('h6');
        recordid.setAttribute('class', 'record-title');
        
        recordid.textContent = fastighetspunkt.recordid;

       const omrade = document.createElement('p');
       omrade.textContent = fastighetspunkt.fields.omrade;

       const blockenhet = document.createElement('p');
       blockenhet.textContent = fastighetspunkt.fields.blockenhet;

       const objectid = document.createElement('p');
       objectid.textContent = fastighetspunkt.fields.objectid;

       newdiv.appendChild(recordid);
       newdiv.appendChild(omrade);
       newdiv.appendChild(blockenhet);
       newdiv.appendChild(objectid);

       container.appendChild(newdiv);

  });
}
 else {

     console.log ('fel');
  }
 }

 
 request.send();
 

 