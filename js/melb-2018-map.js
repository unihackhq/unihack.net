var map;
var loc = new google.maps.LatLng(-37.809799, 144.969877);

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
  map = new google.maps.Map(document.getElementById("melb-2018-map"),
      mapOptions);

  // create marker
  var marker = new google.maps.Marker({
      position: loc,
      map: map,
      title: 'Telstra Labs'
  });

};

google.maps.event.addDomListener(window, "load", initialize);
