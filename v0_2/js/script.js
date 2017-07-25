$(document).ready(function() {
    // сетка masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 1280 / 3,
        gutter: 30,
        fitWidth: true
        // columnWidth: 250
    });

    // кнопка zoom, модальное окно
    function modalwinds(a, b) {
        $(a).click(function() {
            $(b).fadeIn();
        });
    }

    var c = $("body section").length;
    for (var i = 1; i <= c; i++)
        modalwinds("#btn" + i, "#cont" + i);

    // https://jsfiddle.net/erbx0xq3/4/ картинка-кнопка
    // https://jsfiddle.net/eo5f3nLd/5/ модальное окно для каждой кнопки

    // кнопка закрытия модального окна
    $(".close").click(function() {
        $("section").fadeOut();
    });

    // анимация скроллинга шаблона
    $(".one").hover(function() {
        $(this).children("img").css({
            '-webkit-transform': 'translateY(-' + ($(this).children("img").height() - $(".one").height()) + 'px)',
            '-moz-transform': 'translateY(-' + ($(this).children("img").height() - $(".one").height()) + 'px)',
            '-ms-transform': 'translateY(-' + ($(this).children("img").height() - $(".one").height()) + 'px)',
            '-o-transform': 'translateY(-' + ($(this).children("img").height() - $(".one").height()) + 'px)',
            'transform': 'translateY(-' + ($(this).children("img").height() - $(".one").height()) + 'px)',
        });
    }, function() {
        $(".one img").css({
            transform: 'translateY(0)'
        });
    });
});