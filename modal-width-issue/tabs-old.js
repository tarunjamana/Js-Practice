$( document ).ready(function() {

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
        const $accordianBtn=$('.tabs .cmp-accordion__button');
        const $tabsList =$('.tabs .cmp-tabs__tablist');
        const panelClass ='cmp-accordion__panel--expanded'
        $panel=$('.tabs .cmp-accordion__panel');
    if (window.matchMedia("(min-width:1280px)").matches) {
        $panel.addClass(`${panelClass}`);
        $accordianBtn.hide();
        $tabsList.show();
    }else{
        $('.tabs .cmp-accordion__header,.tabs .cmp-tabs__tabpanel,.tabs .cmp-accordion__button').show();
        $accordianBtn.show();
        $('.tabs .cmp-accordion__item').first().attr("data-cmp-expanded",'');
        $accordianBtn.first().addClass(`${panelClass} cmp-accordion__button--expanded`);
        $panel.first().addClass(`${panelClass}`);
        $tabsList.hide();
        $accordianBtn.first().attr("aria-expanded","true");
    }
}
    checkViewPort();
    $(window).resize(function () {
        checkViewPort();
    });
});