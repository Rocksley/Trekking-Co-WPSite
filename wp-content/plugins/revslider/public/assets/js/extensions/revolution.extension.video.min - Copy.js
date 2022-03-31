/********************************************
 * REVOLUTION 5.0 EXTENSION - VIDEO FUNCTIONS
 * @version: 1.1.0 (01.10.2015)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
*********************************************/
!function(){function e(e){return void 0==e?-1:jQuery.isNumeric(e)?e:e.split(":").length>1?60*parseInt(e.split(":")[0],0)+parseInt(e.split(":")[1],0):e}var t=jQuery.fn.revolution,a=t.is_mobile();jQuery.extend(!0,t,{resetVideo:function(t){switch(t.data("videotype")){case"youtube":{t.data("player")}try{if("on"==t.data("forcerewind")&&!a){var i=e(t.data("videostartat"));i=-1==i?0:i,t.data("player").seekTo(i),t.data("player").pauseVideo()}}catch(o){}0==t.find(".tp-videoposter").length&&punchgs.TweenLite.to(t.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"vimeo":var d=$f(t.find("iframe").attr("id"));try{if("on"==t.data("forcerewind")&&!a){var i=e(t.data("videostartat"));i=-1==i?0:i,d.api("seekTo",i),d.api("pause")}}catch(o){}0==t.find(".tp-videoposter").length&&punchgs.TweenLite.to(t.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});break;case"html5":if(a&&1==t.data("disablevideoonmobile"))return!1;var n=t.find("video"),r=n[0];if(punchgs.TweenLite.to(n,.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"on"==t.data("forcerewind")&&!t.hasClass("videoisplaying"))try{var i=e(t.data("videostartat"));r.currentTime=-1==i?0:i}catch(o){}"mute"==t.data("volume")&&(r.muted=!0)}},stopVideo:function(e){switch(e.data("videotype")){case"youtube":try{var t=e.data("player");t.pauseVideo()}catch(a){}break;case"vimeo":try{var i=$f(e.find("iframe").attr("id"));i.api("pause")}catch(a){}break;case"html5":var o=e.find("video"),d=o[0];d.pause()}},playVideo:function(o,n){switch(clearTimeout(o.data("videoplaywait")),o.data("videotype")){case"youtube":if(0==o.find("iframe").length)o.append(o.data("videomarkup")),d(o,n,!0);else if(void 0!=o.data("player").playVideo){o.data("player").playVideo();var r=e(o.data("videostartat"));-1!=r&&o.data("player").seekTo(r)}else o.data("videoplaywait",setTimeout(function(){t.playVideo(o,n)},50));break;case"vimeo":if(0==o.find("iframe").length)o.append(o.data("videomarkup")),d(o,n,!0);else if(o.hasClass("rs-apiready")){var s=o.find("iframe").attr("id"),p=$f(s);void 0==p.api("play")?o.data("videoplaywait",setTimeout(function(){t.playVideo(o,n)},50)):setTimeout(function(){p.api("play");var t=e(o.data("videostartat"));-1!=t&&p.api("seekTo",t)},510)}else o.data("videoplaywait",setTimeout(function(){t.playVideo(o,n)},50));break;case"html5":if(a&&1==o.data("disablevideoonmobile"))return!1;var l=o.find("video"),v=l[0],u=l.parent();if(1!=u.data("metaloaded"))i(v,"loadedmetadata",function(a){t.resetVideo(a,n),v.play();var i=e(a.data("videostartat"));-1!=i&&(v.currentTime=i)}(o));else{v.play();var r=e(o.data("videostartat"));-1!=r&&(v.currentTime=r)}}},isVideoPlaying:function(e,t){var a=!1;return void 0!=t.playingvideos&&jQuery.each(t.playingvideos,function(t,i){e.attr("id")==i.attr("id")&&(a=!0)}),a},prepareCoveredVideo:function(e,t,a){var i=a.find("iframe, video"),o=e.split(":")[0],d=e.split(":")[1],n=a.closest(".tp-revslider-slidesli"),r=n.width()/n.height(),s=o/d,p=r/s*100,l=s/r*100;r>s?punchgs.TweenLite.to(i,.001,{height:p+"%",width:"100%",top:-(p-100)/2+"%",left:"0px",position:"absolute"}):punchgs.TweenLite.to(i,.001,{width:l+"%",height:"100%",left:-(l-100)/2+"%",top:"0px",position:"absolute"})},checkVideoApis:function(e,t,a){var i="https:"===location.protocol?"https":"http";if((void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.youtubeapineeded=!0),(void 0!=e.data("ytid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&0==a.addedyt){t.youtubestarttime=jQuery.now(),a.addedyt=1;var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var d=document.getElementsByTagName("script")[0],n=!0;jQuery("head").find("*").each(function(){"https://www.youtube.com/iframe_api"==jQuery(this).attr("src")&&(n=!1)}),n&&d.parentNode.insertBefore(o,d)}if((void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.vimeoapineeded=!0),(void 0!=e.data("vimeoid")||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&0==a.addedvim){t.vimeostarttime=jQuery.now(),a.addedvim=1;var r=document.createElement("script"),d=document.getElementsByTagName("script")[0],n=!0;r.src=i+"://f.vimeocdn.com/js/froogaloop2.min.js",jQuery("head").find("*").each(function(){jQuery(this).attr("src")==i+"://a.vimeocdn.com/js/froogaloop2.min.js"&&(n=!1)}),n&&d.parentNode.insertBefore(r,d)}return a},manageVideoLayer:function(o,r){var s=o.data("videoattributes"),p=o.data("ytid"),l=o.data("vimeoid"),v=o.data("videpreload"),u=o.data("videomp4"),c=o.data("videowebm"),f=o.data("videoogv"),m=o.data("allowfullscreenvideo"),h=o.data("videocontrols"),g="http",y="loop"==o.data("videoloop")?"loop":"loopandnoslidestop"==o.data("videoloop")?"loop":"",w=void 0!=u||void 0!=c?"html5":void 0!=p&&String(p).length>1?"youtube":void 0!=l&&String(l).length>1?"vimeo":"none",b="html5"==w&&0==o.find("video").length?"html5":"youtube"==w&&0==o.find("iframe").length?"youtube":"vimeo"==w&&0==o.find("iframe").length?"vimeo":"none";switch(o.data("videotype",w),b){case"html5":"controls"!=h&&(h="");var k='<video style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" '+y+' preload="'+v+'">';void 0!=c&&"firefox"==t.get_browser().toLowerCase()&&(k=k+'<source src="'+c+'" type="video/webm" />'),void 0!=u&&(k=k+'<source src="'+u+'" type="video/mp4" />'),void 0!=f&&(k=k+'<source src="'+f+'" type="video/ogg" />'),k+="</video>";var T="";("true"===m||m===!0)&&(T='<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),"controls"==h&&(k+='<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>'+T+"</div>"),o.data("videomarkup",k),o.append(k),(a&&1==o.data("disablevideoonmobile")||t.isIE(8))&&o.find("video").remove(),o.find("video").each(function(){var e=this,a=jQuery(this);a.parent().hasClass("html5vid")||a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');var d=a.parent();1!=d.data("metaloaded")&&i(e,"loadedmetadata",function(e){n(e,r),t.resetVideo(e,r)}(o))});break;case"youtube":g="http","https:"===location.protocol&&(g="https"),"none"==h&&(s=s.replace("controls=1","controls=0"),-1==s.toLowerCase().indexOf("controls")&&(s+="&controls=0"));var x=e(o.data("videostartat")),L=e(o.data("videoendat"));-1!=x&&(s=s+"&start="+x),-1!=L&&(s=s+"&end="+L);var C=s.split("origin="+g+"://"),V="";C.length>1?(V=C[0]+"origin="+g+"://",self.location.href.match(/www/gi)&&!C[1].match(/www/gi)&&(V+="www."),V+=C[1]):V=s;var P="true"===m||m===!0?"allowfullscreen":"";o.data("videomarkup",'<iframe style="visible:hidden" src="'+g+"://www.youtube.com/embed/"+p+"?"+V+'" '+P+' width="100%" height="100%" style="width:100%;height:100%"></iframe>');break;case"vimeo":"https:"===location.protocol&&(g="https"),o.data("videomarkup",'<iframe style="visible:hidden" src="'+g+"://player.vimeo.com/video/"+l+"?"+s+'" width="100%" height="100%" style="100%;height:100%"></iframe>')}var I=1!=a&&"on"!=o.data("posterOnMobile")&&"on"!=o.data("posteronmobile")||a;void 0!=o.data("videoposter")&&o.data("videoposter").length>2&&I?(0==o.find(".tp-videoposter").length&&o.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url('+o.data("videoposter")+'); background-size:cover;background-position:center center;"></div>'),0==o.find("iframe").length&&o.find(".tp-videoposter").click(function(){if(t.playVideo(o,r),a){if(1==o.data("disablevideoonmobile"))return!1;punchgs.TweenLite.to(o.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(o.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut})}})):0!=o.find("iframe").length||"youtube"!=w&&"vimeo"!=w||(o.append(o.data("videomarkup")),d(o,r,!1)),"none"!=o.data("dottedoverlay")&&void 0!=o.data("dottedoverlay")&&1!=o.find(".tp-dottedoverlay").length&&o.append('<div class="tp-dottedoverlay '+o.data("dottedoverlay")+'"></div>'),o.addClass("HasListener"),1==o.data("bgvideo")&&punchgs.TweenLite.set(o.find("video, iframe"),{autoAlpha:0})}});var i=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent(t,a,!1)},o=function(e,t,a){var i={};return i.video=e,i.videotype=t,i.settings=a,i},d=function(i,d,n){var p=i.find("iframe"),l="iframe"+Math.round(1e5*Math.random()+1),v=i.data("videoloop"),u="loopandnoslidestop"!=v;if(v="loop"==v||"loopandnoslidestop"==v,1==i.data("forcecover")){i.removeClass("fullscreenvideo").addClass("coverscreenvideo");var c=i.data("aspectratio");void 0!=c&&c.split(":").length>1&&t.prepareCoveredVideo(c,d,i)}if(p.attr("id",l),n&&i.data("startvideonow",!0),1!==i.data("videolistenerexist"))switch(i.data("videotype")){case"youtube":var f=new YT.Player(l,{events:{onStateChange:function(t){var a=t.target.getVideoEmbedCode(),i=jQuery("#"+a.split('id="')[1].split('"')[0]),n=i.closest(".tp-simpleresponsive"),p=i.parent(),l=i.parent().data("player");if(t.data==YT.PlayerState.PLAYING)punchgs.TweenLite.to(p.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(p.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),"mute"==p.data("volume")?l.mute():(l.unMute(),l.setVolume(parseInt(p.data("volume"),0)||75)),d.videoplaying=!0,r(p,d),n.trigger("stoptimer"),d.c.trigger("revolution.slide.onvideoplay",o(l,"youtube",p.data()));else{if(0==t.data&&v){var u=e(p.data("videostartat"));-1!=u&&l.seekTo(u),l.playVideo()}(0==t.data||2==t.data)&&"on"==p.data("showcoveronpause")&&p.find(".tp-videoposter").length>0&&(punchgs.TweenLite.to(p.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(p.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),-1!=t.data&&3!=t.data&&(d.videoplaying=!1,s(p,d),n.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(l,"youtube",p.data()))),0==t.data&&1==p.data("nextslideatend")?(d.c.revnext(),s(p,d)):(s(p,d),d.videoplaying=!1,n.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(l,"youtube",p.data())))}},onReady:function(t){{var i=t.target.getVideoEmbedCode(),o=jQuery("#"+i.split('id="')[1].split('"')[0]),d=o.parent(),n=d.data("videorate");d.data("videostart")}if(d.addClass("rs-apiready"),void 0!=n&&t.target.setPlaybackRate(parseFloat(n)),d.find(".tp-videoposter").unbind("click"),d.find(".tp-videoposter").click(function(){a||f.playVideo()}),d.data("startvideonow")){d.data("player").playVideo();var r=e(d.data("videostartat"));-1!=r&&d.data("player").seekTo(r)}d.data("videolistenerexist",1)}}});i.data("player",f);break;case"vimeo":for(var m,h=p.attr("src"),g={},y=h,w=/([^&=]+)=([^&]*)/g;m=w.exec(y);)g[decodeURIComponent(m[1])]=decodeURIComponent(m[2]);h=void 0!=g.player_id?h.replace(g.player_id,l):h+"&player_id="+l;try{h=h.replace("api=0","api=1")}catch(b){}h+="&api=1",p.attr("src",h);var f=i.find("iframe")[0],k=(jQuery("#"+l),$f(l));k.addEvent("ready",function(){if(i.addClass("rs-apiready"),k.addEvent("play",function(){i.data("nextslidecalled",0),punchgs.TweenLite.to(i.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut}),d.c.trigger("revolution.slide.onvideoplay",o(k,"vimeo",i.data())),d.videoplaying=!0,r(i,d),u&&d.c.trigger("stoptimer"),"mute"==i.data("volume")?k.api("setVolume","0"):k.api("setVolume",parseInt(i.data("volume"),0)/100||.75)}),k.addEvent("playProgress",function(t){var a=e(i.data("videoendat"));if(0!=a&&Math.abs(a-t.seconds)<.3&&a>t.seconds&&1!=i.data("nextslidecalled"))if(v){k.api("play");var o=e(i.data("videostartat"));-1!=o&&k.api("seekTo",o)}else 1==i.data("nextslideatend")&&(i.data("nextslidecalled",1),d.c.revnext()),k.api("pause")}),k.addEvent("finish",function(){s(i,d),d.videoplaying=!1,d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(k,"vimeo",i.data())),1==i.data("nextslideatend")&&d.c.revnext()}),k.addEvent("pause",function(){i.find(".tp-videoposter").length>0&&"on"==i.data("showcoveronpause")&&(punchgs.TweenLite.to(i.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(i.find("iframe"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),d.videoplaying=!1,s(i,d),d.c.trigger("starttimer"),d.c.trigger("revolution.slide.onvideostop",o(k,"vimeo",i.data()))}),i.find(".tp-videoposter").unbind("click"),i.find(".tp-videoposter").click(function(){return a?void 0:(k.api("play"),!1)}),i.data("startvideonow")){k.api("play");var t=e(i.data("videostartat"));-1!=t&&k.api("seekTo",t)}i.data("videolistenerexist",1)})}else{var T=e(i.data("videostartat"));switch(i.data("videotype")){case"youtube":n&&(i.data("player").playVideo(),-1!=T&&i.data("player").seekTo());break;case"vimeo":if(n){var k=$f(i.find("iframe").attr("id"));k.api("play"),-1!=T&&k.api("seekTo",T)}}}},n=function(d,n){if(a&&1==d.data("disablevideoonmobile"))return!1;var p=d.find("video"),l=p[0],v=p.parent(),u=d.data("videoloop"),c="loopandnoslidestop"!=u;if(u="loop"==u||"loopandnoslidestop"==u,v.data("metaloaded",1),void 0==p.attr("control")&&(0!=d.find(".tp-video-play-button").length||a||d.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'),d.find("video, .tp-poster, .tp-video-play-button").click(function(){d.hasClass("videoisplaying")?l.pause():l.play()})),1==d.data("forcecover")||d.hasClass("fullscreenvideo"))if(1==d.data("forcecover")){v.addClass("fullcoveredvideo");var f=d.data("aspectratio");t.prepareCoveredVideo(f,n,d)}else v.addClass("fullscreenvideo");var m=d.find(".tp-vid-play-pause")[0],h=d.find(".tp-vid-mute")[0],g=d.find(".tp-vid-full-screen")[0],y=d.find(".tp-seek-bar")[0],w=d.find(".tp-volume-bar")[0];void 0!=m&&(i(m,"click",function(){1==l.paused?l.play():l.pause()}),i(h,"click",function(){0==l.muted?(l.muted=!0,h.innerHTML="Unmute"):(l.muted=!1,h.innerHTML="Mute")}),g&&i(g,"click",function(){l.requestFullscreen?l.requestFullscreen():l.mozRequestFullScreen?l.mozRequestFullScreen():l.webkitRequestFullscreen&&l.webkitRequestFullscreen()}),i(y,"change",function(){var e=l.duration*(y.value/100);l.currentTime=e}),i(l,"timeupdate",function(){var t=100/l.duration*l.currentTime,a=e(d.data("videoendat")),i=l.currentTime;if(y.value=t,0!=a&&Math.abs(a-i)<=.3&&a>i&&1!=d.data("nextslidecalled"))if(u){l.play();var o=e(d.data("videostartat"));-1!=o&&(l.currentTime=o)}else 1==d.data("nextslideatend")&&(d.data("nextslidecalled",1),n.c.revnext()),l.pause()}),i(y,"mousedown",function(){d.addClass("seekbardragged"),l.pause()}),i(y,"mouseup",function(){d.removeClass("seekbardragged"),l.play()}),i(w,"change",function(){l.volume=w.value})),i(l,"play",function(){d.data("nextslidecalled",0),"mute"==d.data("volume")&&(l.muted=!0),d.addClass("videoisplaying"),r(d,n),c?(n.videoplaying=!0,n.c.trigger("stoptimer"),n.c.trigger("revolution.slide.onvideoplay",o(l,"html5",d.data()))):(n.videoplaying=!1,n.c.trigger("starttimer"),n.c.trigger("revolution.slide.onvideostop",o(l,"html5",d.data()))),punchgs.TweenLite.to(d.find(".tp-videoposter"),.3,{autoAlpha:0,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(d.find("video"),.3,{autoAlpha:1,display:"block",ease:punchgs.Power3.easeInOut});var e=d.find(".tp-vid-play-pause")[0],t=d.find(".tp-vid-mute")[0];void 0!=e&&(e.innerHTML="Pause"),void 0!=t&&l.muted&&(t.innerHTML="Unmute")}),i(l,"pause",function(){d.find(".tp-videoposter").length>0&&"on"==d.data("showcoveronpause")&&!d.hasClass("seekbardragged")&&(punchgs.TweenLite.to(d.find(".tp-videoposter"),.3,{autoAlpha:1,force3D:"auto",ease:punchgs.Power3.easeInOut}),punchgs.TweenLite.to(d.find("video"),.3,{autoAlpha:0,ease:punchgs.Power3.easeInOut})),d.removeClass("videoisplaying"),n.videoplaying=!1,s(d,n),n.c.trigger("starttimer"),n.c.trigger("revolution.slide.onvideostop",o(l,"html5",d.data()));var e=d.find(".tp-vid-play-pause")[0];void 0!=e&&(e.innerHTML="Play")}),i(l,"ended",function(){s(d,n),n.videoplaying=!1,s(d,n),n.c.trigger("starttimer"),n.c.trigger("revolution.slide.onvideostop",o(l,"html5",d.data())),1==d.data("nextslideatend")&&n.c.revnext(),d.removeClass("videoisplaying")})},r=function(e,a){void 0==a.playingvideos&&(a.playingvideos=new Array),e.data("stopallvideos")&&void 0!=a.playingvideos&&a.playingvideos.length>0&&(a.lastplayedvideos=jQuery.extend(!0,[],a.playingvideos),jQuery.each(a.playingvideos,function(e,i){t.stopVideo(i,a)})),a.playingvideos.push(e)},s=function(e,t){void 0!=t.playingvideos&&t.playingvideos.splice(jQuery.inArray(e,t.playingvideos),1)}}(jQuery);