$(document).ready(function () {
    let $footnoteLinks = $('.footnote_link');
    let headerHeight = $('.g2b-header').outerHeight();
    let hasTouch = false;
    let hasMouse = false;
    const $modal=$('#custom-common-modal.tool-tip-modal');
    /**
     * Function to invert the tooltip depending on the space available
     * @param {Object} $elm Jquery object for the target element 
     * @param {Number} tooltipTextHeight Height of the tooltiptext
     */
    function _invertTooltip($elm, tooltipTextHeight) {
        if ($elm.offset().top - $(window).scrollTop() - headerHeight < tooltipTextHeight + 30) {
            $elm.addClass('invert');
        } else {
            $elm.removeClass('invert');
        }
    }
    function hideToolTipModal() {
        $modal.hide();
    }
    function showToolTipModal() {
        $modal.show();
        $('body').css({'overflow':'hidden'});
    }

        /**
     * Function for positiong of the tooltip
     */

        function _alignHorizontal(element,width){
            console.log(width);
         element.css({"margin-left": -width/2});
        }


    /**
     * Function called on hover in and click for all viewports
     */
    function _tooltipHoverHandler() {
        if (!($('body').hasClass('touch-enabled'))) {
            hideToolTipModal();
            let $elm = $(this);
            let tooltipContainer = $elm.find(".footnotes_tooltiptext")
            var tooltipContainerWidth = tooltipContainer.outerWidth();
            $elm.closest('.gd-content-card').addClass('overflow-visible');
            $elm.closest('.gd-table__container').addClass('overflow-visible');
            _alignHorizontal(tooltipContainer,tooltipContainerWidth);
            
           let modalContent = getTooltipContent($elm);
            if (!($elm.find('.footnotes_tooltiptext').length)) {
                $elm.append(`<div class='footnotes_tooltiptext'>${modalContent}</div>`);
            } else {
                $elm.closest('.footnotes_tooltiptext').show();
            }
            if (!$elm.closest('.footnote_link').hasClass('show-tooltip')) {
                _invertTooltip($elm, $elm.find('.footnotes_tooltiptext')[0].getBoundingClientRect().height);
            }
        }
    }

    /**
     * Function called on hover out
     */
    function _tooltipHoverOutHandler() {
        let $elm = $(this);
        $elm.closest('.gd-content-card').removeClass('overflow-visible');
        $elm.closest('.gd-table__container').removeClass('overflow-visible');
        $footnoteLinks.removeClass('show-tooltip');
    }

    /**
     * Function called on click of tooltip to display and position tooltip for mobile
     * @param {Object} e  event object passed to function on call
     */
    function checkUserAgent(){
        const ua = window.navigator.userAgent;
        if (/Android/i.test(ua)) {
            $('body').addClass('android-device');
        }
    }
    function _tooltipClickHandler(e) {
        if ($('body').hasClass('touch-enabled')) {
            let $el = $(this);
            let $parent = $el.closest('.footnote_link');
            let modalContent = getTooltipContent($el);
            $(`.tool-tip-modal__text`).html(modalContent);
             showToolTipModal();
            if ($parent.hasClass('show-tooltip')) {
                $footnoteLinks.removeClass('show-tooltip');
            } else if (window.innerWidth < 1144 || window.orientation === 90) {
                $parent.addClass('show-tooltip');
            }
            if($('body').hasClass('android-device')){
                $('.tool-tip-modal').css({top:'-22px'});
            }
        }
    }
    $('.tool-tip-modal__close').on('click',function(){
        closeModal();
      
    });
    function closeModal() {
        hideToolTipModal();
        $('body').css({'overflow':'scroll'});
    }
    function getTooltipContent($elm){
        const elementId = $elm.attr('id');
        const modalContent = $(`.tool-tip-content[data-id=${elementId}]`).html();
        return modalContent;
    }
    /**
     * Initial function for binding tooltip events on page load
     */
    function _initTooltip() {
        if (window.matchMedia("(any-pointer: coarse)").matches) {
            hasTouch = true;
        }
        if (window.matchMedia('(pointer:fine)').matches) {
            hasMouse = true
        }
        if (hasTouch && !hasMouse) {
            $('body').addClass('touch-enabled');
            checkUserAgent();
        }
        $('body').on('mouseenter touchstart', '.footnote_link.footnotes_tooltip', _tooltipHoverHandler).on('mouseleave', '.footnote_link.footnotes_tooltip', _tooltipHoverOutHandler).on('click', '.footnote_link.footnotes_tooltip', _tooltipClickHandler);
        hideToolTipModal();
    }

    _initTooltip();

    var $win = $(window);
    $("a[data-modal-id='video_vimeo']").on('click', function () {
        var currentScrollPos = $win.scrollTop();

        if (currentScrollPos === 0) {
            $win.scrollTop(currentScrollPos + 1);
        } else {
            $win.scrollTop(currentScrollPos - 1);
        }

    })

});