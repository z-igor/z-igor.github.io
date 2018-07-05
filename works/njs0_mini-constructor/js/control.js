'use strict';

;
(function() {
    window.elementsControl = document.getElementsByClassName('element__draggable');
    window.blocks = document.getElementsByClassName('preview__block');

    let controlDiv = document.querySelector('.control'),
        lockButton = document.querySelectorAll('.control__element-lock'),
        controlAddition = document.querySelector('.control__addition'),
        template = document.getElementById('template').content,
        removeButton = document.querySelector('.control__addition__remove'),
        listAddElement = document.querySelectorAll('.control__addition ul li'),
        indexELementStart = null,
        indexELementLeave = null,
        blocksArr = null,
        anchor = null,
        translateY = null,
        lockElm = null,
        numOfLeave = null;

    function createBlock(it) {
        const target = it.target;
        let firstControl = document.querySelector('.control__element__content'),
            firstPreview = document.querySelector('.preview__block'),
            fragmentPreview = 0,
            fragmentControl = 0,
            nameBlock = ['header', 'cta', 'picture', 'description', 'slideshow', 'comments', 'footer'];

        for (let i = 0; i < nameBlock.length; i += 1) {
            if (target.className.match(nameBlock[i])) {
                let className = target.className.split('__')[2];

                fragmentControl = template.querySelector('.control__element__content');
                fragmentPreview = template.querySelector('.preview__block');

                fragmentControl.querySelector('label').textContent = className;
                fragmentControl.dataset.anchor = elementsControl.length - 1;
                fragmentControl.dataset.type = className;

                fragmentPreview.querySelector('span').className = 'preview__block__' + className;
                fragmentPreview.dataset.follower = elementsControl.length - 1;

                firstControl.insertAdjacentHTML('afterend', fragmentControl.outerHTML);
                firstPreview.insertAdjacentHTML('afterend', fragmentPreview.outerHTML);

            }
        }
        // console.log(elementsControl.length-1);
    }

    function handleDragStart(e) {
        if (e.target.classList.contains('control__addition__remove')) {
            e.preventDefault();
            return false;
        }

        let lockElm = e.target.children[2],
            lockContainClass = lockElm.classList.contains('control__element-lock-selected'),
            numAnchor = e.target.dataset.anchor,
            previewBlock;

        if (lockContainClass) {
            e.preventDefault();
        }

        anchor = e.target;
        numOfLeave = anchor.dataset.anchor;
        indexELementStart = [].slice.call(elementsControl).indexOf(anchor);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);

        blocksArr = [].slice.call(blocks);
        previewBlock = blocksArr.filter(e => e.dataset.follower == numAnchor);
        translateY = 0;
        e.target.style = '';

        console.log('Start');
    }

    function handleDragOver(e) {
        e.preventDefault();

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        if (e.target.dataset.type === 'remove') {
            console.log('Remove button', removeButton);
            e.preventDefault();
            removeButton.style.backgroundPosition = 'center bottom';
            return false;
        }

        let numAnchor = anchor.dataset.anchor,
            previewBlock = blocksArr.filter(e => e.dataset.follower == numAnchor);
        ;

        lockElm = e.target.children[2].classList.contains('control__element-lock-selected');
        indexELementStart = [].slice.call(elementsControl).indexOf(e.target);

        if (e.target !== anchor && e.target.classList.contains('element__draggable') && !lockElm) {
            e.target.classList.add('control__element-enter');
        }

        if (e.target.classList.contains('control__element__content')) {
            if (e.target.dataset.anchor === numAnchor) {
                translateY = 0;
            } else if (indexELementLeave < indexELementStart) {
                translateY += previewBlock[0].offsetHeight + 5;
                previewBlock[0].scrollIntoView({ block: "start", behavior: 'smooth' });
            } else if (indexELementLeave > indexELementStart) {
                translateY -= previewBlock[0].offsetHeight + 5;
                previewBlock[0].scrollIntoView({ block: "end", behavior: 'smooth' });
            }
            previewBlock[0].style.transform = `translateY(${ translateY }px) scale(1.01, 1.1)`;
            previewBlock[0].style.backgroundColor = 'rgba(0, 0, 0, .2)';
            previewBlock[0].style.zIndex = '2';
        }

        // console.log('S:', indexELementStart, 'L:', indexELementLeave, indexELementStart > indexELementLeave);
        console.log('Enter');
    }

    function handleDragLeave(e) {
        e.target.classList.remove('control__element-enter');
        numOfLeave = e.target.dataset.anchor;
        indexELementLeave = [].slice.call(elementsControl).indexOf(e.target);
        removeButton.style.backgroundPosition = 'center top';
    }

    function handleDrop(e) {
        e.stopPropagation();

        let numAnchor = anchor.dataset.anchor,
            previewBlock = blocksArr.filter(e => e.dataset.follower == numAnchor),
            startDragElement = [].slice.call(elementsControl).indexOf(anchor);

        // previewBlock[0].style = '';

        if (e.target.dataset.type === 'remove') {
            e.preventDefault();
            anchor.remove();
            blocks[startDragElement - 1].remove();
            removeButton.style.backgroundPosition = 'center top';
            return false;
        }

        if (lockElm) {
            // console.log(e.target.children[0].textContent, "is lock:", lockElm);
            e.preventDefault();
            return false;
        }

        if (anchor !== e.target) {
            let from = anchor.dataset.anchor,
                to = e.target.dataset.anchor,
                indexDragStart = [].slice.call(elementsControl).indexOf(anchor) - 1,
                indexDragTarget = [].slice.call(elementsControl).indexOf(e.target) - 1,
                fromFollwr = blocks[indexDragStart].innerHTML,
                toFollwr = blocks[indexDragTarget].innerHTML,
                fromAnchor = elementsControl[indexDragStart + 1].dataset.type,
                toAnchor = elementsControl[indexDragTarget + 1].dataset.type;

            e.target.classList.remove('control__element-enter');

            anchor.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData('text/html');

            elementsControl[indexDragStart + 1].dataset.type = toAnchor;
            elementsControl[indexDragTarget + 1].dataset.type = fromAnchor;

            blocks[indexDragStart].innerHTML = toFollwr;
            blocks[indexDragTarget].innerHTML = fromFollwr;
            // console.log(elementsControl[indexDragStart + 1], elementsControl[indexDragTarget + 1]);
        }

        blocks[startDragElement - 1].style = 'translateY(0) scale(1, 1)';
        blocks[startDragElement - 1].style.backgroundColor = 'rgba(0, 0, 0, .1)';
        blocks[startDragElement - 1].style.zIndex = '1';

        return false;
    }

    function handleDragEnd(e) {
        let numAnchor = anchor.dataset.anchor,
            previewBlock = blocksArr.filter(e => e.dataset.follower == numOfLeave),
            startDragElement = [].slice.call(elementsControl).indexOf(anchor);

        removeButton.style.backgroundPosition = 'center top';

        e.target.classList.remove('control__element__content-drag');

        blocks[startDragElement - 1].style = 'translateY(0) scale(1, 1)';
        blocks[startDragElement - 1].style.backgroundColor = 'rgba(0, 0, 0, .1)';
        blocks[startDragElement - 1].style.zIndex = '1';
        translateY = 0;

        console.log('End');
    }

    function togglelockDragAndDrop(evt) {
        // console.log(evt.target);
        evt.target.classList.toggle('control__element-lock-selected');
    }

    // window.elementArr = [].slice.call(elementsControl);

    function setHandlerEvent(parent, event, handle) {
        parent.addEventListener(event, function(e) {
            if (e.target.classList.contains('element__draggable')) {
                handle(e);
            }
        });
    };

    setHandlerEvent(controlDiv, 'dragstart', handleDragStart);
    setHandlerEvent(controlDiv, 'dragenter', handleDragEnter);
    setHandlerEvent(controlDiv, 'dragover', handleDragOver);
    setHandlerEvent(controlDiv, 'dragleave', handleDragLeave);
    setHandlerEvent(controlDiv, 'drop', handleDrop);
    setHandlerEvent(controlDiv, 'dragend', handleDragEnd);

    controlDiv.addEventListener('click', e => {
        let closest = e.target.closest('ul');

        if (e.target.classList.contains('control__addition__create')) {
            e.target.parentNode.children[1].classList.toggle('control__addition__create-add');
        }

        if (!closest && !e.target.classList.contains('control__addition__create')) {
            controlAddition.children[1].classList.remove('control__addition__create-add');
        }

        if (e.target.tagName === 'LI') {
            createBlock(e);
        }
    });

    controlDiv.addEventListener('mouseover', (e) => {
        const e_t = e.target;

        if (e_t.classList.contains('control__element-lock')) {
            /*Lock element*/
            e_t.addEventListener('click', togglelockDragAndDrop);
        }

        if (e_t.classList.contains('control__element-name')) {
            let input = e_t.nextSibling.nextSibling,
                label = e_t,
                numOfFollower = input.parentNode.dataset.anchor;

            input.value = e_t.parentNode.children[0].textContent;

            /*Double click upon tag of label for edit input*/
            label.addEventListener('dblclick', (evt) => {
                label.classList.add('control__element-name-disabled');
                label.parentNode.children[1].classList.add('control__element-textfield-active');
                label.parentNode.children[1].select();
            });

            /*Edit input. Press 'Enter' the input would been hide and save the themself value*/
            input.addEventListener('keypress', (evt) => {
                const evt_k = evt.keyCode;
                let oldVal = e_t.parentNode.children[0].textContent;

                if (evt_k === 13) {
                    if (input.value) {
                        e_t.parentNode.children[0].textContent = input.value;
                        e_t.parentNode.children[0].classList.remove('control__element-name-disabled');
                        input.classList.remove('control__element-textfield-active');
                    } else {
                        e_t.parentNode.children[0].textContent = oldVal;
                        e_t.parentNode.children[0].classList.remove('control__element-name-disabled');
                        input.classList.remove('control__element-textfield-active');
                    }
                }
            });
        }
        // console.log(nextSibling);
    });

}());