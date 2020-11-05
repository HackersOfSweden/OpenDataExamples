const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(container);

var request = new XMLHttpRequest;
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=fastighetsbeteckning&q=', true);
request.send();
request.onload = function () {

    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.records.forEach(fastighetsbeteckning => {

            const recordid = document.createElement('h6');
            recordid.setAttribute('class','record-title');
            recordid.textContent = fastighetsbeteckning.recordid;

            const omrade = document.createElement('p');
            omrade.textContent = fastighetsbeteckning.fields.omrade;

            const blockenhet = document.createElement('p');
            blockenhet.textContent = fastighetsbeteckning.fields.blockenhet;

            const element = document.createElement('div');
            element.setAttribute('class','record-container');


            element.appendChild(recordid);
            element.appendChild(omrade);
            element.appendChild(blockenhet);

            container.appendChild(element);
        });
    }
    else {
        console.log('fel');
    }
}
    