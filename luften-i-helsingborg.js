//Getting element root from HTML file
const app = document.getElementById('root');

//Creating and apending a div element with class container to the root element
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

//Creating function that loads the XML document
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    //Checking request readyState is acceptable, if so calling function to extract data
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            extractXmlData(this);
        }
        else {
            console.log("Error: Ready State was not correct");
        }
    };
    //Opening xml file and sending request
    xmlhttp.open("GET", "http://dagensluft.se/data/HBG_D_dagensluft.xml", true);
    xmlhttp.send();
}



//Function for extracting the contents of the XML file
function extractXmlData(xml) {
    
    //Creating three variables for later use
    var xmlNodes, xmlDoc, counter;
    
    //Assigning the parsed XML file to xmlDoc
    xmlDoc = xml.responseXML;
    
    //Setting counter for naming purposes later
    counter = 1;

    //Getting each measurement from within the XML file
    xmlNodes = xmlDoc.getElementsByTagName("measurement");

    //Looping through the elements with tag name of measurement
    for (let i = 0; i < xmlNodes.length; i++) {

        //Creating a record-container element and assigning class to it
        const recordContainer = document.createElement('div');
        recordContainer.setAttribute('class', 'record-container');

        //Creating a record-title element and assigning class to it
        //then setting innerHTML to Measurement [counter] and incrementing 
        //counter to display correctly for next record
        const recordTitle = document.createElement('h3');
        recordTitle.setAttribute('class', 'record-title');
        recordTitle.innerHTML = "Measurement " + counter;
        counter++;

        //Creating a record-title element and assigning class to it
        const recordParagraph = document.createElement('p');
        recordParagraph.setAttribute('class', 'record-paragraph');

        //Setting childNodes to the child nodes of the measurement element
        var childNodes = xmlNodes[i].childNodes;
        
        //Creating an empty string to store the data in
        var txt = "";

        //Looping through the child nodes 
        for (let j = 0; j < childNodes.length; j++) {
            
            //Getting the specific child
            var child = childNodes[j];

            //Processing the child node if it is an element node (type 1) - this prevents us bringing in unwanted info
            if (child.nodeType == 1) {
                //Adding child node and value to txt
                txt += "<li>" + child.nodeName + " &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; " + child.innerHTML + "</li>";
            }
        }

        //Setting innerHTML of the recordParagraph to txt and appending all created nodes appropriately
        recordParagraph.innerHTML = txt;
        recordContainer.appendChild(recordTitle);
        recordContainer.appendChild(recordParagraph);
        container.appendChild(recordContainer);
    }
}

//Calling the loadXMLdoc function
loadXMLDoc();















//Creating new XMLHTTP request
/*var request = new XMLHttpRequest();

//Using GET on API and calling function when API loads
request.open('GET', 'http://dagensluft.se/data/HBG_D_dagensluft.xml', true);
request.onload = function () {

    //Parsing JSON response and assigning to data
    let data = JSON.parse(this.response);
    console.log(data);
}

//Send request
request.send();




















//Creating counter variable to keep track of records that are iterated through
    //in order to give each record a title of Record [counter]
    /*let counter = 1;

    //Checking if request goes through successfully and running function if it does
    if (request.status >= 200 && request.status < 400) {

        //Looping through records which are stored in an array within data variable
        data.records.forEach(record => {

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

                    paragraphContent += "<li> Key: " + property + "<ul>";
                    //Then loop through all the values within the object and created new list item for them
                    for (const innerValue in innerProperty) {
                        paragraphContent += "<li> Key: " + innerValue + "  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;   Value: " + innerProperty[innerValue] + "</li>";
                    }
                    paragraphContent += "</ul></li>";
                } else {
                    //Else if the innerProperty is not an object, print that property and it's value in the
                    //outer unordered list
                    paragraphContent += "<li> Key: " + property + "     Value: " + innerProperty + "</li>";
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
    }*/