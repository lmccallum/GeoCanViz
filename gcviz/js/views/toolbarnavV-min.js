(function(){define(["jquery","gcviz-vm-tbnav","dijit/TitlePane"],function(d,c,b){var a;a=function(h){var g,f=h.toolbarnav,e=h.mapframe.id,j,i="";j=new b({id:"tbnav"+e,title:"Navigation",content:'<div class="gcviz-tbnav-content gcviz-tbcontent"></div>',open:false});h.find(".gcviz-tbholder").append(j.domNode);j.startup();j.domNode.getElementsByClassName("dijitTitlePaneTitleFocus")[0].setAttribute("tabindex","0");g=h.find(".gcviz-tbnav-content");if(f.fullextent){i+='<button class="gcviz-button" tabindex="0" data-bind="click: extentClick"><img class="gcviz-img-button" data-bind="attr:{src: imgExtent}"></img></button>'}g.append(i);return(c.initialize(g,e))};return{initialize:a}})}).call(this);