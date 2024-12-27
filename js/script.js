// Initialize the map
var map = L.map('map').setView([15.371621898978358, -14.557693528138243], 7);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([15.371621898978358, -14.557693528138243]).addTo(map)
    .bindPopup('Je suis un marqueur.')
    .openPopup();

// Add a circle
var circle = L.circle([15.0960147781546, -14.502761888157183], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100000
}).addTo(map).bindPopup('Je suis un cercle.');

// Add a polygon
var polygon = L.polygon([
    [14.522462657297453, -13.360183776551077],
    [12.97514243571038, -12.404373240880584],
    [13.16777218797852, -13.524978696494264],
    [13.851437724974042, -14.01936345632383],
    [14.416084063681746, -13.612869320463963]
]).addTo(map).bindPopup('I am a polygon.');
