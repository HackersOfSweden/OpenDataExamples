const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=smileygodkanda-platser-i-helsingborg&q=&rows=100', true);
request.onload = function() {
    let dataset = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400)
    {
        // Get unique kategori_webb from the dataset
        const uniqueKategori = [... new Set(dataset.records.map(data => data.fields.kategori_webb))];
        console.log(uniqueKategori);

        // Go through the unique category array
        for(i=0; i < uniqueKategori.length; i++) {
            // select all the rows that belong to the same category
            filteredList = dataset.records.filter(data => {return data.fields.kategori_webb.includes(uniqueKategori[i]);});
            console.log(uniqueKategori[i], filteredList.length);

            // create div for category
            const plats = document.createElement('div');
            plats.setAttribute('class', 'platsContainer');

            const h2 = document.createElement('h2');
            h2.style.color = "blue";

            h2.textContent = uniqueKategori[i];
            container.appendChild(plats);
            plats.appendChild(h2);
            const ol = document.createElement('ol');
            plats.appendChild(ol);

            // for every category create elements under that div for each item
            filteredList.forEach(platser => {
                const li1 = document.createElement('li');
                li1.textContent = "Namn : " + platser.fields.namn;

                console.log(".",platser.fields.hemsida,".")
                if (platser.fields.hemsida != null ) {
                    // create link for the hemsida
                    var span = document.createElement('span');
                    var link = document.createElement('a');
                    link.textContent = platser.fields.hemsida;
                    link.href = platser.fields.hemsida;
    
                    li1.textContent += ", Hemsida: ";
                    li1.appendChild(span);
                    span.appendChild(link);
                }
                ol.appendChild(li1);
            });
        }
    }
    else{
        console.log('Fel');
    }

   
}

request.send();