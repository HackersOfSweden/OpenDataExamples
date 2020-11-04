//Getting element root from HTML file
const app = document.getElementById('root');

//Creating and apending a div element with class container to the root element
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

//Creating new XMLHTTP request
var request = new XMLHttpRequest();

//Using GET on API and calling function when API loads
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=statistikomraden-helsingborg&q=', true);

//The content to show in the webpage
var content = "";

request.onload = function () {

    //Parsing JSON response and assigning to data
     let data = JSON.parse(this.response);

    //The variable to keep track of the number of records
    let counter = 1;

    //Checking if request goes through successfully and running function if it does
    if (request.status >= 200 && request.status < 400) {

            //Looping through records which are stored in an array within data variable
            data.records.forEach(record => {
            
            //Creating a record-container element and assigning class to it
            const recordContainer = document.createElement('div');
            recordContainer.setAttribute('class', 'record-container');
            
            //Creating a record-title element and assigning class to it
            const recordTitle = document.createElement('h3');
            recordTitle.setAttribute('class', 'record-title');

            //Creating a recordParagraph element and assigning class to it
            const recordParagraph = document.createElement('p');
            recordParagraph.setAttribute('class', 'record-paragraph');

            //Setting innerHTML to Record [counter] and incrementing 
            //counter to display correctly for next record
            recordTitle.innerHTML += "Record " + counter;
            counter++;

            //For listing the contents
            content += "<ul>";

            //Calling the tranverse_it recursive function that is generic for any dataset.
            content += traverse_it(record);

            //Closing the list
            content += "</ul>";

            
        
            //Assigning the content to the HTML of the recordParagraph
            recordParagraph.innerHTML += content;

            //Append the recordContainer to the container
            //and append recordTitle and recordParagraph to recordContainer
            container.appendChild(recordContainer);
            recordContainer.appendChild(recordTitle);
            recordContainer.appendChild(recordParagraph);

            //Setting the content to blank after the record printing the individual record
            content = "";
        });
    }
    

               
    else {
        //If the request didn't go through successfully, return error to console
        console.log('Error: Request unsuccessful');
    }
}

//Send request
request.send();

function traverse_it(obj){
    //To go through each of the properties of the record
    for(var prop in obj){

        //if the value of the property is not a simple string,it will call the same function again
        if(typeof(obj[prop]) === "object"){
            //Sublisting the contents
            content += "<li>Key : "+ prop + "<ul>";
            traverse_it(obj[prop]);
        }
        else{
            //if the value of the property is of type object,it will put the value inside the content
            content += "<li>Key : "+ prop +" Value :  "+obj[prop] + "</li>";
        }
        
    }
    //End of list
    content += "</ul>";
    //Returning the content to the main function
    return content;
}
