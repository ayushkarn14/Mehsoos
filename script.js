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


function showname1() {
    document.getElementById("name1").style.display = "block";
    document.getElementById("row1").style.margin = "42px 20px 0px 20px";
    document.getElementById("row2").style.margin = "0px 20px 0px 20px";
    document.getElementById("name1").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename1() {
    document.getElementById("name1").style.display = "none";
    document.getElementById("row1").style.margin = "42px 20px 42px 20px";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
}

function showname2() {
    document.getElementById("name2").style.display = "block";
    document.getElementById("row1").style.margin = "42px 20px 0px 20px";
    document.getElementById("row2").style.margin = "0px 20px 0px 20px";
    document.getElementById("name2").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename2() {
    document.getElementById("name2").style.display = "none";
    document.getElementById("row1").style.margin = "42px 20px 42px 20px";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
}

function showname3() {
    document.getElementById("name3").style.display = "block";
    document.getElementById("row1").style.margin = "42px 20px 0px 20px";
    document.getElementById("row2").style.margin = "0px 20px 0px 20px";
    document.getElementById("name3").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename3() {
    document.getElementById("name3").style.display = "none";
    document.getElementById("row1").style.margin = "42px 20px 42px 20px";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
}

function showname4() {
    document.getElementById("name4").style.display = "block";
    document.getElementById("row1").style.margin = "42px 20px 0px 20px";
    document.getElementById("row2").style.margin = "0px 20px 0px 20px";
    document.getElementById("name4").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename4() {
    document.getElementById("name4").style.display = "none";
    document.getElementById("row1").style.margin = "42px 20px 42px 20px";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
}

function showname5() {
    document.getElementById("name5").style.display = "block";
    document.getElementById("row1").style.margin = "42px 20px 0px 20px";
    document.getElementById("row2").style.margin = "0px 20px 0px 20px";
    document.getElementById("name5").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename5() {
    document.getElementById("name5").style.display = "none";
    document.getElementById("row1").style.margin = "42px 20px 42px 20px";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
}

function showname6() {
    document.getElementById("name6").style.display = "block";
    document.getElementById("row2").style.margin = "42px 20px 0px 20px";
    document.getElementById("row3").style.margin = "0px 20px 42px 20px";
    document.getElementById("name6").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename6() {
    document.getElementById("name6").style.display = "none";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname7() {
    document.getElementById("name7").style.display = "block";
    document.getElementById("row2").style.margin = "42px 20px 0px 20px";
    document.getElementById("row3").style.margin = "0px 20px 42px 20px";
    document.getElementById("name7").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename7() {
    document.getElementById("name7").style.display = "none";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname8() {
    document.getElementById("name8").style.display = "block";
    document.getElementById("row2").style.margin = "42px 20px 0px 20px";
    document.getElementById("row3").style.margin = "0px 20px 42px 20px";
    document.getElementById("name8").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename8() {
    document.getElementById("name8").style.display = "none";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname9() {
    document.getElementById("name9").style.display = "block";
    document.getElementById("row2").style.margin = "42px 20px 0px 20px";
    document.getElementById("row3").style.margin = "0px 20px 42px 20px";
    document.getElementById("name9").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename9() {
    document.getElementById("name9").style.display = "none";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname10() {
    document.getElementById("name10").style.display = "block";
    document.getElementById("row2").style.margin = "42px 20px 0px 20px";
    document.getElementById("row3").style.margin = "0px 20px 42px 20px";
    document.getElementById("name10").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename10() {
    document.getElementById("name10").style.display = "none";
    document.getElementById("row2").style.margin = "42px 20px 42px 20px";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname11() {
    document.getElementById("name11").style.display = "block";
    document.getElementById("row3").style.margin = "42px 20px 0px 20px";
    document.getElementById("name11").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename11() {
    document.getElementById("name11").style.display = "none";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname12() {
    document.getElementById("name12").style.display = "block";
    document.getElementById("row3").style.margin = "42px 20px 0px 20px";
    document.getElementById("name12").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename12() {
    document.getElementById("name12").style.display = "none";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname13() {
    document.getElementById("name13").style.display = "block";
    document.getElementById("row3").style.margin = "42px 20px 0px 20px";
    document.getElementById("name13").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename13() {
    document.getElementById("name13").style.display = "none";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname14() {
    document.getElementById("name14").style.display = "block";
    document.getElementById("row3").style.margin = "42px 20px 0px 20px";
    document.getElementById("name14").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename14() {
    document.getElementById("name14").style.display = "none";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}

function showname15() {
    document.getElementById("name15").style.display = "block";
    document.getElementById("row3").style.margin = "42px 20px 0px 20px";
    document.getElementById("name15").style.animation = "fadeInAnimation ease 0.5s";

}

function hidename15() {
    document.getElementById("name15").style.display = "none";
    document.getElementById("row3").style.margin = "42px 20px 42px 20px";
}
