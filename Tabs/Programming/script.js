
readTextFile('Tabs/Programming/Programming.txt');
createMenu();
createFooter();

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                // alert(allText);
                parseText(allText);
            }
        }
    }
    rawFile.send(null);
}

function parseText(text) {
    var articles = text.split("***ARTICLES_SEPARATOR***");
    var textHTML = "";
    for (var i = 0; i < articles.length; i++) {
        var articleStr = articles[i];
        var components = articleStr.split('***COMPONENTS_SEPARATOR***');
        var title = components[0];
        var text = components[1];
        var link = components[2];

        /*
            ***ARTICLES_SEPARATOR***
            Meu primeiro artigo
            ***COMPONENTS_SEPARATOR***
            sadfkjh sdfkjhsd fksjdfh asdfkjhsdf
            sadkfjhsf ksdjfh sadkfjhsad fkjsafd
            sadkjfhsa dfaskjdfh asdfkjashdf 
            asdkfjh asdfkajsdhf kasdjfhaskdjfh
            ***COMPONENTS_SEPARATOR***
            www.google.com
        */

        textHTML += "\n<!--***************************************************-->\n";
        textHTML += "<a href=" + link + ">\n";
        textHTML += "\t<article class=\"blog_post shadow-box\">\n";
        textHTML += "\t\t<h2 class=\"blog_post_title\">" + title + "</h2>\n";
        textHTML += "\t\t" + text  + "\n"; 
        textHTML += "\t</article>\n";
        textHTML += "</a>\n";
        textHTML += "\n<!--***************************************************-->\n";
    }

    // alert(textHTML);
    var blogElement = document.getElementById('main-section');
    blogElement.innerHTML = textHTML;
}

function createMenu() {
    var file = "menu.txt";
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    // alert(allText);
                    parseMenu(allText);
                }
            }
        }
        rawFile.send(null);
}

function parseMenu(text) {
    var elem = document.getElementById("menu");
        var newText = "";
        var components = text.split('\n');
        for (var i = 0; i < components.length; i++) {
            // <div class="menuItem"><a href="#" id="menu_selected">Home</a></div>
            newText += "<div class=\"menuItem\"><a href=\"";
            if (components[i] == "Home") {
                newText += "index";
            } else {
                newText += components[i].toLowerCase();
            }
            newText += ".html\">";
            newText += components[i];
            newText += "</a></div>\n";
        }
        elem.innerHTML = newText;
}

function createFooter() {
    var elem = document.getElementById("page footer");
    var newText = "";
    newText += "<div id=\"social_links\">\n";
    newText += "<a href=\"http://www.github.com/emannuelOC\" target=\"_blank\" class=\"fa fa-github fa-2x\"></a>\n";
    newText += "<a href=\"http://www.twitter.com/emannuel_oc\" target=\"_blank\" class=\"fa fa-twitter fa-2x\"></a>\n";
    newText += "<a href=\"http://www.facebook.com/emannuel.carvalho\" target=\"_blank\" class=\"fa fa-facebook fa-2x\"></a>\n";
    newText += "<a href=\"http://www.instagram.com/emannuel_oc\" target=\"_blank\" class=\"fa fa-instagram fa-2x\"></a>\n";
    newText += "<a href=\"http://stackoverflow.com/users/2557380/emannuel-carvalho\" target=\"_blank\" class=\"fa fa-stack-overflow fa-2x\"></a>\n";
    newText += "</div>\n";
    newText += "<p id=\"copyright\">Emannuel Carvalho | 2017</p>\n";
    elem.innerHTML = newText;
}