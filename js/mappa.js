function initMap() {
    var myLatLng = { lat: 43.2382104, lng: 13.6434774 };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: myLatLng,
      disableDefaultUI: true,
    });

    var cestino1 = new google.maps.Marker({
      position: { lat: 43.238613, lng: 13.644356 },
      map: map,
      title: 'Cestino 1',
      icon: 'marker_green.png'
    });

    var cestino2 = new google.maps.Marker({
      position: { lat: 43.238283, lng: 13.643857 },
      map: map,
      title: 'Cestino 2'
    });

    var cestino3 = new google.maps.Marker({
      position: { lat: 43.237916, lng: 13.643463 },
      map: map,
      title: 'Cestino 3'
    });
}