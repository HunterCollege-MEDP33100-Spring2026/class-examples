const mapElement = document.querySelector('.map');

async function getData() {
    const response = await fetch('nyc-landmarks.json');
    const data = await response.json();
    console.log(data);
    data.forEach(function (item) {
        createMarker(item.latitude, item.longitude);
    })
}

getData();

var map = L.map(mapElement).setView([40.720894, -74.002213], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function createMarker(lat, long) {
    var marker = L.marker([lat, long]).addTo(map);
}