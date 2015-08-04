// ==UserScript==
// @name        Redirect Distractions
// @namespace   github.com/tripleko
// @description Simple page blocker to help minimize distractions.
// @version     1
// @grant       none
// @run-at document-start
// ==/UserScript==

var loc = document.location.toString();
var whitelisted = false;

var subreddit_whitelist = [
    "reddit.com/r/programming",
    "reddit.com/r/flask",
    "reddit.com/r/android",
    "reddit.com/r/firefox",
    "reddit.com/r/python",
    "reddit.com/r/webdev",
    "reddit.com/r/web_design",
    "reddit.com/r/netsec",
    "reddit.com/r/javascript",
    "reddit.com/r/ruby",
    "reddit.com/r/golang",
    "reddit.com/r/sql",
    "reddit.com/r/javascript"
];

var block_list = [
    "twitch.tv",
    "youtube.com/user/LoLChampSeries",
    "leagueoflegends.com",
    "lolesports.com",
    "lol.esportspedia.com",
    "youtube.com/user/RiotGamesInc",
    "riotgames.com",
    "leagueoflegends.wikia.com",
    "cnn.com",
    "latimes.com"
];

//It's trivial to expand the whitelist to include non-reddit sites.
//Just remove this if conditional.
if(loc.indexOf("reddit.com") > -1) {
    for(var i = 0; i < subreddit_whitelist.length; i++) {
        if(loc.indexOf(subreddit_whitelist[i]) > -1) {
            whitelisted = true;
            break;
        }
    }

    if(!whitelisted) {
        window.stop();
        window.location.replace("about:blank");
    }
}

else {
    for(var i = 0; i < block_list.length; i++) {
        if(loc.indexOf(block_list[i]) > -1) {
            window.stop();
            window.location.replace("about:blank");
            break;
        }
    }
}

