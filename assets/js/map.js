var map = L.map('map', {
    center: [-12.389235457654104, -76.77754125744788],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-12.416426,-76.824581], [-12.348452,-76.702831]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3'] });

bgoogleSat.addTo(map);







var curvas_nivel = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_bartolo/wms?", {
    layers: "web_san_bartolo:curvas_San_bartolo", //gisweb:Curvas de nivel
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
curvas_nivel.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_bartolo/wms?", {
    layers: "web_san_bartolo:colegio_san_bartolo", //gisweb:Colegio
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
colegios.addTo(map);


var grifo = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_bartolo/wms?", {
    layers: "web_san_bartolo:grifos", //gisweb:Grifos
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
grifo.addTo(map);

var iglesias = L.tileLayer.wms("http://localhost:8080/geoserver/web_san_bartolo/wms?", {
    layers: "web_san_bartolo:iglesia_san", //gisweb:iglesias
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO"
 });
iglesias.addTo(map);



var baseMaps = {
    "OSM": basemapOSM,
    "Google Satelite": bgoogleSat
    
};

var overlayMaps = {
    "Cuervas de nivel": curvas_nivel,
    "colegios": colegios,
    "grifo":grifo,
    "iglesias":iglesias,
   
    

};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
