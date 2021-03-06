//Leter etter element med id navDesktop. 
if (document.querySelector("#navDesktop")) {

    const headerDesktop = document.querySelector("#navDesktop");

    let prefix = "../";
    //Prefixer filplassering utifra om man er på desktop siden.
    if (document.querySelector("#navDesktop.index")) {
        prefix = "";
    }

    //Legger til html kode i form av string til navbar elementet. 
    headerDesktop.innerHTML = ("<ul>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Garvergården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"" + prefix + "garvergarden/hovedside.html\">Hovedside</a>" +
        "<a href=\"" + prefix + "garvergarden/leilighet.html\">Leiligheter</a>" +
        "<a href=\"" + prefix + "garvergarden/bedrift.html\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Lunkegården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"" + prefix + "lunkegarden/hovedside.html\">Hovedside</a>" +
        "<a href=\"" + prefix + "lunkegarden/leilighet.html\">Leiligheter</a>" +
        "<a href=\"" + prefix + "lunkegarden/bedrift.html\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<a id=\"home\" href=\"" + prefix + "index.html\"><img src=\"" + prefix + "img/logo.png\"></a>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Parkgården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"" + prefix + "parkgarden/hovedside.html\">Hovedside</a>" +
        "<a href=\"" + prefix + "parkgarden/leilighet.html\">Leiligheter</a>" +
        "<a href=\"" + prefix + "parkgarden/bedrift.html\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Gimle <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"" + prefix + "gimle/hovedside.html\">Hovedside</a>" +
        "<a href=\"" + prefix + "gimle/leilighet.html\">Leiligheter</a>" +
        "<a href=\"" + prefix + "gimle/bedrift.html\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "</ul>"
    );
}

//Fungerer likt som over
if (document.querySelector("#navMobile")) {
    const headerMobile = document.querySelector("#navMobile");

    let prefix = "../";

    if (document.querySelector("#navMobile.index")) {
        prefix = "";
    }

    headerMobile.innerHTML = ("<div>" +
        "<i class=\"material-icons\">view_headline</i>" +
        "</div>" +
        "<a href=\"" + prefix + "index.html\"><img src=\"" + prefix + "img/logo.png\" alt=\"Logo\"></a>" +
        "<div class=\"content\">" +
        "<div>" +
        "<h3>Garvergården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"" + prefix + "garvergarden/hovedside.html\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "garvergarden/leilighet.html\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "garvergarden/bedrift.html\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Lunkegården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"" + prefix + "lunkegarden/hovedside.html\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "lunkegarden/leilighet.html\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "lunkegarden/bedrift.html\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Parkgården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"" + prefix + "parkgarden/hovedside.html\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "parkgarden/leilighet.html\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "parkgarden/bedrift.html\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Gimle <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"" + prefix + "gimle/hovedside.html\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "gimle/leilighet.html\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"" + prefix + "gimle/bedrift.html\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>"
    );
}

//Fungerer likt som over
if (document.querySelector("footer")) {
    const footer = document.querySelector("footer");

    footer.innerHTML = ("<div>" +
        "<div>" +
        "<h4>Kontaktinformasjon</h4>" +
        "</div>" +
        "<div>" +
        "Telefon: +47 913 11 422<br>" +
        "E-Post: lunke@me.com" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<div>" +
        "<h4>Besøksinformasjon</h4>" +
        "</div>" +
        "<div>" +
        "Åpningstider: 09:00-15:00<br>" +
        "Adresse: Storgata 7, 2408 Elverum" +
        "</div>" +
        "</div>");
}

//Font size changer
let count = 1;
let multiplier = 1.25; //Størrelse på endring

//Sjekker om font size knappen er tilstedet. 
if (document.querySelector("#fontSize")) {
    let textEls = [];
    textEls.push(document.querySelectorAll("p"));
    textEls.push(document.querySelectorAll(".list>li"));
    textEls.push(document.querySelectorAll("h2"));

    document.querySelector("#fontSize").addEventListener("click", () => {
        fontResize(textEls);
    });
}

function fontResize(elements) {
    if (count < 3) {

        for (element of elements) {
            element.forEach((x) => {
                let size = window.getComputedStyle(x).getPropertyValue("font-size"); //Henter nåværende tekststørrelse
                size = parseFloat(size.substr(0, size.length - 2)); //Henter kun tallverdien

                x.style.fontSize = size * multiplier + "px"; //Endrer tallverdien ved å gange med multiplier
            });
        }
    } else {
        count = 0;
        for (element of elements) {
            element.forEach((x) => {
                for (i = 0; i < 2; i++) {
                    let size = window.getComputedStyle(x).getPropertyValue("font-size");
                    size = parseFloat(size.substr(0, size.length - 2));

                    x.style.fontSize = size / multiplier + "px"; //Gjør motsatt utregning av det ovenpå for å nullstille.
                }
            });
        }
    }
    count += 1;
}

//Mobile navbar
if (document.querySelector("#navMobile>div")) {
    const navButton = document.querySelector("#navMobile>div");
    const navContent = document.querySelector("#navMobile>.content");
    const navContentHeaders = document.querySelectorAll("#navMobile>.content>div");

    //Legger til eventlistener til mobil navbar, for å åpne og lukke menyen. 
    navButton.addEventListener('click', () => {
        if (navContent.style.display == "block") {
            navContent.style.display = "none";
        } else {
            navContent.style.display = "block";
        }
    });

    navContentHeaders.forEach((x) => x.addEventListener('click', (event) => {
        let ele = event.currentTarget.children[1].style;
        if (ele.display == "") {
            ele.display = "block";
        } else {
            ele.display = "";
        }
    }));
}

// Bildegalleri
if (document.querySelector(".picture")) {
    var slideIndex = 1;
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("picture");
    let dots = document.getElementsByClassName("select");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Viser gjeldende bilde
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

//easter egg :)
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}