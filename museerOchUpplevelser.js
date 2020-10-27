const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=museer-och-upplevelser&q=&facet=namn', true)
request.onload = function() {
    
      let data = JSON.parse(this.response);



      if (request.status >= 200 && request.status < 400){
              
                  data.records.forEach(museumNames => {

                      const musseum = document.createElement('div');
                      musseum.setAttribute('class', 'record-container');

                      const h3 = document.createElement('h3');
                      h3.setAttribute ('class', 'record-title');
                      h3.textContent = museumNames.name;

                      const datasetids = document.createElement('p');
                      datasetids.textContent = "datasetid :" + museumNames.datasetid;
       
                      const recordids = document.createElement('p');
                      recordids.textContent = "recordid :" +  museumNames.recordid;
       
                      const objectids = document.createElement('p');
                      objectids.textContent = "objectid :" + museumNames.fields.objectid;
                    
                      const urls = document.createElement('p');
                      urls.textContent = "url :" + museumNames.fields.url;
       
                      const geo_point_2ds = document.createElement('p');
                      geo_point_2ds.textContent = "geo_point_2d :" + museumNames.fields.geo_point_2d;
       
                      const namns = document.createElement('p');
                      namns.textContent = "namn :" + museumNames.fields.namn;
                      
                      const types = document.createElement('p');
                      types.textContent = "type :" + museumNames.fields.geo_shape.type; 

                      const coordinatess = document.createElement('p');
                      coordinatess.textContent = "coordinates :" + museumNames.fields.geo_shape.coordinates;

                      const adresses = document.createElement('p');
                      adresses.textContent = "adresses :" + museumNames.fields.adress;

                      const record_timestamps = document.createElement('p');
                      record_timestamps.textContent = "adress :" + museumNames.fields.record_timestamp;
               
                  


                      
                      



                

                      


                      container.appendChild(musseum);
                      musseum.appendChild(h3);
                      musseum.appendChild(datasetids);
                      musseum.appendChild(recordids);
                      musseum.appendChild(objectids);
                      musseum.appendChild(urls);
                      musseum.appendChild(geo_point_2ds);
                      musseum.appendChild(namns);
                      musseum.appendChild(types);
                      musseum.appendChild(coordinatess);
                      musseum.appendChild(adresses);
                      musseum.appendChild(record_timestamps);

                     
                      
                     

                  });
              

                }

            }

request.send();