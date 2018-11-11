function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(60.882996, 11.560926),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
