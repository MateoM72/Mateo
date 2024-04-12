// Initialize Leaflet map
var map = L.map('nymap').setView([35.15489868446626, -90.05240775467759], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([35.155161840409285, -90.05230046632413]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Bass Pro Shops!</b><br>This is a Leaflet map.").openPopup();
