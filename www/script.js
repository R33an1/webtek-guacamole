if(document.querySelector("#navDesktop")){

    const headerDesktop = document.querySelector("#navDesktop");

    headerDesktop.innerHTML = ("<ul>"
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
    );
}

if(document.querySelector("#navMobile")){
    const headerMobile = document.querySelector("#navMobile");

    headerMobile.innerHTML = ("<div>"
    +        "<i class=\"material-icons\">view_headline</i>"
    +    "</div>"
    +    "<a href=\"../index.html\"><img src=\"../img/logo.png\" alt=\"Logo\"></a>"
    +    "<div class=\"content\">"
    +        "<div>"
    +            "<h3>Garvergården <i class=\"material-icons\">arrow_drop_down</i></h3>"
    +            "<ul>"
    +                "<li>"
    +                    "<a href=\"../garvergarden/hovedside.html\">Hovedside</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"../garvergarden/leilighet.html\">Leiligheter</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"../garvergarden/bedrift.html\">Næringsliv</a>"
    +                "</li>"
    +            "</ul>"
    +        "</div>"
    +        "<div>"
    +            "<h3>Lunkegården <i class=\"material-icons\">arrow_drop_down</i></h3>"
    +            "<ul>"
    +                "<li>"
    +                    "<a href=\"\">Hovedside</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Leiligheter</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Næringsliv</a>"
    +                "</li>"
    +            "</ul>"
    +        "</div>"
    +        "<div>"
    +            "<h3>Parkgården <i class=\"material-icons\">arrow_drop_down</i></h3>"
    +            "<ul>"
    +                "<li>"
    +                    "<a href=\"\">Hovedside</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Leiligheter</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Næringsliv</a>"
    +                "</li>"
    +            "</ul>"
    +        "</div>"
    +        "<div>"
    +            "<h3>Gimle <i class=\"material-icons\">arrow_drop_down</i></h3>"
    +            "<ul>"
    +                "<li>"
    +                    "<a href=\"\">Hovedside</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Leiligheter</a>"
    +                "</li>"
    +                "<li>"
    +                    "<a href=\"\">Næringsliv</a>"
    +                "</li>"
    +           "</ul>"
    +        "</div>"
    +    "</div>"
    );
}

if(document.querySelector("footer")){
    const footer = document.querySelector("footer");

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

//Mobile navbar

const navButton = document.querySelector("#navMobile>div");
const navContent = document.querySelector("#navMobile>.content");
const navContentHeaders = document.querySelectorAll("#navMobile>.content>div");

navButton.addEventListener('click', () => {
    if(navContent.style.display == "none"){
        navContent.style.display = "block";
    }
    else{
        navContent.style.display = "none";
    }
});

navContentHeaders.forEach((x) => x.addEventListener('click', (event) => {
    let ele = event.currentTarget.children[1].style;
    //console.log(ele);
    if(ele.display == ""){
        ele.display = "block";
    }
    else{
        ele.display = "";
    }
}));