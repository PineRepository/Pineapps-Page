
/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $siteContent = $(".site-content");
        var $menu = $('.nav');
        var $logo = $('#logo');
        var $logotexto = $('#logotexto');
        var menuPosition = $menu.offset().top;
        var pagesCount = $siteContent.children().length;

        //  Colocando o container no tamanho de acordo com a quantidade de paginas
        // $siteContent.height(pagesCount+"00vh");
        $('#header-title span').typed({
        strings: ["INOVAÇÃO", "CRIATIVIDADE", "SOLUÇÃO", "DIFERENTE", "JUVENTUDE", "FUTURO", "DESENVOLVIMENTO", "LUCRATIVIDADE", "EFICIÊNCIA", "ROBUSTEZ", "QUALIDADE", "CONFIANÇA", "COMODIDADE"],
          typeSpeed: 0,
          loop: true
        });

        $menu.children('ul').children('li').hover(function (ev) {
          var $item = $(ev.currentTarget);
          var $predio = $item.children('span');
          var $texto = $item.children('a');

          $texto.css({
            'color': '#208fc7'
          });

          $predio.css({
            'height': '100%'
          });
        }, function (ev) {
          var $item = $(ev.currentTarget);
          var $predio = $item.children('span');
          var $texto = $item.children('a');

          $texto.css({
            'color': '#FFF'
          })

          $predio.css({
            'height': 0
          });
        });

        //  Designs do scroll
        $(window).scroll(function () {
          var position = $(window).scrollTop();

          // Configurando animações do menu
          if (position > 0) {
            $menu.css({
              'height': '40px'
            });
            $menu.children('ul').children('li').children('a').css({
              'line-height': 2.5
            });
            $logo.css({
              'opacity': 0
            });
            $logotexto.css({
              'opacity': 100
            });
          }else {
            $menu.css({
              'height': '60px'
            });
            $menu.children('ul').children('li').children('a').css({
              'line-height': 3.5
            });
            $logo.css({
              'opacity': 100
            });
            $logotexto.css({
              'opacity': 0
            });
          }
        });

        $(".scroll-down").arctic_scroll();



    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
              elem: $(this),
              speed: 500,
              scroll_selector: 'html,body'
          };

          var options = $.extend(defaults, options),
              to_scroll = options.scroll_selector;

          options.elem.click(function(event){
              event.preventDefault();
              var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                  position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;

              if (offset) {
                  var toMove = parseInt(offset);
                  $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(this.hash).children().first().offset().top + toMove) }, options.speed);
              } else if (position) {
                  var toMove = parseInt(position);
                  $(options.scroll_selector).stop(true, false).animate({scrollTop: toMove }, options.speed);
              } else {
                  $(options.scroll_selector).stop(true, false).animate({scrollTop: ($(window).height()) }, options.speed);
              }
        });

    };
})(jQuery);


// TODO: Cores dos blocos da paginas
