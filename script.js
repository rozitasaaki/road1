const map = L.map('map').setView([29.7063, 52.1147], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([29.7063, 52.1147]).addTo(map)
    .bindPopup('Shiraz, Iran')
    .openPopup();
// Load GeoJSON data and add it to the map
fetch('mydata.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));
