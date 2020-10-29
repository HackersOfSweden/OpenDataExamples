//Getting element root from HTML file
const app = document.getElementById('root');

//Creating and apending a div element with class container to the root element
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

//Creating new XMLHTTP request
var request = new XMLHttpRequest();

//Using GET on API and calling function when API loads
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=bullerkartlaggning-2017-vagtrafik-15m-leq&q=', true);
request.onload = function () {

    //Parsing JSON response and assigning to data
    let data = JSON.parse(this.response);

    //Creating counter variable to keep track of records that are iterated through
    //in order to give each record a title of Record [counter]
    let counter = 1;

    //Checking if request goes through successfully and running function if it does
    if (request.status >= 200 && request.status < 400) {

        //Looping through records which are stored in an array within data variable
        data.records.forEach(record => {
            console.log(record);
            //Creating a record-container element and assigning class to it
            const recordContainer = document.createElement('div');
            recordContainer.setAttribute('class', 'record-container');

            //Creating a record-title element and assigning class to it
            //then setting innerHTML to Record [counter] and incrementing 
            //counter to display correctly for next record
            const recordTitle = document.createElement('h3');
            recordTitle.setAttribute('class', 'record-title');
            recordTitle.innerHTML = "Record " + counter;
            counter++;

            //Creating a record-title element and assigning class to it
            const recordParagraph = document.createElement('p');
            recordParagraph.setAttribute('class', 'record-paragraph');

            //Creating a variable of paragraphContent that is used to store the
            //HTML we create during the for loops. Opening an unordered list for
            //displaying the different data in
            var paragraphContent = "<ul>";

            //Looping through the properties of each record object
            for (const property in record) {

                //Creating a variable innerProperty which stores the
                //property within the record
                var innerProperty = record[property];

                //If the innerProperty is an object, create a nested unordered list
                if (typeof (innerProperty) === "object") {
                    paragraphContent += "<li>" + property + "<ul>";
                    //Then loop through all the values within the object and created new list item for them
                    for (const innerValue in innerProperty) {

                        //Creating a variable secondLevelValue which stores the
                        //value within the record
                        var secondLevelValue = innerProperty[innerValue];

                        //If the value type is an object, create a nested unordered list
                        if (typeof (secondLevelValue) === "object") {
                            paragraphContent += "<li>" + innerValue + "<ul>";
                            //Then loop through all the values within the object and created new list item for them
                            for (const secondLevelProperty in secondLevelValue) {
                                //If the secondLevelProperty title is "coordinates" create another unordered list
                                if (secondLevelProperty == "coordinates") {
                                    paragraphContent += "<li>" + secondLevelProperty + "<ul>";

                                    //Assign the coordinates to a variable and create counter variable
                                    let coordinates = secondLevelValue[secondLevelProperty];
                                    let coordinateCounter = 1;

                                    //Loop through array of coordinates to get the coordinate pairs
                                    coordinates.forEach(coordsToSplit => {
                                        coordsToSplit.forEach(coordsToPrint => {
                                            //Add coordinates pair to the list
                                            paragraphContent += "<li>Set " + coordinateCounter + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Value: " + coordsToPrint + "</li>";
                                            coordinateCounter++;
                                        });

                                    });
                                    paragraphContent += "</ul></li>";
                                } else {
                                    paragraphContent += "<li>" + secondLevelProperty + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Value: " + secondLevelValue[secondLevelProperty] + "</li>";
                                }

                            }
                            paragraphContent += "</ul></li>";
                        } else {
                            //Else if the innerProperty is not an object, print that property and it's value in the 
                            //outer unordered list
                            paragraphContent += "<li>" + innerValue + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Value: " + secondLevelValue + "</li>";
                        }
                    }
                    paragraphContent += "</ul></li>";
                } else {
                    //Else if the innerProperty is not an object, print that property and it's value in the 
                    //outer unordered list
                    paragraphContent += "<li>" + property + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Value: " + innerProperty + "</li>";
                }
            }

            //Adding a linebreak after the list
            paragraphContent += "<br>";

            //Assigning the paragraphContent variable to the innerHTML of recordParagraph
            recordParagraph.innerHTML = paragraphContent;

            //Append the recordContainer to the container
            //and append recordTitle and recordParagraph to recordContainer
            container.appendChild(recordContainer);
            recordContainer.appendChild(recordTitle);
            recordContainer.appendChild(recordParagraph);
        });
    }
    else {
        //If the request didn't go through successfully, return error to console
        console.log('Error: Request unsuccessful');
    }
}

//Send request
request.send();

