const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);



var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=ir-bilder&q=', true);
request.onload = function () {
    
    let data = JSON.parse(this.response);

 
    if (request.status >= 200 && request.status < 400) {

        data.records.forEach(foreachids => {

                const recordcontainer = document.createElement('div');
                recordcontainer.setAttribute('class', 'record-container');

                const h3 = document.createElement('h3');
                h3.setAttribute ('class', 'record-title');
                h3.textContent = foreachids.recordid;

               const vendors = document.createElement('p');
               vendors.textContent = "vendor :" + foreachids.fields.vendor;

               const names = document.createElement('p');
               names.textContent = "name :" + foreachids.fields.name;

               const licenses = document.createElement('p');
               licenses.textContent = "license :" + foreachids.fields.license;

               const rester_ids = document.createElement('p');
               rester_ids.textContent = "raster_id :" + foreachids.fields.raster_id;

               const resolutions = document.createElement('p');
               resolutions.textContent = "resolution :" + foreachids.fields.resolution;

               const geo_point_2ds1 = document.createElement('p');
               geo_point_2ds1.textContent = "geo_point_2d :" + foreachids.fields.geo_point_2d[0];
               
               const geo_point_2ds2 = document.createElement('p');
               geo_point_2ds2.textContent =  foreachids.fields.geo_point_2d[1]; 
        
               const raster_service_urls = document.createElement('p');
               raster_service_urls.textContent = "Raster service url :" + foreachids.fields.raster_service_url;

               const geo_shapes = document.createElement('p');
               geo_shapes.textContent = "type :" + foreachids.fields.geo_shape.type;

               const coordinatess = document.createElement('p');
               coordinatess.textContent = "coordinates :" + foreachids.fields.geo_shape.coordinates;

               const resource_urls = document.createElement('p');
               resource_urls.textContent = "resource_url :" + foreachids.fields.resource_url;

               const record_timestamps = document.createElement('p');
               record_timestamps.textContent = "record_timestamp :" + foreachids.record_timestamp;





               
               
        

                container.appendChild(recordcontainer);
                recordcontainer.appendChild(h3)
                recordcontainer.appendChild(resolutions)
                recordcontainer.appendChild(rester_ids)
                recordcontainer.appendChild(licenses)
                recordcontainer.appendChild(vendors)
                recordcontainer.appendChild(names)
                recordcontainer.appendChild(geo_point_2ds1)
                recordcontainer.appendChild(geo_point_2ds2)
                recordcontainer.appendChild(raster_service_urls)
                recordcontainer.appendChild(geo_shapes)
                recordcontainer.appendChild(coordinatess)
                recordcontainer.appendChild(resource_urls)
                recordcontainer.appendChild(record_timestamps)


                
                



            
            });

   
        }
    }
request.send();