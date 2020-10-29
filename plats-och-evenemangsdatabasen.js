const app = document.getElementById('root');

const container = document.createElement('div');
const maindiv = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=plats-och-evenemangsdatabasen&q=&rows=1000&facet=date&facet=date_gmt', true);
request.onload = function() {
    let dataset = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400)
    {
        // create div for item
        maindiv.setAttribute('class', 'mainContainer');

        // create elements under that div for each item
        dataset.records.forEach(itemData => {
            console.log(itemData);
            var keys = Object.keys(itemData.fields);

            addToTable(keys, itemData.fields);

            container.appendChild(maindiv);
        });
    }
    else{
        console.log('Fel');
    }
}

request.send();


function addToTable(keysArray, objectToTR) {
    var tableId=keysArray[0];
    
    var tableData = document.getElementById(tableId);

    if (tableData === null) {
        tableData = document.createElement('table');
        tableData.setAttribute('id', tableId);
        tableData.setAttribute('border', '1');
        tableData.setAttribute('caption', tableId);
        var rowHeader = tableData.insertRow(0);
        var cell = [];
        switch (tableId) {
            case "status":
                if (keysArray.length >= 20) {
                    i=0; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Title, Event Category<b>";cell[i].style.width = '200px';
                    i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Start Date, End Date<b>";cell[i].style.width = '150px';
                    i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Booking Link<b>";cell[i].style.width = '200px';
                    i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Seated Price Range, Standing Price Range<b>";cell[i].style.width = '150px';
                }
                break;
            case "organizers":
                i=0; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Organizer, Event Category<b>"; cell[i].style.width = '200px';
                i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Start Date, End Date<b>"; cell[i].style.width = '150px';
                i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Phone, Email<b>";cell[i].style.width = '200px';
                i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Event Link, Facebook, Organizers Link<b>";cell[i].style.width = '200px';
                i++; cell[i] = rowHeader.insertCell(i); cell[i].innerHTML = "<b>Seated Price Range, Standing Price Range<b>";cell[i].style.width = '150px';
                break;
            default:
                break;
        }
        const h2 = document.createElement('h2');
        h2.style.color = "blue";
        h2.textContent = "Evenemang";
        maindiv.appendChild(h2);
        maindiv.appendChild(tableData);
        console.log("Here", tableId);
    }

    var row = tableData.insertRow(tableData.length);
    var cell = [];
/*    i=0;
    for (const [key, value] of Object.entries(objectToTR)) {
        cell[i] = row.insertCell(i);
        cell[i].innerHTML = `${value}`;
        i++;
    }
*/
    switch (tableId) {
        case "status":
            if (keysArray.length >= 20) {
                i=0; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.title).plain_text
                                                              + ", "+ objectToTR.event_categories;
                                                              cell[i].style.width = '200px';
                i++; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.occasions)[0].start_date
                                                              + ", "+ JSON.parse(objectToTR.occasions)[0].end_date;
                                                              cell[i].style.width = '150px';
                i++; cell[i] = row.insertCell(i); cell[i].innerHTML = objectToTR.booking_link;
                                                              cell[i].style.width = '200px';
                i++; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.price_range).seated_minimum_price
                                                             + "-"  + JSON.parse(objectToTR.price_range).seated_maximum_price
                                                             + ", " + JSON.parse(objectToTR.price_range).standing_minimum_price
                                                             + "-"  + JSON.parse(objectToTR.price_range).standing_maximum_price;
                                                             cell[i].style.width = '150px';
            }
            break;
        case "organizers":
            i=0; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.organizers)[0].organizer
                                                         + ", " + objectToTR.event_categories;
                                                                  cell[i].style.width = '200px';
            i++; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.occasions)[0].start_date
                                                          + ", "+ JSON.parse(objectToTR.occasions)[0].end_date;
                                                          cell[i].style.width = '150px';
            i++; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.organizers)[0].organizer_phone
                                                         + ", " + JSON.parse(objectToTR.organizers)[0].organizer_email;
                                                         cell[i].style.width = '200px';
            i++; cell[i] = row.insertCell(i); cell[i].innerHTML = objectToTR.event_link
                                                         + ", " + objectToTR.facebook
                                                         + ", " + JSON.parse(objectToTR.organizers)[0].organizer_link;
                                                         cell[i].style.width = '200px';
            i++; cell[i] = row.insertCell(i); cell[i].innerHTML = JSON.parse(objectToTR.price_range).seated_minimum_price
                                                         + "-"  + JSON.parse(objectToTR.price_range).seated_maximum_price
                                                         + ", " + JSON.parse(objectToTR.price_range).standing_minimum_price
                                                         + "-"  + JSON.parse(objectToTR.price_range).standing_maximum_price;
                                                                cell[i].style.width = '150px';
            break;
        default:
            break;
    }
}
