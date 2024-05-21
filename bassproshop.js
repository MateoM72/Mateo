// Initialize Leaflet map
var map = L.map('nymap').setView([40.600660869718055, -74.16006720810553], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var Lakemarker = L.marker([40.60443178048057, -74.15872463093191]).addTo(map);

// Add a popup to the marker
Lakemarker.bindPopup(`
    <b>Willowbrook Lake</b><br>Excellent fishing, Big Bass.<br>
    <img src="https://mateom72.github.io/Mateo/lake.jpg"  style="width: 100px; height: auto;">
`).openPopup();



// Add a marker to the map for New York City
var Westymarker = L.marker([40.597711873833354, -74.15469227557561]).addTo(map);


// Add a popup to the marker
Westymarker.bindPopup(`
    <b>Willowbrook white trail</b><br>A fun hike with a kinda scary bridge <br> 
    <img src="https://mateom72.github.io/Mateo/trail.webp" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var Centermarker = L.marker([40.58836446202525, -74.13912782354012]).addTo(map);


// Add a popup to the marker
Centermarker.bindPopup(`
    <b>Ft Greenbelt Nature Center</b><br>Animals and fun hiking trails, a fine starting and ending points for hiking.<br>
    <img src="https://mateom72.github.io/Mateo/center.jpg"  style="width: 100px; height: auto;">
`).openPopup();





// Load the GeoJSON line file
fetch('https://mateom72.github.io/Mateo/Mateo_eveningRoute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


    // Load the GeoJSON line file
fetch('https://mateom72.github.io/Mateo/Mateo_eveningRoute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});






// Load the GeoJSON polygon file
fetch('https://mateom72.github.io/Mateo/Snugharbor.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});





var categoryColors = {
    "1": "red",
    "2": "orange",
    "3": "yellow",
    "4": "green",
    "X": "gray" // Default color for other categories
};


// Function to set style based on category
function getFeatureStyle(feature) {
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.1; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}


// Load the GeoJSON polygon file
fetch('https://mateom72.github.io/Mateo/Mateo_eveningRoute.geojson')
.then(response => response.json())
.then(geojson => {
    // Add the GeoJSON polygons to the map with customized style
    L.geoJSON(geojson, {
        style: getFeatureStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});

