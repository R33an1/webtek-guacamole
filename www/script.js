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

const fontSizeList1 = ["1em", "1.125em", "1.25em", "1.375em","1.5em"]
const fontSizeList2 = ["1.5em", "1.6875em", "1.875em", "2.0625em","2.25em"]
var i = 0

const fSLP= document.querySelectorAll("p");
const fSLC= document.querySelectorAll(".container h2")


function fontSizeReciver(){
    if (i < fontSizeList1.length-1){
        i+=1
    }
    else {
        i = 0
    }
    for (var n = 0; n < fSLP.length; n++) {
        fSLP[n].style.fontSize = fontSizeList1[i];
    }
    for (var v = 0; v < fSLC.length; v++) {
        fSLC[v].style.fontSize = fontSizeList2[i];
        }
}
