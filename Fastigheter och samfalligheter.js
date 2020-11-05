const app = document.getElementById('root');

const container= document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest;
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=fastigheter-och-samfalligheter&q=&rows=5',
true);

request.send();
request.onload = function () {

    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        
        data.records.forEach( samfalligheter => {

            const recordid = document.createElement('h6');
            recordid.setAttribute('class','record-title');
            recordid.textContent = samfalligheter.recordid;

            const kommunkod = document.createElement('p');
            kommunkod.textContent = samfalligheter.fields.kommunkod;

            const blockenhet = document.createElement('p');
            blockenhet.textContent = samfalligheter.fields.blockenhet;

            const objectid = document.createElement('p');
            objectid.textContent = samfalligheter.fields.objectid;

            const fastighet = document.createElement('p');
            fastighet.textContent = samfalligheter.fields.fastighet;

            const element = document.createElement('div');
            element.setAttribute('class', 'record-container');

            element.appendChild(recordid);
            element.appendChild(kommunkod);
            element.appendChild(blockenhet);
            element.appendChild(objectid);
            element.appendChild(fastighet);

            container.appendChild(element)
        });
    }
    else {
        document.getElementById('error').innerHTML = "ERROR";
        console.log('fel');
    }
}
    