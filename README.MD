I'm sharing part of my collection of greasemonkey scripts that I wrote. These scripts are also compatible with TamperMonkey and are all self-contained, single files that don't require other libraries.

Anybody is free to make use of and/or modify them, but they are optimized for my personal use cases and may require some adjustments for yours.

A summary of what's here:

##Redirect Distractions

redirectdis.js

I've been a longtime fan of addon's like <a href="http://www.proginosko.com/leechblock.html">leechblock</a> that can temporarily block distracting websites.

Sometimes I'd find myself a little too distracted by parts of reddit or youtube and would lose more focus than I wanted after an impulsive click or two. While I was generally satisfied with leechblock, one of the problems I had was that it would block the entire domain. I couldn't block just a single youtube channel or whitelist select subreddits like r/programming. This ended up being my solution to that.

If you'd like to modify the script for your own use, just edit the subreddit_whitelist and block_list array values as you please. The only things I personally use the whitelist for are subreddits, hence the name. However, it's very easy to expand the whitelist to include non-reddit sites, just remove the if statement and associated brackets noted by the comment. Any matches on the blocklist are redirected to about:blank.

For the URL checking, I use a naive indexOf instead of a more narrow regex test because it's simpler to write, has slightly better performance on Firefox 39, and has the added benefit of blocking a number of proxy sites and google cache. The small negative would be that it could end up blocking something like siteiwanttovist.com/b/reddit.com, but realistically that's quite unlikely.

I don't have support for time based blocking or anything like that and instead just manually enable and disable the script. I find this simple approach works well enough for me.

##Deviant HTTPS

devianthttps.js

As of July 2015, EFF's <a href="https://www.eff.org/Https-everywhere">HTTPS Everywhere</a> tool did not enable DeviantArt's site by default and the experimental ruleset was causing me some display issues.

I ended up writing a small script to correct this. It forces a redirect to https for deviantart.* and also changes link href and img src attributes that link to deviantart to use https.

TODO: Will add more scripts here later.
