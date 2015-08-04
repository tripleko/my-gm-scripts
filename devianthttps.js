// ==UserScript==
// @name        Deviant HTTPS
// @namespace   github.com/tripleko
// @description Redirect to https and clean up http references on DeviantArt.
// @version     1
// @include     http://*.deviantart.*
// @include     https://*.deviantart.*
// @run-at      document-start
// @grant       none
// ==/UserScript==

var loc = document.location.toString();
if(loc.startsWith("http://")) {
    window.stop();
    loc = loc.replace("http:", "https:");
    window.location.replace(loc);
}

document.addEventListener ("DOMContentLoaded", contentReady);

function contentReady() {
    var da_re = new RegExp("(http:\/\/)([a-z0-9\.-]+)\.deviantart");
    var links = document.getElementsByTagName("a");
    
    for(var i = 0; i < links.length; i++){
        if(da_re.test(links[i].href)) {
            links[i].href = links[i].href.replace("http:", "https:");
        }
    }

    var imgs = document.getElementsByTagName("img");

    for(var i = 0; i < imgs.length; i++){
        if(da_re.test(imgs[i].href)) {
            imgs[i].href = imgs[i].href.replace("http:", "https:");
        }
    }
}
