$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Speaker');
        document.getElementById("speakersnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("sessionsnav").style.borderBottom = "0px";
        document.getElementById("featurednav").style.borderBottom = "0px";
        document.getElementById("connectnav").style.borderBottom = "0px";

    }
}, { threshold: [0.8] });
observerhome.observe(document.querySelector("#speakers"));

var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Sessions');
        document.getElementById("speakersnav").style.borderBottom = "0px";
        document.getElementById("sessionsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("featurednav").style.borderBottom = "0px";
        document.getElementById("connectnav").style.borderBottom = "0px";

    }
}, { threshold: [0.5] });
observerhome.observe(document.querySelector("#sessions"));

var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Featured');
        document.getElementById("speakersnav").style.borderBottom = "0px";
        document.getElementById("sessionsnav").style.borderBottom = "0px";
        document.getElementById("featurednav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("connectnav").style.borderBottom = "0px";

    }
}, { threshold: [0.5] });
observerhome.observe(document.querySelector("#featured"));

var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Connect');
        document.getElementById("speakersnav").style.borderBottom = "30px";
        document.getElementById("sessionsnav").style.borderBottom = "0px";
        document.getElementById("featurednav").style.borderBottom = "0px";
        document.getElementById("connectnav").style.borderBottom = "3px solid #ffc107";

    }
}, { threshold: [0.8] });
observerhome.observe(document.querySelector("#connect"));