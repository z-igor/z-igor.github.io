'use strict';

;
(function() {
    let preview = document.getElementsByClassName('preview'),
        previewBlock = document.getElementsByClassName('preview__blocks'),
        blocks = document.getElementsByClassName('preview__block');

    function createElement() {
        // if (elementArr) {}
        // console.log(elementArr[0]);
        let fragment = document.createDocumentFragment();

        for (let i = 0; i < elementsControl.length; i += 1) {
            if (elementsControl[i].dataset.type === 'remove') {
                continue;
            }

            let div = document.createElement('div'),
                span = document.createElement('span');

            div.className = 'preview__block';
            span.className = `preview__block__${elementsControl[i].dataset.type}`;
            div.appendChild(span);
            div.setAttribute('data-follower', i-1);
            fragment.appendChild(div);
        }

        [].forEach.call(previewBlock, function(elm) {
            elm.appendChild(fragment);
        });

    }

    createElement();

    window.blockArr = [].slice.call(blocks);
}());