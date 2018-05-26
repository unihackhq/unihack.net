var map;
var loc = new google.maps.LatLng(-33.881958, 151.195237);

function initialize() {

  // styling the map
  var styles = [
    {},
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  // map options
  var mapOptions = {
    zoom: 16,
    minZoom: 14,
    center: loc,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styles,
  };

  // create map
  map = new google.maps.Map(document.getElementById("syd-2018-map"),
      mapOptions);

  // create marker
  var marker = new google.maps.Marker({
      position: loc,
      map: map,
      title: 'Coder Academy'
  });

};

google.maps.event.addDomListener(window, "load", initialize);
