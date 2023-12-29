 
document.addEventListener("DOMContentLoaded", function () {
    
    var myLatLng = [-1.906945242451, 30.13221579514]; 
    
    var map = L.map("map").setView(myLatLng, 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker(myLatLng).addTo(map)
        .bindPopup("Eloge Chris Location!");
});


 