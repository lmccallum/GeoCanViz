(function(){define(["jquery","gcviz-vm-inset"],function(c,b){var a;a=function(F){var t=F.mapframe,v=F.insetframe,n=t.id,k=t.size,f=v.insets.length,o=v.size,q,m,G,C,l,i,A,x,r,j,s,B,d,p,w,g,z,h=[],D=vmArray[n].header.headerHeight,e,y;m=k.width/o.numcol;G=(k.height-(D*2))/o.numrow;while(f--){C=v.insets[f],l=C.pos.startrowcol,i=C.pos.endrowcol,A=(i[1]-l[1])*m,x=(i[0]-l[0])*G,r=(l[0]*G)+D,j=l[1]*m,s=C.label,z=x-(D/2),g=C.size,B="",w="",e=(z/x)*100+"%",y="inset"+f+n;if(A===0){A=m}if(x===0){x=G}if(g==="%"){A=(A/k.width)*100;x=(x/k.height)*100}if(r!==D&&j!==0){w="gcviz-inset-margin"}F.find(".gcviz-foot").before('<div id="'+y+'" data-bind="fullscreen: {}, insetVisibility: {}" class="gcviz-inset gcviz-inset'+n+" "+w+'" style=" bottom: '+r+"px; left: "+j+"px; width: "+A+g+"; height: "+x+g+';"></div>');q=F.find("#"+y);B='<div class="gcviz-title"><h2>'+s.value+'</h2><button class="gcviz-inset-button" tabindex="0" data-bind="click: insetClick, tooltip: { content: tpLight }"><img class="gcviz-imginset-button" data-bind="attr:{src: imgLightbox}"></img></button></div>';if(C.type==="image"||C.type==="video"){d=C.inset.sources,p=d.length;q.vSource=[];if(C.type==="image"){B+='<div style="width: 100%;"><div id="slides'+f+n+'" class="'+y+'" style="height: '+e+';">';while(p--){var E=d[p].label;B+='<a data-bind="attr:{href: img['+p+']}" title="'+E.value+'"><img class="gcviz-img-inset" data-bind="attr:{src: img['+p+']}" alt="'+E.alttext+'"></img></a>';q.vSource[p]=d[p].image}B+="</div></div>"}else{if(C.type==="video"){B+='<a class="mp-link"></a><div id="'+y+'v"><div class="gcviz-play-background" style="height: '+e+';"><button class="gcviz-inset-button gcviz-play-button" tabindex="0" data-bind="click: videoClick, tooltip: { content: tpPlayVideo }"><img data-bind="attr:{src: imgPlayVideo}"></img></button></div><video class="gcviz-vid-inset" data-bind="click: videoClick, enterkey: { func: \'stopVideo\', keyType: \'keyup keydown\' }" style="max-height: '+e+';">';while(p--){B+='<source data-bind="attr:{src: vid['+p+']}" type="'+d[p].type+'"></source>';q.vSource[p]=d[p]}B+="</div></video>"}}}else{if(C.type==="html"){var u=C.inset;if(u.type==="text"){B+='<a class="mp-link"></a><div id="'+y+'h" class="gcviz-text-inset" style="height: '+e+';" tabindex="0">'+u.tag+"</div>"}else{if(u.type==="page"){B+='<a class="mp-link"><div id="'+y+'h"><iframe id="'+y+'h" src="'+u.tag+'" style="height: '+e+'; width:100%;" class="gcviz-frame-inset"></iframe></div>'}}}else{if(C.type==="map"){B+='<a class="mp-link"></a><div id="'+y+'m" class="gcviz-map-inset '+y+"\" data-bind=\"enterkey: { func: 'applyKey', keyType: 'keydown' }\" style=\"max-height: "+e+'; width: 100%"><div id="load'+f+n+'" class="gcviz-load-close gcviz-hidden"><img class="gcviz-load-img" src="http://jimpunk.net/Loading/wp-content/uploads/loading1.gif"/></div></div>'}}}q.append(B);h.push(b.initialize(q,n,C))}return h};return{initialize:a}})}).call(this);