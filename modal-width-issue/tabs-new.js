$( document ).ready(function() {
    const $tablist = $('.cmp-tabs .cmp-tabs__tablist');
    const $tabPanel = $('.cmp-tabs .cmp-tabs__tabpanel');
    const $accordionHeader = $('.cmp-tabs .cmp-accordion__header');
    const $accordionBtn = $('.cmp-tabs .cmp-accordion__button')
    const $accordionPanel = $('.cmp-tabs .cmp-accordion__panel');
    
    let hash = location.hash.replace(/^#/, '');
    let initalLoad =false;

    if(hash){
        $tablist.find(`#${hash}`).trigger("click");
        let targetTabId = $tablist.find(`#${hash}`).attr("aria-controls");
        if(!window.matchMedia("(min-width:1280px)").matches){
          $(`#${targetTabId}`).find('.cmp-accordion__panel').addClass("cmp-accordion__panel--expanded");
        }
    }
    
    function checkViewPort(){

        console.log("function checkviewport exec");
        if (window.matchMedia("(min-width:1280px)").matches) {
            $tablist.show();
             $accordionHeader.hide();
             $accordionPanel.addClass("cmp-accordion__panel--expanded");
             $accordionBtn.removeClass("cmp-accordion__button--expanded");
             $tabPanel.hide();
             $(".cmp-tabs .cmp-tabs__tabpanel--active").show();
        } else{
            $tablist.hide();
            $accordionHeader.show();
            $accordionPanel.removeClass("cmp-accordion__panel--expanded");
            $('.cmp-tabs .cmp-tabs__tabpanel--active .cmp-accordion__button').addClass("cmp-accordion__button--expanded");
            $('.cmp-tabs .cmp-tabs__tabpanel--active .cmp-accordion__panel').addClass("cmp-accordion__panel--expanded");
            $('body').animate({
                scrollTop: $(".cmp-tabs .cmp-tabs__tabpanel--active .cmp-accordion__panel").offset().top
            }, 500);
            $tabPanel.show();
        }
    }
    
    $('body').on('click', '.cmp-tabs__tab',function(){
        checkViewPort();
    });
    
    
    checkViewPort();
    
    $(window).resize(function(){
        checkViewPort();
    })
    });
