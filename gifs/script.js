'use strict';

(function() {
    var videoSupport = !!document.createElement('video').canPlayType;

    if (videoSupport) {
        var videoContainer = document.querySelectorAll('.grid-item');
        var grid = document.querySelector('.grid');
        var count = 0;

        var masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: 0,
            percentPosition: true,
            gutter: 50
        });

        if (document.addEventListener) {
            videoContainer.forEach(function(item) {
                var span = document.createElement('span');
                var playpause = item.querySelector('.playpause');
                var templateVideo = document.querySelector('#video__template').content;
                var fragment = document.createDocumentFragment();
                var lastVideo;

                playpause.innerHTML = '&nbsp;<img src="player-play.png" alt="Play" draggable="false">';
                span.className = 'counts';
                span.textContent = ++count;
                item.appendChild(span);

                item.style.backgroundImage = 'url("gifs/' + count + '.jpg")';
                item.style.backgroundSize = 'contain';

                var createVideo = function() {
                    var cloneVideo = templateVideo.cloneNode(true);
                    var sourceVideo = cloneVideo.querySelector('source');
                    sourceVideo.src = 'gifs/' + span.textContent + '.mp4';

                    return cloneVideo;
                }

                item.addEventListener('click', function(evt) {
                    if (!this.querySelector('.video')) {
                        this.style.backgroundImage = 'url()';
                        this.appendChild(createVideo());
                    }

                    var video = this.querySelector('video');

                    function pauseAll(elem) {
                        for (var i = 0; i < videoContainer.length; i++) {
                            var vid = videoContainer[i].querySelector('video');
                            if (vid) {
                                if (vid == elem) {
                                    continue;
                                }
                                if (vid.played.length > 0 && !vid.paused) {
                                    vid.pause();
                                }
                            }
                        }
                    }

                    if (video.played) {
                        span.style.opacity = 1;
                        playpause.style.opacity = 1;
                    }

                    if (evt.which == 1) {
                        for (var i = 0; i < videoContainer.length; i++) {
                            if (videoContainer[i].querySelector('video')) {
                                videoContainer[i].querySelector('video').addEventListener('play', function() {
                                    pauseAll(this);
                                });
                            }
                        }

                        if (video.paused || video.ended) {
                            playpause.style.opacity = 0;
                            span.style.opacity = 0;
                            video.play();
                        } else {
                            video.pause();
                        }
                    }
                })
            });
        }
    }
})();
