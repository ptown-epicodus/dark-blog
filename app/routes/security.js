import Ember from 'ember';
var latitude = 0;
var longitude = 0;
function getLoc(){
  $.get("http://ipinfo.io", function() {
  }, "jsonp").then(function(response){

    var splitLoc = response.loc.split(",");

    latitude= splitLoc[0];
    longitude= splitLoc[1];
    $.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyBf5YOoYYu3lt24j_Tq_Ef0Rhnh1V5ZVYc",function(){}, "jsonp").then(function(){
      var latLng = {lat: parseInt(latitude), lng: parseInt(longitude)};
      var map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: 8
      });
      var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: 'Hello World!'
        });
    })

  })
}

export default Ember.Route.extend({
  model(){

  },
  actions: {
    log(model){
      $(".mapDiv").toggle();
      getLoc();
    }
  }
});
