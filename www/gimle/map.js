function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(60.883605, 11.560679),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
