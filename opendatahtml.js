const app = document.getElementById('root');

const container = document.createElement('div');

container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://nico1998400.github.io/Openjson/OpenData.json', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        data.forEach(intoNamn => {

            const link = document.createElement('a');
            link.setAttribute('href', intoNamn.Namn + '.html')

            const pplats = document.createElement('div');
            pplats.setAttribute('class', 'pplats');

            const h3 = document.createElement('h3');
            h3.setAttribute('class', 'record-title')
            h3.textContent = intoNamn.Namn;

            const p = document.createElement('p');
            p.textContent = "datasetid : " + intoNamn.Namn;


            container.appendChild(link);
            link.appendChild(pplats);
            pplats.appendChild(h3);
            pplats.appendChild(p);

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