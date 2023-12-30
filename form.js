 
document.addEventListener("DOMContentLoaded", function () {
    
    var myLatLng = [-1.9598149565889007,  30.121233337241737]; 

    var map = L.map("map").setView(myLatLng, 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    L.marker(myLatLng).addTo(map)
        .bindPopup("Eloge Chris Location!");
});
function goback() { window.history.back();}

 