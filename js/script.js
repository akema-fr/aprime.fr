/*
var mail_regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

document.getElementById('contact-form-submit').addEventListener("click", function (e) {

  if (!mail_regex.test(document.getElementById("user-email").value)) {
    document.getElementById('masque').css('display','block');
    document.getElementById("user-email").value = "";
    e.stopPropagation();
    e.preventDefault();
  }


});
*/

function validEmail(e) {
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  let lemail=document.getElementById("user-email").value;

  alert(lemail);

  if (!mail_regex.test(document.getElementById("user-email").value)) {
      e.preventDefault();

      // document.getElementById('masque').css('display', 'block');
      document.getElementById('masque').show();
      document.getElementById("user-email").value = "";

      // window.document.location.href = "http://localhost:63342/akema.fr/index.html";
      return false;
  }
  return true;
}

/*Fonction servant à générer une carte Google*/
function myMap() {
  let myCenter = new google.maps.LatLng(44.776916, -0.660634); /*Définit les coordonnées du centre (ici Akema)*/
  let canvas = document.getElementById("map");
  let options = {center: myCenter, zoom: 12};/*Définit le centre et le niveau de zoom de la map*/
  let map = new google.maps.Map(canvas, options); /*Génère la map*/
  let marker = new google.maps.Marker({position: myCenter}); /*Génère un marqueur au centre de la map qui ici est Akema*/
  marker.setMap(map);
}








