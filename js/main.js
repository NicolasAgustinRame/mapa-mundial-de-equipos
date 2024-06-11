var map = L.map('map').setView([-32.4161, -63.6167], 6);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
osm.addTo(map);

map.on('zoomend', function () {
    if (map.getZoom() >= 10) {
        markers.forEach(marker => map.addLayer(marker));
    } else {
        markers.forEach(marker => map.removeLayer(marker));
    }
});

if (map.getZoom() >= 10) {
    markers.forEach(marker => map.addLayer(marker));
} else {
    markers.forEach(marker => map.removeLayer(marker));
}