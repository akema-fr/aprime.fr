
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
/*  let myCenter = new google.maps.LatLng(44.776916, -0.660634); */
  let myCenter = new google.maps.LatLng(48.8434039,2.322897600000033);/*Définit les coordonnées du centre (Aprime Paris)*/
  let canvas = document.getElementById("map");
  let options = {center: myCenter, zoom: 16};/*Définit le centre et le niveau de zoom de la map*/
  let map = new google.maps.Map(canvas, options); /*Génère la map*/
  let marker = new google.maps.Marker({position: myCenter}); /*Génère un marqueur au centre de la map qui ici est Akema*/
  marker.setMap(map);
}