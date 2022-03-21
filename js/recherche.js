function recherche() {

let  input = document.getElementById('zone_de_texte').value;
input=input.toLowerCase();
let bonEndroit = "#"+input;
let testExiste = !!document.getElementById(input);

if (testExiste == true) {
    document.getElementById('zone_de_texte').value="";
    document.location.href=bonEndroit;
  } else {
    alert("Désolé, nous ne connaissons pas ce sport")
  }

}