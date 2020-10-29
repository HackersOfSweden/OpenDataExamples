const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);



var request = new XMLHttpRequest();
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=hydrografianlaggning-linje0&q=', true);
request.onload = function () {
    
    let data = JSON.parse(this.response);

 
    if (request.status >= 200 && request.status < 400) {

        data.records.forEach(foreachids => {

            


                const recordcontainer = document.createElement('div');
                recordcontainer.setAttribute('class', 'record-container');

                const h3 = document.createElement('h3');
                h3.setAttribute ('class', 'record-title');
                h3.textContent = foreachids.recordid;

                
                const datasetids = document.createElement('p');
                datasetids.textContent = "datasetid :" + foreachids.datasetid;

               const statuss = document.createElement('p');
               statuss.textContent = "status :" + foreachids.fields.status;

               const objectids = document.createElement('p');
               objectids.textContent = "objectid :" + foreachids.fields.objectid;

               const ongrounds = document.createElement('p');
               ongrounds.textContent = "onground :" + foreachids.fields.onground;

               const originheights = document.createElement('p');
               originheights.textContent = "originheight :" + foreachids.fields.originheight;

               const accuracyplans = document.createElement('p');
               accuracyplans.textContent = "resolution :" + foreachids.fields.accuracyplan;

               const srsoriginplans = document.createElement('p');
               srsoriginplans.textContent = "srsoriginplans :" + foreachids.fields.srsoriginplan;

               const geo_point_2ds = document.createElement('p');
               geo_point_2ds.textContent = "geo_point_2d :" + foreachids.fields.geo_point_2d;
        

               const regdates = document.createElement('p');
               regdates.textContent = "regdate :" + foreachids.fields.regdate;

               const stypes = document.createElement('p');
               stypes.textContent =  "stype :" + foreachids.fields.stype;

               const modificationdates = document.createElement('p');
               modificationdates.textContent =  "modificationdate :" + foreachids.fields.modificationdate;

               const suppliers = document.createElement('p');
               suppliers.textContent =  "supplier :" + foreachids.fields.supplier;

               const gids = document.createElement('p');
               gids.textContent =  "gid :" + foreachids.fields.gid;

               const locationmethods = document.createElement('p');
               locationmethods.textContent =  "locationmethod :" + foreachids.fields.locationmethod;

               const shape_stlengths = document.createElement('p');
               shape_stlengths.textContent =  "shape_stlength :" + foreachids.fields.shape_stlength;

               const srsoriginheights = document.createElement('p');
               srsoriginheights.textContent =  "srsoriginheight :" + foreachids.fields.srsoriginheight;

               const commentarys = document.createElement('p');
               commentarys.textContent =  "commentarys :" + foreachids.fields.commentary;

              const types = document.createElement('p');
              types.textContent = "type :" + foreachids.fields.geo_shape.type;



               const coordinatess = document.createElement('p');
               coordinatess.textContent = "coordinates :" + foreachids.fields.geo_shape.coordinates;





               
               
        

                container.appendChild(recordcontainer);
                recordcontainer.appendChild(h3);
                recordcontainer.appendChild(datasetids);
                recordcontainer.appendChild(statuss);
                recordcontainer.appendChild(objectids);
                recordcontainer.appendChild(ongrounds);
                recordcontainer.appendChild(originheights);
                recordcontainer.appendChild(accuracyplans);
                recordcontainer.appendChild(geo_point_2ds);
                recordcontainer.appendChild(srsoriginplans);
                recordcontainer.appendChild(regdates);
                recordcontainer.appendChild(stypes);
                recordcontainer.appendChild(modificationdates);
                recordcontainer.appendChild(suppliers);
                recordcontainer.appendChild(gids);
                recordcontainer.appendChild(locationmethods);
                recordcontainer.appendChild(coordinatess);
                recordcontainer.appendChild(shape_stlengths);
                recordcontainer.appendChild(srsoriginheights);
                recordcontainer.appendChild(types);
                recordcontainer.appendChild(commentarys);


                
                



            
            });

   
        }
    }
request.send();