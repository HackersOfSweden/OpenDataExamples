const app = document.getElementById('root');
var lat, long, dataset;
var request = new XMLHttpRequest();
let map;
// Script to access Helsingborg's open data set that contains information about the buildings in Helsingborg
request.open('GET', 'https://helsingborg.opendatasoft.com/api/records/1.0/search/?dataset=kartografisk-text-bebyggelse&q=&rows=100', true);

request.onload = function() {
    dataset = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        // Create div  for map
        const mapDiv = document.createElement('div');
        mapDiv.setAttribute('class', 'map_container');
        mapDiv.setAttribute('id', 'map_canvas');
        app.appendChild(mapDiv);
    }
    else{
        console.log('Fel');
    }
}

request.send();

// Needs function initmap for the API script
// it displays map that centers to the current location 
function initMap() {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            showMapLoc();
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

// Error handling for geolocation call
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}

//shows the map centering to the coordinates lat and long
function showMapLoc() {
    map = new google.maps.Map(document.getElementById("map_canvas"), {
        zoom: 13,
        center: new google.maps.LatLng(lat, long),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    //Mark all the geo points
    dataset.records.forEach(item => {
        lat = item.fields.geo_point_2d[0];
        long =  item.fields.geo_point_2d[1];

        const marked = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map,
            title: item.fields.textstring
        });
        (function (marked, item) {
            google.maps.event.addListener(marked, "click", function (e) {
            // Add a listener for the click event.
            drawShape(item.fields.geo_shape.coordinates,item.fields.geo_shape.type);
            });
        })(marked, item);
    });
}

// function to position the map and mark the area in the map
// by drawing the polygin with the given coordinates
function drawShape(shapeCoords,shapeType) {
    var polygonCoords = [];
    switch (shapeType) {
    case "LineString":
        for (var i = 0; i < shapeCoords.length; i++) {
            var pt = {lat: shapeCoords[i][1], lng: shapeCoords[i][0]};
            polygonCoords.push(pt);
        }
        break;
    case "Polygon":
        shapeCoords.forEach(arrayCoords => { 
            for (var i = 0; i < arrayCoords.length; i++) {
                var pt = {lat: arrayCoords[i][1], lng: arrayCoords[i][0]};
                polygonCoords.push(pt);
            }
        });
        break;
    default:
        break;
    }

    // Construct the polygon.
    const shape = new google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
    });
    shape.setMap(map);
}