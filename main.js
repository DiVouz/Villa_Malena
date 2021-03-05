$(document).ready( resizeObjects );

$(window).resize( resizeObjects );

function resizeObjects() {
    $(".conImg").css('height', $(window).height() - $(".navbar").outerHeight());
}

$("#buttonFindMore").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#services").offset().top-$("#navbar").height()
    }, 1000);
});

$("#buttonLogo").stop(true, false).click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#conImg").offset().top
    }, 1000);
});

$("#buttonServices, #buttonServicesSm").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#services").offset().top-$("#navbar").height()
    }, 1000);
});

$("#buttonDescription, #buttonDescriptionSm").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#description").offset().top-$("#navbar").height()
    }, 1000);
});

$("#buttonImages, #buttonImagesSm").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#images").offset().top-$("#navbar").height()
    }, 1000);
});

$("#buttonMap, #buttonMapSm").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#map").offset().top-$("#navbar").height()
    }, 1000);
});

$("#buttonContact, #buttonContactSm").click(function() {
    $('html, body').stop(true, false).animate({
        scrollTop: $("#contact").offset().top-$("#navbar").height()
    }, 1000);
});

var slideIndex = 1;
var slideId = ["slides"];
showSlides(1);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var x = document.getElementsByClassName(slideId);
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    
    x[slideIndex-1].style.display = "block";
}

$("#servicesMoreButton").click(function() {
    var $this = $(this); 
    var $content = $("#servicesToHide");
    var linkText = $this.text();

    $content.toggle(1000);

    if(linkText === "Show More"){
        linkText = "Show Less";
    } else {
        linkText = "Show More";
    };

    $this.text(linkText);
});

$("#descriptionMoreButton").click(function() {
    var $this = $(this); 
    var $content = $("#descriptionToHide");
    var linkText = $this.text();

    $content.toggle(1000);

    if(linkText === "Show More"){
        linkText = "Show Less";
    } else {
        linkText = "Show More";
    };

    $this.text(linkText);
});

var navbarIsOpen = false;
function openNavBar() {
    $(".navButSm").toggle(1000);
}

var maxWidth = window.matchMedia("(max-width: 1000px)");
myFunction(maxWidth);
maxWidth.addListener(myFunction);

function myFunction(x) {
    if (!x.matches) {
        $(".navButSm").hide();
    }
}