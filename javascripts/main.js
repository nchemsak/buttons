"use strict";

$(function() {
    $('.btn-effect')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span.js-btn').css({
                top: relY,
                left: relX
            });
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span.js-btn').css({
                top: relY,
                left: relX
            });
        });
});

// squishy button
document.addEventListener("touchstart", function() {},false); // add this junk to make iOS observe the :active state for touch
