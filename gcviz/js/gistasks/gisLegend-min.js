(function(){define(["esri/request","esri/renderers/Renderer"],function(a,d){var f,e,i,h,g,b,c;esri.config.defaults.io.proxyUrl="../../proxy.ashx";esri.config.defaults.io.alwaysUseProxy=false;f=function(k,j,m){var l=k.getLayer(j);console.log(l);l.setVisibility(m)};g=function(j){};e=function(m,k){var n=m.service,j;if(k>=10.01){j=n+"/legend"}else{j="http://www.arcgis.com/sharing/tools/legend?soapUrl"+escape(n)}console.log(j);var l=a({url:j,content:{f:"json"},handleAs:"json"});l.then(i,h)};i=function(j,k){console.log(j)};h=function(j,k){console.log("fail")};return{setLayerVisibility:f,getFeatureLayerSymbol:g,changeServiceVisibility:b}})}());