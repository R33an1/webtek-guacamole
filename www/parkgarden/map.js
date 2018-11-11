function myMap() {
    var mapProp= {
        center: new google.maps.LatLng(60.883323, 11.561333),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    } 