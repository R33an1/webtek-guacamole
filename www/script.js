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
        "Telefon: <br>" +
        "E-Post:" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<div>" +
        "<h4>Besøksinformasjon</h4>" +
        "</div>" +
        "<div>" +
        "Åpningstider: <br>" +
        "Adresse:" +
        "</div>" +
        "</div>");
}

//Font size changer
const fontSizes = ["100%", "125%", "150%"];
const fontSizeList1 = ["1em", "1.125em", "1.25em", "1.375em", "1.5em"]
const fontSizeList2 = ["1.5em", "1.6875em", "1.875em", "2.0625em", "2.25em"]
let sizes = {p: 0, h2: 0, li: 0};


if (document.querySelector("#fontSize")) {
    let textEls = [];    
    textEls.push(document.querySelectorAll("p"));
    sizes.p = document.querySelector("p").style.fontSize;

    textEls.push(document.querySelectorAll("h2"));
    sizes.h2 = document.querySelector("h2").style.fontSize;

    textEls.push(document.querySelectorAll("li"));
    sizes.li = document.querySelector("li").style.fontSize;

    document.querySelector("#fontSize").addEventListener("click", () => {
        fontResize(textEls);
    });
}


function fontResize(elements) {
    if (sizes.length < 3) {
        
    } else {
        i = 0
    }

    console.log(elements);
    

    for(element of elements){
        element.forEach((x) => {x.style.fontSize = fontSizes[i]});
        //element.style.fontSize = fontSizeList1[i];
    }

    /*
    for (var n = 0; n < fSLP.length; n++) {
        fSLP[n].style.fontSize = fontSizeList1[i];
    }
    for (var v = 0; v < fSLC.length; v++) {
        fSLC[v].style.fontSize = fontSizeList2[i];
    }*/
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

if (document.querySelector(".mySlides")) {
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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
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
    captionText.innerHTML = dots[slideIndex + 2].alt;
}