
readTextFile('myTextFile.txt')

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
        textHTML += "\t<article class=\"blog_post\">\n";
        textHTML += "\t\t<h2 class=\"blog_post_title\">" + title + "</h2>\n";
        textHTML += "\t\t" + text  + "\n"; 
        textHTML += "\t</article>\n";
        textHTML += "</a>\n";
        textHTML += "<p class=\"article_separator\">***</p>\n";
        textHTML += "\n<!--***************************************************-->\n";
    }

    // alert(textHTML);
    var blogElement = document.getElementById('blog');
    blogElement.innerHTML = textHTML;
}