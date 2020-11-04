//Getting element root from HTML file
const app = document.getElementById('root');

//Creating and apending a div element with class container to the root element
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

//Creating new XMLHTTP request
var request = new XMLHttpRequest();

//Using GET on API and calling function when API loads
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=0021361-180131172636756&q=&facet=kingdom&facet=phylum&facet=class&facet=order&facet=family&facet=genus&facet=species&facet=infraspecificepithet&facet=taxonrank&facet=countrycode&facet=eventdate&facet=collectioncode&facet=identifiedby&facet=rightsholder&facet=recordedby', true);
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

            //Creating a record-container element and assigning class to it
            const recordContainer = document.createElement('div');
            recordContainer.setAttribute('class', 'record-container');

            //Creating a record-title element and assigning class to it
           
            const recordTitle = document.createElement('div');
            recordTitle.setAttribute('class', 'record-title');

            var species;
            if(record.fields.taxonrank === "SPECIES") {
                species= record.fields.species;
            }
            else 
            species= record.fields.genus;

            console.log("The species is ",species);

             //Setting innerHTML to each of the Record Title  
            //incrementing counter to display correctly for the next record
            recordTitle.innerHTML = counter + ". " + species;
            counter++;

            //Creating a recordparagraph element and assigning class to it
            const recordParagraph = document.createElement('div');
            recordParagraph.setAttribute('class', 'record-paragraph');

            //Creating a recordMap element to hold the 2d co-ordinatesand assigning class to it
            const recordMap = document.createElement('div');
            recordMap.setAttribute('class', 'record-map');

            //Creating a variable of paragraphContent that is used to store the
            //HTML we create during the for loops. Opening an unordered list for
            //displaying the different data in
            var paragraphContent = "<ul>";
            
            //Taking each of the fields together inside the record
            var obj = record.fields;

            //Looping through the keys or properties of the field
            for(var prop in obj){
                
                //Displaying the properties are that not object or single valued
                //Discarding the unnecessary properties 
                if(typeof(obj[prop]) !== "object" && (prop == "rightsholder" || prop == "family" || prop == "phylum" || prop == "taxonrank" || prop == "countrycode" || prop == "kingdom" ||prop == "scientificname" ||prop == "class" || prop == "genus" || prop == "order")){
                    paragraphContent += "<li><b>"+ prop +": </b>  "+obj[prop] + "</li>";
                }
                                
            }
            //Closing the list of the paragraph
            paragraphContent += "</ul>";
            //A Line break for seggregation of information and map
            paragraphContent += "<br>";

            //Taking the latitude and longitude of the 2d point coordinates to mark it in maps
            var lat = record.fields.geo_point_2d[0];
            var long = record.fields.geo_point_2d[1];
        
            //Marking the co-ordinates as the centre of the embedded google map
            recordMap.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE&center=${lat},${long}&zoom=10&maptype=satellite\">
                            </iframe>`;

            //Assigning the paragraphContent variable to the innerHTML of recordParagraph
            recordParagraph.innerHTML = paragraphContent;

            //Append the recordContainer to the container
            //Append recordTitle and recordParagraph to recordContainer
            //Append recordMap and recordParagraph
            container.appendChild(recordContainer);
            recordContainer.appendChild(recordTitle);
            recordContainer.appendChild(recordParagraph);
            recordParagraph.appendChild(recordMap);

            //To display the paragraph content only on click
            recordTitle.addEventListener("click", function () {
                //Displaying the next div 
                var panel = this.nextElementSibling;
                console.log("The panel is; ", panel);
        
                //Interchanging the display style on clicks
                if (panel.style.display === "block") {
                    panel.style.display = "none";
        
                } else {
                    panel.style.display = "block";
                    }
            });


        });
    }
    else {
        //If the request didn't go through successfully, return error to console
        console.log('Error: Request unsuccessful');
    }
}

//Send request
request.send();
