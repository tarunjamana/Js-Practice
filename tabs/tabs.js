$( document ).ready(function() {

    const $accordianBtn=$('.tabs .cmp-accordion__button');
    const $tabsList =$('.tabs .cmp-tabs__tablist');
    const panelClass ='cmp-accordion__panel--expanded'
    $panel=$('.tabs .cmp-accordion__panel');

    function _changeBackgroundColor() {
    	let $tabParent = $('.tabs').closest('.fluid-container');
        if($(this).index() == 1) {
			$tabParent.addClass('b2b-primary-background');
        } else {
			$tabParent.removeClass('b2b-primary-background');
        }
    }

	$('body').on('click', '.cmp-tabs__tab', _changeBackgroundColor);
    function checkViewPort(){
    if (window.matchMedia("(min-width:1280px)").matches) {
        console.log("if block");
        $panel.addClass(`${panelClass}`);
        $accordianBtn.hide();
        $tabsList.show();
    }else{
        console.log("else block");
        $('.tabs .cmp-accordion__header,.tabs .cmp-tabs__tabpanel,.tabs .cmp-accordion__button').show();
        $panel.removeClass(`${panelClass}`);
        $accordianBtn.show();
        $tabsList.hide();
    }
}
    checkViewPort();
    $(window).resize(function () {
        console.log("resize function");
        checkViewPort();
    });

    let hash = location.hash.replace(/^#/, '');
    if(hash){
        $tabsList.find(`#${hash}`).trigger("click");
        let targetTabId = $tabsList.find(`#${hash}`).attr("aria-controls");
        console.log(targetTabId);
        if(!window.matchMedia("(min-width:1280px)").matches){
          $(`#${targetTabId}`).find('.cmp-accordion__panel').addClass(`${panelClass}`);
        }
    }
});

















// 


$( document ).ready(function() {

    const $accordianBtn = $(".tabs .cmp-accordion__button");
    const $tabsList = $(".tabs .cmp-tabs__tablist");
    const panelClass = "cmp-accordion__panel--expanded";
    $panel = $(".tabs .cmp-accordion__panel");

function checkViewPort(){
 console.log("check Viewport fn");
 if (window.matchMedia("(min-width:1280px)").matches) {
    $('.tabs .cmp-accordion__header,.tabs .cmp-tabs__tabpanel,.tabs .cmp-accordion__button').hide();
    $panel.addClass(`${panelClass}`);
    $accordianBtn.hide();
    $tabsList.show();
 } else{
    $('.tabs .cmp-accordion__header,.tabs .cmp-tabs__tabpanel,.tabs .cmp-accordion__button').show();
    $tabsList.hide();
    $accordianBtn.show();
 }
}

checkViewPort();
})  


// 31-5-2022 tabs.js

$( document ).ready(function() {
    const $tablist = $('.cmp-tabs .cmp-tabs__tablist');
    const $tabPanel = $('.cmp-tabs .cmp-tabs__tabpanel');
    let $tabPanelActive = $('.cmp-tabs .cmp-tabs__tabpanel--active');
    const $accordionHeader = $('.cmp-tabs .cmp-accordion__header');
    const $accordionPanel = $('.cmp-tabs .cmp-accordion__panel');
    
    let hash = location.hash.replace(/^#/, '');
    if(hash){
        $tablist.find(`#${hash}`).trigger("click");
        let targetTabId = $tablist.find(`#${hash}`).attr("aria-controls");
        console.log(targetTabId);
        if(!window.matchMedia("(min-width:1280px)").matches){
            console.log("Hash if check");
          $(`#${targetTabId}`).find('.cmp-accordion__panel').addClass("cmp-accordion__panel--expanded");
        }
    }
    
    function checkViewPort(message){
        console.log("check viewport" + message);
        if (window.matchMedia("(min-width:1280px)").matches) {
            $tablist.show();
             $accordionHeader.hide();
             $accordionPanel.addClass("cmp-accordion__panel--expanded");
             $tabPanel.hide();
             $(".cmp-tabs .cmp-tabs__tabpanel--active").show();
        } else{
            $tablist.hide();
            $accordionHeader.show();
            $accordionPanel.removeClass("cmp-accordion__panel--expanded");
            $('.cmp-tabs .cmp-tabs__tabpanel--active .cmp-accordion__panel').addClass("cmp-accordion__panel--expanded");
            $tabPanel.show();
        }
    }
    
    $('body').on('click', '.cmp-tabs__tab',function(){
        checkViewPort("on click of tabs");
    });
    
    
    checkViewPort("page load");
    
    $(window).resize(function(){
        checkViewPort("window resize");
    })
    });