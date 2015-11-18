function html5replace() {
    SiteOptions.video_experiments = '';
    var replaceplayer = function() {
        setTimeout(function() {
            // Don't run if we're not on a channel page
            if (!window.Ember || !window.App || App.__container__.lookup("controller:application").get("currentRouteName") !== "channel.index") {
                return;
            }
            $(".js-player").html($("<iframe>").attr("src", "http://player.twitch.tv/?html5&fullscreen=enabled&branding=false&showInfo=false&channel="+window.location.pathname.substr(1)).attr("width", "100%").attr("height", "100%").css("border", 0).attr("scrolling", "no").attr("frameborder", 0).attr("allowfullscreen", ""));
        }, 5000);
    };
    
    replaceplayer();
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ html5replace +')();'));
document.body.appendChild(script);
