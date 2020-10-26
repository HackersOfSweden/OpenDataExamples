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

                const recordsidys = document.createElement('div');
                recordsidys.setAttribute('class', 'recordsidys');

                const h3 = document.createElement('h3');
                h3.setAttribute ('class', 'records-id-h3');
                h3.textContent = foreachids.recordid;

               const information = document.createElement('div');
               information.setAttribute ('class', 'information');

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





               
               
        

                container.appendChild(recordsidys);
                recordsidys.appendChild(h3)
                recordsidys.appendChild(information)
                information.appendChild(resolutions)
                information.appendChild(rester_ids)
                information.appendChild(licenses)
                information.appendChild(vendors)
                information.appendChild(names)
                information.appendChild(geo_point_2ds1)
                information.appendChild(geo_point_2ds2)
                information.appendChild(raster_service_urls)
                information.appendChild(geo_shapes)
                information.appendChild(coordinatess)
                information.appendChild(resource_urls)
                information.appendChild(record_timestamps)


                
                



            
            });

   
        }
    }
request.send();