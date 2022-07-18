let hash = location.hash.replace(/^#/, '');
let initalLoad=true;
const $tabsList =$('.tabs .cmp-tabs__tablist');
let anchoredTabPanel,anchoredAccordion,anchoredAccordionBtn;

if(hash){
   let targetTabId= $tabsList.find(`#${hash}`).attr("aria-controls");
   anchoredTabPanel = $(`#${targetTabId}`);
   anchoredAccordion=anchoredTabPanel.find(".cmp-accordion__panel")
   anchoredAccordionBtn=anchoredTabPanel.find(".cmp-accordion__button");
}

function anchorTag(tab,acc,accBtn){
    if(window.matchMedia("(min-width:1280px)")){
        tab.addClass(`${tabPanelActiveClass}`);      
     }else{
        acc.addClass(`${panelClassExpanded}`);
           accBtn.addClass(`${accordionBtnExpandClass}`);
       }
}