if(document.querySelector("header")){

    header = document.querySelector("header");

    header.innerHTML = ("<header>"
    +       "<ul>"
    +          "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Garvergården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"../garvergarden/hovedside.html\">Hoveside</a>"
    +                   "<a href=\"../garvergarden/leilighet.html\">Leiligheter</a>"
    +                   "<a href=\"../garvergarden/bedrift.html\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Lunkegården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<a id=\"home\" href=\"../index.html\"><img src=\"../img/logo.png\"></a>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Parkgården <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"
    +           "<li class=\"drop\">"
    +               "<div class=\"drop-title\">Gimle <i class=\"material-icons\">arrow_drop_down</i></div>"
    +               "<div class=\"drop-content\">"
    +                   "<a href=\"#\">Hoveside</a>"
    +                   "<a href=\"#\">Leiligheter</a>"
    +                   "<a href=\"#\">Næringsliv</a>"
    +               "</div>"
    +           "</li>"
    +       "</ul>"
    +   "</header>");
}

if(document.querySelector("footer")){
    footer = document.querySelector("footer");

    footer.innerHTML = ("<div>"
    +       "<div>"
    +           "<h4>Kontaktinformasjon</h4>"
    +       "</div>"
    +       "<div>"
    +           "Telefon: <br>"
    +           "E-Post:"
    +       "</div>"
    +   "</div>"
    +   "<div>"
    +       "<div>"
    +           "<h4>Besøksinformasjon</h4>"
    +       "</div>"
    +       "<div>"
    +           "Åpningstider: <br>"
    +           "Adresse:"
    +       "</div>"
    +   "</div>");
}

// bildegalleri
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex+2].alt;
}