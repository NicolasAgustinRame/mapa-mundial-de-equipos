function mostrarEquiposFutbol() {
    var markers = [
    L.marker([-34.635611, -58.364791], { icon: boca }).bindPopup("Club Atlético Boca Juniors"),
    L.marker([-34.545278, -58.449722], { icon: river }).bindPopup("Club Atlético River Plate"),
    L.marker([-31.44896, -64.17565], { icon: talleres }).bindPopup("Club Atlético Talleres de Córdoba"),
    L.marker([-31.4035, -64.206272], { icon: belgrano }).bindPopup("Club Atlético Belgrano de Córdoba"),
    L.marker([-31.3837, -64.1803], { icon: instituto }).bindPopup("Instituto Central Córdoba"),
    L.marker([-32.913997, -60.674567], { icon: central }).bindPopup("Club Atlético Rosario Central"),
    L.marker([-32.956056, -60.661444], { icon: newells }).bindPopup("Club Atlético Newell's Old Boys"),
    L.marker([-31.405502, -64.239375], { icon: lasPalmas }).bindPopup("Club Atlético Las Palmas"),
    L.marker([-31.38951, -64.143997], { icon: racingCordoba }).bindPopup("Club Atlético Racing"),
    L.marker([-34.6675, -58.368611], { icon: racingAvellaneda }).bindPopup("Racing Club"),
    L.marker([-34.606028, -58.472583], { icon: argentinosJuniors}).bindPopup("Asociación Atlética Argentinos Juniors"),
    L.marker([-34.750847, -58.387544], { icon: banfield}).bindPopup("Club Atlético Banfield"),
    L.marker([-34.646889, -58.396278], { icon: barracasCentral}).bindPopup("Club Atlético Barracas Central"),
    L.marker([-27.793833, -64.264222], { icon: centralCordoba}).bindPopup("Club Atlético Central Córdoba"),
    L.marker([-34.821753, -58.286511], { icon: defensaJusticia}).bindPopup("Club Social y Deportivo Defensa y Justicia"),
    L.marker([-34.912, -57.9389], { icon: estudiantesDeLaPlata}).bindPopup("Club Estudiantes de La Plata"),
    L.marker([-34.910975, -57.932592], { icon: gimnasiaDeLaPlata}).bindPopup("Club de Gimnasia y Esgrima La Plata"),
    L.marker([-32.920278, -68.839444], { icon: godoyCruz}).bindPopup("Club Deportivo Godoy Cruz Antonio Tomba"),
    L.marker([-32.890786, -68.862777], { icon: independienteRivadavia}).bindPopup("Club Sportivo Independiente Rivadavia"),
    L.marker([-34.670267, -58.370969], { icon: independienteAvellaneda}).bindPopup("Club Atlético Independiente"),
    L.marker([-34.717667, -58.383806], { icon: lanus}).bindPopup("Club Atlético Lanús"),
    L.marker([-26.812778, -65.199167], { icon: atleticoTucuman}).bindPopup("Club Atlético Lanús"),
    L.marker([-34.54018333, -58.48159444], { icon: platense}).bindPopup("Club Atlético Platense"),
    L.marker([-34.653333, -58.443611], { icon: riestra}).bindPopup("Club Deportivo Riestra"),
    L.marker([-34.652064, -58.440119], { icon: sanLorenzo}).bindPopup("Club Atlético San Lorenzo de Almagro"),
    L.marker([-34.585356, -60.929278], { icon: sarmientoJunin}).bindPopup("Club Atlético Sarmiento"),
    L.marker([-34.449333, -58.542219], { icon: tigre}).bindPopup("Club Atlético Tigre"),
    L.marker([-31.631853, -60.715867], { icon: union}).bindPopup("Club Atlético Unión"),
    L.marker([-34.635375, -58.520711], { icon: velez}).bindPopup("Club Atlético Vélez Sarsfield"),
];
    markers.forEach(marker => marker.addTo(map));

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
}

function mostrarEquiposBasquet() {
    var markers = [
        L.marker([-34.59107427061588, -60.95472021785666], { icon: argentinoJunin }).bindPopup("Club Atlético Argentino"),
    ];

    markers.forEach(function(marker) {
        marker.addTo(map)
    })

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
}