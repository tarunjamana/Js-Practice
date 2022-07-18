$( document ).ready(function() {

    const $accordianHeader=$('.tabs .cmp-accordion__header');
    const $accordianBtn=$('.tabs .cmp-accordion__button');
    const $tabsList =$('.tabs .cmp-tabs__tablist');
    const $tabs = $('.cmp-tabs__tab')
    const panelClassExpanded ='cmp-accordion__panel--expanded';
    const panelClassHidden ='cmp-accordion__panel--hidden';
    const $accordianpanel=$('.tabs .cmp-accordion__panel');
    const $tabPanel = $('.tabs .cmp-tabs__tabpanel');
    const tabPanelActiveClass = 'cmp-tabs__tabpanel--active';
    const tabActiveClass = 'cmp-tabs__tab--active';
    const accordionBtnExpandClass = 'cmp-accordion__button--expanded';
    
    $accordianHeader.first().addClass('first-item-border');
    $accordianHeader.last().addClass('last-item-border');
    
    let hash = location.hash.replace(/^#/, '');
    let anchorTagIndex;
    let initialLoad = true;
    let resized = false;

    if(hash){
        for(var i = 0;i < $tabs.length;i++){
     if($tabs[i].getAttribute('id') === hash){
      anchorTagIndex = i
     }
        }
    }


    

    
    function getActiveIndex(tabs) {
        if (tabs) {
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].classList.contains('cmp-tabs__tab--active')) {
                    return i;
                }
            }
        }
        return 0;
    }
    
    
    
    function initTabs(){
        $('html, body').animate({
            scrollTop: 0
        });
        let activeTabIndex = getActiveIndex($('.cmp-tabs__tab'));
        let index = resized ? activeTabIndex : anchorTagIndex;
        console.log(index,activeTabIndex,anchorTagIndex);
        if(window.matchMedia("(min-width:1280px)").matches){
            $tabPanel.removeClass(`${tabPanelActiveClass}`);
            if(activeTabIndex === 0){
                $tabPanel.first().addClass(`${tabPanelActiveClass}`);
            }else{
                $tabPanel.eq(activeTabIndex).addClass(`${tabPanelActiveClass}`);
            }
            $accordianHeader.hide();
            $tabsList.show();
            $accordianpanel.addClass(`${panelClassExpanded}`);
            $accordianpanel.removeClass(`${panelClassHidden}`);
            if(initialLoad && hash){
                console.log(anchorTagIndex,activeTabIndex);
                $tabPanel.removeClass(`${tabPanelActiveClass}`);
                $tabPanel.eq(anchorTagIndex).addClass(`${tabPanelActiveClass}`);
                $tabs.removeClass(`${tabActiveClass}`);
                $tabs.eq(anchorTagIndex).addClass(`${tabActiveClass}`);
                initialLoad = false;
            }
        }else{
            $accordianHeader.show();
            $tabsList.hide();
            $accordianpanel.addClass(`${panelClassHidden}`);
            $accordianpanel.removeClass(`${panelClassExpanded}`);
            $tabPanel.addClass(`${tabPanelActiveClass}`);
            $accordianBtn.removeClass(`${accordionBtnExpandClass}`);
            if(initialLoad && hash){
                $tabPanel.eq(anchorTagIndex).find('.cmp-accordion__panel').addClass(`${panelClassExpanded}`);
                $tabPanel.eq(anchorTagIndex).find('.cmp-accordion__button').addClass(`${accordionBtnExpandClass}`);
                var offset=$tabPanel.eq(anchorTagIndex).find('.cmp-accordion__panel').offset();
                offset.top-=120
                $('html, body').animate({
                    scrollTop: offset.top
                });
                initialLoad= false;
            }
            
        }
    }

    initTabs();
    $(window).resize(function(){
        initTabs();
        resized=true;
    })
    });