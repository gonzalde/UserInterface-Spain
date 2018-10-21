
// Switches to personal information panel.
function personalInfo() {
    document.title = "The Restraunteur - Personal Information";
    var column2 = document.getElementsByClassName("column2");
    for (var i = 0; i < column2.length; ++i) {
        column2[i].style.display = "none";
    }
    var pInfo = document.getElementById("personal-info");
    pInfo.style.display = "block";
}

// Switches to opinions panel.
function getOpinions() {
    document.title = "The Restraunteur - Opinions";
    var column2 = document.getElementsByClassName("column2");
    for (var i = 0; i < column2.length; ++i) {
        column2[i].style.display = "none";
    }
    var opinonList = document.getElementById("opinion-list");
    opinonList.style.display = "block";
}

// Performs log out.
function restart() {
    var content = document.getElementById("body");
    content.classList.add("hidden");
    document.getElementById("entrance").classList.remove("hidden");
}

// Registration.
function register() {
    document.getElementById("logIn").classList.add("hidden");
    document.getElementById("Register").classList.remove("hidden");
}

// Handles the preferences
var prefCounter = 0;
function addPreference() {
    if (!checkPreferences()) {
        window.alert("All preferences need to be filled.")
        return;
    }
    var tagName = "pref_" + prefCounter;
    prefCounter++;
    $(".pref-list").append("<div id=\"" + tagName + "\" class=\"Preferences\"><b contenteditable=\"true\">Add Preference</b><i class=\"fa fa-times\" onclick=\"removePreference(" + tagName + ")\"></i></div>");
}

// Removes preferences
function removePreference(idTag) {
    $("#" + idTag.id).remove();
}

// Checks if their are valid preferences
function checkPreferences() {
    for (var i = 0; i < prefCounter; ++i) {
        var text = $("#pref_" + i).text();
        if (text == "Add Preference" || text == '') {
            return false;
        }
    }
    return true;
}

// Restraunt info keyed  by number.
var restrauntInfo = [
    {
        name: 'Gino\'s',
        address: 'Glorieta de Quevedo, 8, 28015 Madrid',
        website: 'ginos.es',
        image: 'images/ginos-logo.png',
        number: '912759211',
        description: 'En Ginos preparamos auténtica comida italiana con ingredientes frescos cocinados al momento, para ofrecerte los mejores platos italianos artesanales.',
        foodType: 'Pizza, Pasta, and Italian Plates',
        priceRange: '$-$$',
        review: 'Ginos is great for family dinners, they have an amazing 2 for 1 deal from Sunday to Thursday. The pizza\'s are thin and crispy perfect for anyone.',
        facebook: 'https://www.facebook.com/Ginos/',
        twitter: 'https://twitter.com/ginosristorante'
    },
    {
        name: 'Alcaravea',
        address: 'Calle de Cea Bermúdez, 38, 28003 Madrid',
        website: 'http://alcaravea.com/',
        image: 'images/alcaravea-logo.png',
        number: '915336932',
        description: 'La cocina tradicional y de mercado es nuestra esencia. El mejor condimento: una pizca de renovación.',
        foodType: 'Spanish Home Cuisine, Great Cocktails',
        priceRange: '$$-$$$',
        review: 'I had an amazing dinner there with 3 friends. The dinner menu had several' +
            'options, all of which were well priced and decent portion size. I' +
            'went to the one in Chamberi, it had a nice atmosphere that felt like' +
            'home. Recommended for anyone who wants to enjoy a great time.',
        facebook: 'https://www.facebook.com/enalcaravea/?rf=696324553733969',
        twitter: 'https://twitter.com/enalcaravea'
    }];

function getPopupInformation(restrauntId) {
    var rId = restrauntId.substring(1);
    var r = restrauntInfo.filter(r => r.number == rId)[0];
    var rClass = "popup-" + rId;
    var rHide = "hidePopupInformation(\"" + rClass + "\")";
    $(".opinion-popup-content").append("<i style=\"width:80%\" class=\"" + rClass + " fa fa-times\" onclick=" + rHide + "></i>");
    $(".opinion-popup-content").append("<div class=\"rInfo "+rClass+"\"><ul class=\"" + rClass + "\" id=\"rContent\"></ul><div>");
    // Add image
    $("#rContent").append("<li> <img class=\"opinion-logo col-8\" src=\"" + r.image + "\" alt=\"" + r.name + "\"></li>");
    // Add Information
    $("#rContent").append("<li><h3>" + r.name + "</h3><h4>Phone #: " + r.number + "</h4><h4>Price Range: " + r.priceRange + "</h4><h4>Food Type:" + r.foodType + "</h4><h4>Address: " + r.address + "</h4></li>");
    $(".opinion-popup-content").append("<li class=\"" + rClass + "\" >" + r.description + "</li>");
    $(".opinion-popup-content").append("<li class=\"" + rClass + "\" ></li>");
    $(".opinion-popup-content").append("<li class=\"" + rClass + "\" ><h4>Review: </h4><p>" + r.review + "</p></li>");
    $(".opinion-popup-content").append("<div class=\"" + rClass + " rSocial\" >"+
    "<a  href=\""+r.facebook+"\"><i class=\"" + rClass + " rIcon fa fa-facebook\"></i></a>"+
    "<a href=\""+r.twitter+"\"><i class=\"" + rClass + " rIcon fa fa-twitter\"></i></a></div>");
    // Remove bullet points
    $("#rContent").css("list-style-type", "none");
    $(".opinion-popup").show();
}

function hidePopupInformation(restrauntId) {
    $("." + restrauntId).remove();
    $(".opinion-popup").hide();

}

document.getElementById("saveCookies").addEventListener('click', checkCookie);

function createCookies(evt) {
    evt.preventDefault();

    setCookie('username', document.getElementById('rUserName').value);
    setCookie('password', document.getElementById('rPassword').value);
    setCookie('first', document.getElementById('rFirst').value);
    setCookie('last', document.getElementById('rLast').value);
    setCookie('email', document.getElementById('rEmail').value);
    setCookie('dob', document.getElementById('dob').value);
    setCookie('profile', document.getElementById('proPic').value);
    setCookie('address', document.getElementById('address').value);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var user = getCookie("email");
    if (user != "") {
        alert("there is already an account associated with that email");
    } else {
        createCookies();
    }
}