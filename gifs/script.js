// (function() {

'use strict';

var videoSupport = !!document.createElement('video').canPlayType;

if (videoSupport) {
    var videoContainer = document.querySelectorAll('.grid-item');

    var grid = document.querySelector('.grid');

    var masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 50,
        percentPosition: true,
        gutter: 50
    });

    /* var fireVideo = function(e) {
         if (video.paused || video.ended)
             video.play();
         else
             video.pause();
     };*/

    if (document.addEventListener) {
        videoContainer.forEach(function(item) {
            var video = item.querySelector('.video');
            var playpause = item.querySelector('.playpause');

            video.style.width = '200px';
            video.controls = false;

            playpause.addEventListener('mouseup', function(e) {
                if (video.paused || video.ended)
                    video.play();
                else
                    video.pause();
            });

            video.addEventListener('click', function(e) {
                if (video.played) {
                    playpause.style.opacity = 1;
                }

                if (e.which == 1) {
                    if (video.paused || video.ended) {
                        playpause.style.opacity = 0;
                        video.play();
                    } else {
                        video.pause();
                    }
                }
            });

        });
    }
}

// })();