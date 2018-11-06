if (document.querySelector("#navDesktop")) {

    const headerDesktop = document.querySelector("#navDesktop");

    headerDesktop.innerHTML = ("<ul>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Garvergården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"../garvergarden/hovedside.html\">Hoveside</a>" +
        "<a href=\"../garvergarden/leilighet.html\">Leiligheter</a>" +
        "<a href=\"../garvergarden/bedrift.html\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Lunkegården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"#\">Hoveside</a>" +
        "<a href=\"#\">Leiligheter</a>" +
        "<a href=\"#\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<a id=\"home\" href=\"../index.html\"><img src=\"../img/logo.png\"></a>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Parkgården <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"#\">Hoveside</a>" +
        "<a href=\"#\">Leiligheter</a>" +
        "<a href=\"#\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "<li class=\"drop\">" +
        "<div class=\"drop-title\">Gimle <i class=\"material-icons\">arrow_drop_down</i></div>" +
        "<div class=\"drop-content\">" +
        "<a href=\"#\">Hoveside</a>" +
        "<a href=\"#\">Leiligheter</a>" +
        "<a href=\"#\">Næringsliv</a>" +
        "</div>" +
        "</li>" +
        "</ul>"
    );
}

if (document.querySelector("#navMobile")) {
    const headerMobile = document.querySelector("#navMobile");

    headerMobile.innerHTML = ("<div>" +
        "<i class=\"material-icons\">view_headline</i>" +
        "</div>" +
        "<a href=\"../index.html\"><img src=\"../img/logo.png\" alt=\"Logo\"></a>" +
        "<div class=\"content\">" +
        "<div>" +
        "<h3>Garvergården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"../garvergarden/hovedside.html\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"../garvergarden/leilighet.html\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"../garvergarden/bedrift.html\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Lunkegården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Parkgården <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div>" +
        "<h3>Gimle <i class=\"material-icons\">arrow_drop_down</i></h3>" +
        "<ul>" +
        "<li>" +
        "<a href=\"\">Hovedside</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Leiligheter</a>" +
        "</li>" +
        "<li>" +
        "<a href=\"\">Næringsliv</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>"
    );
}

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

                    x.style.fontSize = size / multiplier + "px"; //Gjør motsatt utregning av det ovenpå.
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

    navButton.addEventListener('click', () => {
        if (navContent.style.display == "none") {
            navContent.style.display = "block";
        } else {
            navContent.style.display = "none";
        }
    });

    navContentHeaders.forEach((x) => x.addEventListener('click', (event) => {
        let ele = event.currentTarget.children[1].style;
        //console.log(ele);
        if (ele.display == "") {
            ele.display = "block";
        } else {
            ele.display = "";
        }
    }));
}

// bildegalleri

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
    var i;
    var slides = document.getElementsByClassName("picture");
    var dots = document.getElementsByClassName("select");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex  -1].alt;
}
