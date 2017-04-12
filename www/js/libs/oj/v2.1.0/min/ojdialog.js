/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore","jqueryui-amd/draggable","jqueryui-amd/mouse"],function(b,f){(function(){function a(a){if(-1===["touchstart","touchmove","touchend","touchcancel"].indexOf(a.type))return a;var b={altKey:!0,bubbles:!0,cancelable:!0,ctrlKey:!0,currentTarget:!0,eventPhase:!0,metaKey:!0,target:!0,relatedTarget:!0,shiftKey:!0,timeStamp:!0,view:!0,which:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pageX:!0,pageY:!0,screenX:!0,screenY:!0,
toElement:!0,"char":!0,charCode:!0,key:!0,keyCode:!0},c=document.createEvent("MouseEvent"),d;d=a.originalEvent;d=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:d.targetTouches&&d.targetTouches.length?d.targetTouches[0]:d.touches&&d.touches.length?d.touches[0]:null;c.initMouseEvent({touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseup"}[a.type],!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null);a={};Object.defineProperty&&Object.defineProperty(c,
"target",{value:d.target,writable:!1,enumerable:!0,configurable:!1});for(var e in c)b[e]&&!f.isFunction(c[e])&&(a[e]=c[e]);a.target||(a.target=d.target);return f.Event(c,a)}var d=f.ui.mouse.prototype?f.ui.mouse.prototype:{}.prototype,c=d._mouseInit,e=d._mouseDestroy;d.uwa=function(b){this._mouseDown(a(b))&&(this._on(this.document,{touchmove:this.swa}),this._on(this.document,{touchend:this.p9,touchcancel:this.p9}))};d.swa=function(b){var c=a(b);this._mouseCapture(c)&&(b.preventDefault(),this._mouseMove(a(c)))};
d.p9=function(b){this._off(this.document,"touchmove touchend touchcancel");this._mouseUp(a(b))};d._mouseInit=function(){this._on(this.element,{touchstart:this.uwa});c.call(this)};d._mouseDestroy=function(){this._off(this.element,"touchstart");this._off(this.document,"touchmove touchend touchcancel");e.call(this)};var g=d._mouseCapture;(f.ui.draggable.prototype?f.ui.draggable.prototype:{}.prototype)._mouseCapture=function(a){return f(a.target).is(".oj-resizable-handle")?!1:g.call(this,a)};b.Ja("oj.ojResizable",
f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,stop:null},qR:function(a){return parseInt(a,10)||0},Nf:function(a){return!isNaN(parseInt(a,10))},x4:function(a,b){if("hidden"===f(a).css("overflow"))return!1;var c=
b&&"left"===b?"scrollLeft":"scrollTop",d=!1;if(0<a[c])return!0;a[c]=1;d=0<a[c];a[c]=0;return d},_ComponentCreate:function(){this._super();var a,b,c,d,e,g=this;a=this.options;b=this.element.mouse.bind(this.element);b();this.ip=b("instance");this.element.mouse("option","cancel",a.cancel);this.ip._mouseCapture=function(a){return g.bsa(a)};this.ip._mouseStart=function(a){return g.esa(a)};this.ip._mouseDrag=function(a){return g.csa(a)};this.ip._mouseStop=function(a){return g.dB(a)};this.element.addClass("oj-resizable");
f.extend(this,{bK:this.element,xH:[],Gm:null});this.handles=a.handles||(f(".oj-resizable-handle",this.element).length?{kEa:".oj-resizable-n",YDa:".oj-resizable-e",tEa:".oj-resizable-s",oh:".oj-resizable-w",vEa:".oj-resizable-se",xEa:".oj-resizable-sw",lEa:".oj-resizable-ne",nEa:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},b=0;b<a.length;b++)c=f.trim(a[b]),e="oj-resizable-"+
c,d=f("\x3cdiv class\x3d'oj-resizable-handle "+e+"'\x3e\x3c/div\x3e"),this.handles[c]=".oj-resizable-"+c,this.element.append(d);this.jua=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.jua();this.Xpa=f(".oj-resizable-handle",this.element);this.Xpa.on("mouseover touchstart",function(){g.mda||(this.className&&(d=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=d&&d[1]?d[1]:"se")});
this.ip._mouseInit()},_destroy:function(){this.ip&&this.ip._mouseDestroy();try{this.ip.destroy(),this.ip=null}catch(a){}f(this.bK).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},bsa:function(a){var b=!1;f(a.target).is(".oj-resizable-handle")&&(b=!0);return!this.options.disabled&&b},esa:function(a){var b,c,d;d=this.options;b=this.element.position();var e=
this.element;this.mda=!0;/absolute/.test(e.css("position"))?e.css({position:"absolute",top:e.css("top"),left:e.css("left")}):e.is(".oj-draggable")&&e.css({position:"absolute",top:b.top,left:b.left});this.kua();b=this.qR(this.helper.css("left"));c=this.qR(this.helper.css("top"));d.containment&&(b+=f(d.containment).scrollLeft()||0,c+=f(d.containment).scrollTop()||0);this.offset=this.helper.offset();this.position={left:b,top:c};this.size={width:e.width(),height:e.height()};this.Ul={width:e.width(),height:e.height()};
this.Kr={left:b,top:c};this.pK={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};this.jBa={left:a.pageX,top:a.pageY};this.Vm=this.Ul.width/this.Ul.height||1;d=f(".oj-resizable-"+this.axis).css("cursor");f("body").css("cursor","auto"===d?this.axis+"-resize":d);e.addClass("oj-resizable-resizing");this.KR("start",a);this.Sia(a);this.uka(a);return!0},csa:function(a){var b,c=this.helper,d={},e=this.jBa;b=a.pageX-e.left||0;var e=a.pageY-e.top||0,g=this.fj[this.axis];this.py={top:this.position.top,
left:this.position.left};this.qy={width:this.size.width,height:this.size.height};if(!g)return!1;b=g.apply(this,[a,b,e]);this.Uwa(a.shiftKey);a.shiftKey&&(b=this.Twa(b,a));b=this.xua(b,a);this.Iwa(b);this.KR("resize",a);this.Ria(a,this.ui());this.tka(a,this.ui());this.position.top!==this.py.top&&(d.top=this.position.top+"px");this.position.left!==this.py.left&&(d.left=this.position.left+"px");this.size.width!==this.qy.width&&(d.width=this.size.width+"px");this.size.height!==this.qy.height&&(d.height=
this.size.height+"px");c.css(d);!this.Gm&&this.xH.length&&this.dta();f.isEmptyObject(d)||this._trigger("resize",a,this.ui());return!1},dB:function(a){this.mda=!1;f("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.KR("stop",a);this.Tia(a);this.vka(a);return!1},Uwa:function(a){var b,c,d,e;e=this.options;e={minWidth:this.Nf(e.minWidth)?e.minWidth:0,maxWidth:this.Nf(e.maxWidth)?e.maxWidth:Infinity,minHeight:this.Nf(e.minHeight)?e.minHeight:0,maxHeight:this.Nf(e.maxHeight)?
e.maxHeight:Infinity};a&&(a=e.minHeight*this.Vm,c=e.minWidth/this.Vm,b=e.maxHeight*this.Vm,d=e.maxWidth/this.Vm,a>e.minWidth&&(e.minWidth=a),c>e.minHeight&&(e.minHeight=c),b<e.maxWidth&&(e.maxWidth=b),d<e.maxHeight&&(e.maxHeight=d));this.Xwa=e},Iwa:function(a){this.offset=this.helper.offset();this.Nf(a.left)&&(this.position.left=a.left);this.Nf(a.top)&&(this.position.top=a.top);this.Nf(a.height)&&(this.size.height=a.height);this.Nf(a.width)&&(this.size.width=a.width)},Twa:function(a){var b=this.position,
c=this.size,d=this.axis;this.Nf(a.height)?a.width=a.height*this.Vm:this.Nf(a.width)&&(a.height=a.width/this.Vm);"sw"===d&&(a.left=b.left+(c.width-a.width),a.top=null);"nw"===d&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width));return a},xua:function(a){var b=this.Xwa,c=this.axis,d=this.Nf(a.width)&&b.maxWidth&&b.maxWidth<a.width,e=this.Nf(a.height)&&b.maxHeight&&b.maxHeight<a.height,f=this.Nf(a.width)&&b.minWidth&&b.minWidth>a.width,g=this.Nf(a.height)&&b.minHeight&&b.minHeight>a.height,
s=this.Kr.left+this.Ul.width,r=this.position.top+this.size.height,u=/sw|nw|w/.test(c),c=/nw|ne|n/.test(c);f&&(a.width=b.minWidth);g&&(a.height=b.minHeight);d&&(a.width=b.maxWidth);e&&(a.height=b.maxHeight);f&&u&&(a.left=s-b.minWidth);d&&u&&(a.left=s-b.maxWidth);g&&c&&(a.top=r-b.minHeight);e&&c&&(a.top=r-b.maxHeight);a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null;return a},dta:function(){if(this.xH.length){var a,b,c,d,e,f=this.helper||this.element;for(a=
0;a<this.xH.length;a++){e=this.xH[a];if(!this.Bx)for(this.Bx=[],c=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],d=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")],b=0;b<c.length;b++)this.Bx[b]=(parseInt(c[b],10)||0)+(parseInt(d[b],10)||0);e.css({height:f.height()-this.Bx[0]-this.Bx[2]||0,width:f.width()-this.Bx[1]-this.Bx[3]||0})}}},kua:function(){this.element.offset();this.helper=this.element},fj:{e:function(a,
b){return{width:this.Ul.width+b}},w:function(a,b){return{left:this.Kr.left+b,width:this.Ul.width-b}},n:function(a,b,c){return{top:this.Kr.top+c,height:this.Ul.height-c}},s:function(a,b,c){return{height:this.Ul.height+c}},se:function(a,b,c){return f.extend(this.fj.s.apply(this,arguments),this.fj.e.apply(this,[a,b,c]))},sw:function(a,b,c){return f.extend(this.fj.s.apply(this,arguments),this.fj.w.apply(this,[a,b,c]))},ne:function(a,b,c){return f.extend(this.fj.n.apply(this,arguments),this.fj.e.apply(this,
[a,b,c]))},nw:function(a,b,c){return f.extend(this.fj.n.apply(this,arguments),this.fj.w.apply(this,[a,b,c]))}},KR:function(a,b){"resize"!==a&&this._trigger(a,b,this.ui())},Sia:function(){function a(b){f(b).each(function(){var a=f(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),10)})})}var b=this.options;"object"!==typeof b.alsoResize||b.alsoResize.parentNode?a(b.alsoResize):b.alsoResize.length?
(b.alsoResize=b.alsoResize[0],a(b.alsoResize)):f.each(b.alsoResize,function(b){a(b)})},Ria:function(a,b){function c(a,d){f(a).each(function(){var a=f(this),c=f(this).data("oj-resizable-alsoresize"),e={};f.each(d&&d.length?d:a.parents(b.bK[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var d=(c[b]||0)+(q[b]||0);d&&0<=d&&(e[b]=d||null)});a.css(e)})}var d=this.options,e=this.Ul,g=this.Kr,q={height:this.size.height-e.height||0,width:this.size.width-e.width||0,top:this.position.top-
g.top||0,left:this.position.left-g.left||0};"object"!==typeof d.alsoResize||d.alsoResize.nodeType?c(d.alsoResize,null):f.each(d.alsoResize,function(a,b){c(a,b)})},Tia:function(){f(this).removeData("oj-resizable-alsoresize")},uka:function(){var a,b,c,d,e,g=this,q=g.element;c=g.options.containment;if(q=c instanceof f?c.get(0):/parent/.test(c)?q.parent().get(0):c)g.JI=f(q),/document/.test(c)||c===document?(g.KI={left:0,top:0},g.q$={left:0,top:0},g.Lr={element:f(document),left:0,top:0,width:f(document).width(),
height:f(document).height()||document.body.parentNode.scrollHeight}):(a=f(q),b=[],f(["Top","Right","Left","Bottom"]).each(function(c,d){b[c]=g.qR(a.css("padding"+d))}),g.KI=a.offset(),g.q$=a.position(),g.r$={height:a.innerHeight()-b[3],width:a.innerWidth()-b[1]},c=g.KI,d=g.r$.height,e=g.r$.width,e=g.x4(q,"left")?q.scrollWidth:e,d=g.x4(q)?q.scrollHeight:d,g.Lr={element:q,left:c.left,top:c.top,width:e,height:d})},tka:function(a,b){var c,d,e,f;c=this.options;d=this.KI;f=this.position;var g=a.shiftKey;
e={top:0,left:0};var s=this.JI,r=!0;s[0]!==document&&/static/.test(s.css("position"))&&(e=d);f.left<(this.Gm?d.left:0)&&(this.size.width+=this.Gm?this.position.left-d.left:this.position.left-e.left,g&&(this.size.height=this.size.width/this.Vm,r=!1),this.position.left=c.helper?d.left:0);f.top<(this.Gm?d.top:0)&&(this.size.height+=this.Gm?this.position.top-d.top:this.position.top,g&&(this.size.width=this.size.height*this.Vm,r=!1),this.position.top=this.Gm?d.top:0);this.offset.left=this.Lr.left+this.position.left;
this.offset.top=this.Lr.top+this.position.top;c=Math.abs((this.Gm?this.offset.left-e.left:this.offset.left-d.left)+this.pK.width);d=Math.abs((this.Gm?this.offset.top-e.top:this.offset.top-d.top)+this.pK.height);e=this.JI.get(0)===this.element.parent().get(0);f=/relative|absolute/.test(this.JI.css("position"));e&&f&&(c-=Math.abs(this.Lr.left));c+this.size.width>=this.Lr.width&&(this.size.width=this.Lr.width-c,g&&(this.size.height=this.size.width/this.Vm,r=!1));d+this.size.height>=this.Lr.height&&(this.size.height=
this.Lr.height-d,g&&(this.size.width=this.size.height*this.Vm,r=!1));r||(this.position.left=b.py.left,this.position.top=b.py.top,this.size.width=b.qy.width,this.size.height=b.qy.height)},vka:function(){var a=this.options,b=this.KI,c=this.q$,d=this.JI,e=f(this.helper),g=e.offset(),q=e.outerWidth()-this.pK.width,e=e.outerHeight()-this.pK.height;this.Gm&&!a.animate&&/relative/.test(d.css("position"))&&f(this).css({left:g.left-c.left-b.left,width:q,height:e});this.Gm&&!a.animate&&/static/.test(d.css("position"))&&
f(this).css({left:g.left-c.left-b.left,width:q,height:e})},ui:function(){return{bK:this.bK,element:this.element,helper:this.helper,position:this.position,size:this.size,Ul:this.Ul,Kr:this.Kr,qy:this.qy,py:this.py}}})})();(function(){b.Ja("oj.ojDialog",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",initialVisibility:"hide",modality:"modal",position:{my:"center",at:"center",of:window,collision:"fit",AEa:function(a){var b=f(this).css(a).offset().top;
0>b&&f(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_ComponentCreate:function(){this._super();this.iBa={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};this.Kr={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.NV=this.element.attr("title");this.options.title=
this.options.title||this.NV;this.ola();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.jc);this.BD=!1;if(this.element.find(".oj-dialog").length){var a=this;this.element.find(".oj-dialog-header").each(function(b,c){var e=f(c);if(!e.closest(".oj-dialog-body").length)return a.Zq=e,a.BD=!0,!1})}else this.Zq=this.element.find(".oj-dialog-header"),this.Zq.length&&(this.BD=!0);this.BD?(this.cla(this.Zq),this.Zq.prependTo(this.jc),"icon"===this.options.cancelBehavior&&
(this.pF(this.Zq),this.aC=this.Zq.find(".oj-dialog-title"),this.aC.length&&this.aC.insertAfter(this.Tr))):this.nla();this.yp=this.element.children(".oj-dialog-footer");this.bla(this.yp);this.yp.length&&(this.yp.addClass("oj-helper-clearfix"),this.yp.appendTo(this.jc));"title-bar"===this.options.dragAffordance&&f.fn.draggable&&this.Tw();this.Hq=!1},aY:function(){"show"===this.options.initialVisibility&&this.open()},_destroy:function(){this.yla&&window.clearTimeout(this.yla);this.isOpen()&&this.Ns();
this.Bo&&(this.Bo("instance")&&this.Bo("destroy"),this.Bo=null);this.yp.length&&(this.yp.removeClass("oj-helper-clearfix"),f("#"+this.r6).replaceWith(this.yp));this.yF();if(this.BD){var a=this.jc.find(".oj-dialog-header");a&&f("#"+this.s6).replaceWith(a)}this.fea&&(this.fea.remove(),this.fea=null);this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.iBa);this.jc&&this.jc.stop(!0,!0);this.element.unwrap();this.NV&&this.element.attr("title",this.NV);this.zp&&
(this.zp.remove(),this.zp=null);delete this.tl;delete this.Hq;this._super()},widget:function(){return this.jc},disable:f.noop,enable:f.noop,close:function(a){if(this.isOpen()&&(!1!==this._trigger("beforeClose",a)||this.MA)){this.Hq=!1;this.Gma=null;this.opener.filter(":focusable").focus().length||f(this.document[0].activeElement).blur();var d={};d[b.R.kb.zg]=this.jc;b.R.wf().close(d);this._trigger("close",a)}},isOpen:function(){return this.Hq},open:function(a){if(!1!==this._trigger("beforeOpen",a)){if(!this.isOpen()){this.Hq=
!0;this.opener=f(this.document[0].activeElement);"resizable"===this.options.resizeBehavior&&this.R5();a="rtl"===this.Ic();a=b.ad.$h(this.options.position,a);var d={};d[b.R.kb.zg]=this.jc;d[b.R.kb.Qy]=this.opener;d[b.R.kb.Ty]=a;d[b.R.kb.Hj]=this.options.modality;d[b.R.kb.Zr]=this.xw();d[b.R.kb.Hp]="oj-dialog-layer";d[b.R.kb.Gp]=b.R.Gp.vL;b.R.wf().open(d);this._trigger("open")}this.i2()}},refresh:function(){this._super()},i2:function(){var a=this.Gma;a&&0<a.length&&b.A.sr(this.jc[0],a[0])||(a||(a=this.element.find("[autofocus]")),
a.length||(a=this.element.find(":tabbable")),a.length||this.yp.length&&(a=this.yp.find(":tabbable")),a.length||this.xW&&(a=this.xW.filter(":tabbable")),a.length||(a=this.jc),a.eq(0).focus(),this._trigger("focus"))},_keepFocus:function(a){a.preventDefault();a=this.document[0].activeElement;this.jc[0]===a||f.contains(this.jc[0],a)||this.i2()},Nf:function(a){return!isNaN(parseInt(a,10))},ola:function(){this.v5=!1;this.element.uniqueId();this.uO=this.element.attr("id");this.cxa="ojDialogWrapper-"+this.uO;
this.jc=f("\x3cdiv\x3e");this.jc.addClass("oj-dialog oj-component").hide().attr({tabIndex:-1,role:this.options.role,id:this.cxa});this.jc.insertBefore(this.element);this._on(this.jc,{keyup:function(){},keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===f.ui.keyCode.ESCAPE)a.preventDefault(),a.stopImmediatePropagation(),this.close(a);else if(a.keyCode===f.ui.keyCode.TAB){var b=this.jc.find(":tabbable"),c=b.filter(":first"),e=b.filter(":last");
a.shiftKey?a.shiftKey&&(a.target===c[0]||a.target===this.jc[0]?(e.focus(),a.preventDefault()):(c=b.index(document.activeElement),1==c&&b[0]&&(b[0].focus(),a.preventDefault()))):a.target===e[0]||a.target===this.jc[0]?(c.focus(),a.preventDefault()):(c=b.index(document.activeElement),0==c&&b[1]&&(b[1].focus(),a.preventDefault()))}}});this.element.find("[aria-describedby]").length||this.jc.attr({"aria-describedby":this.element.uniqueId().attr("id")})},yF:function(){this.Tr&&(this.Tr.remove(),this.xW=
this.Tr=null)},pF:function(a){this.Tr=f("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex","1").attr("aria-label","close").attr("role","button").appendTo(a);this.xW=f("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt","close icon").prependTo(this.Tr);this._on(this.Tr,{click:function(a){a.preventDefault();a.stopImmediatePropagation();this.close(a)},mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},
mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active")},keyup:function(a){if(a.keyCode&&a.keyCode===f.ui.keyCode.SPACE||a.keyCode===f.ui.keyCode.ENTER)a.preventDefault(),a.stopImmediatePropagation(),this.close(a)}})},nla:function(){var a;this.zp=f("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.jc);this._on(this.zp,{mousedown:function(a){f(a.target).closest(".oj-dialog-close-icon")||
this.jc.focus()}});"icon"===this.options.cancelBehavior&&this.pF(this.zp);a=f("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").appendTo(this.zp);this.m9(a);this.jc.attr({"aria-labelledby":a.attr("id")})},m9:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},Tw:function(){function a(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;this.jc.draggable({SDa:!1,cancel:".oj-resize-handle .oj-dialog-content, .oj-dialog-header-close",handle:".oj-dialog-header",
containment:"document",start:function(c,f){b.jc.addClass("oj-dialog-dragging");b.K_();b.nB();b._trigger("dragStart",c,a(f))},drag:function(c,f){b.nB();b._trigger("drag",c,a(f))},stop:function(e,f){c.position=[f.position.left-b.document.scrollLeft(),f.position.top-b.document.scrollTop()];b.jc.removeClass("oj-dialog-dragging");b.w9();b.nB();b._trigger("dragStop",e,a(f))}});this.jc.addClass("oj-draggable")},R5:function(){function a(a){return{originalPosition:a.Kr,originalSize:a.Ul,position:a.position,
size:a.size}}var b=this;this.jc.css("position");this.Bo=this.jc.ojResizable.bind(this.jc);this.Bo({cancel:".oj-dialog-title",containment:"document",handles:"n,e,s,w,se,sw,ne,nw",start:function(c,e){b.v5=!0;f(this).addClass("oj-dialog-resizing");b.K_();b._trigger("resizeStart",c,a(e))},resize:function(c,e){b._trigger("resize",c,a(e))},stop:function(c,e){b.v5=!1;f(this).removeClass("oj-dialog-resizing");b.w9();b._trigger("resizeStop",c,a(e))}})},AR:function(){var a="rtl"===this.Ic(),a=b.ad.$h(this.options.position,
a);this.jc.position(a);this.nB()},nB:function(){b.R.wf().wW(this.jc,b.R.md.Kp)},_setOption:function(a,d,c){var e;e=this.jc;if("disabled"!==a)switch(this._super(a,d,c),a){case "dragAffordance":(a=e.hasClass("oj-draggable"))&&"none"===d&&(e.draggable("destroy"),this.jc.removeClass("oj-draggable"));a||"title-bar"!==d||this.Tw();break;case "position":this.AR();break;case "resizeBehavior":e=!1;this.Bo&&(e=!0);e&&"resizable"!=d&&(this.Bo("instance")&&this.Bo("destroy"),this.Bo=null);e||"resizable"!==d||
this.R5();break;case "title":this.m9(this.zp.find(".oj-dialog-title"));break;case "role":e.attr("role",d);break;case "modality":this.isOpen()&&(e={},e[b.R.kb.zg]=this.jc,e[b.R.kb.Hj]=d,b.R.wf().Cx(e));break;case "cancelBehavior":"none"===d||"escape"===d?this.yF():"icon"===d&&(this.BD?(this.yF(),this.pF(this.Zq),this.aC=this.Zq.find(".oj-dialog-title"),this.aC.length&&this.aC.insertAfter(this.Tr)):(this.yF(),this.pF(this.zp),this.Mda=this.zp.find(".oj-dialog-title"),this.Mda.length&&this.Mda.insertAfter(this.Tr)))}},
K_:function(){this.PU=this.document.find("iframe").map(function(){var a=f(this),b=a.offset();return f("\x3cdiv\x3e").css({width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(b)[0]})},w9:function(){this.PU&&(this.PU.remove(),delete this.PU)},bla:function(a){this.r6="ojDialogPlaceHolderFooter-"+this.uO;this.Gsa=f("\x3cdiv\x3e").hide().attr({id:this.r6});this.Gsa.insertBefore(a)},cla:function(a){this.s6="ojDialogPlaceHolderHeader-"+this.uO;this.Hsa=f("\x3cdiv\x3e").hide().attr({id:this.s6});
this.Hsa.insertBefore(a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close-wrapper":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":a="."+a;if(!this.widget().find(a))break;return this.widget().find(a)[0];
case "oj-dialog-close-icon":case "oj-dialog-close":if(!this.widget().find(".oj-dialog-close-icon"))break;return this.widget().find(".oj-dialog-close-icon")[0]}return null},getSubIdByNode:function(a){if(null!=a){a=f(a);if(a.hasClass("oj-dialog-header"))return{subId:"oj-dialog-header"};if(a.hasClass("oj-dialog-footer"))return{subId:"oj-dialog-footer"};if(a.hasClass("oj-dialog-content"))return{subId:"oj-dialog-content"};if(a.hasClass("oj-dialog-header-close-wrapper"))return{subId:"oj-dialog-header-close-wrapper"};
if(a.hasClass("oj-dialog-close-icon"))return{subId:"oj-dialog-close"};if(a.hasClass("oj-resizable-n"))return{subId:"oj-resizable-n"};if(a.hasClass("oj-resizable-e"))return{subId:"oj-resizable-e"};if(a.hasClass("oj-resizable-s"))return{subId:"oj-resizable-s"};if(a.hasClass("oj-resizable-w"))return{subId:"oj-resizable-w"};if(a.hasClass("oj-resizable-se"))return{subId:"oj-resizable-se"};if(a.hasClass("oj-resizable-sw"))return{subId:"oj-resizable-sw"};if(a.hasClass("oj-resizable-ne"))return{subId:"oj-resizable-ne"};
if(a.hasClass("oj-resizable-nw"))return{subId:"oj-resizable-nw"}}return null},Rt:function(){this.element.remove()},xw:function(){if(!this.tl){var a=this.tl={};a[b.R.md.lv]=f.proxy(this.Ns,this);a[b.R.md.mv]=f.proxy(this.Rt,this);a[b.R.md.Kp]=f.proxy(this.nB,this)}return this.tl},Ns:function(){this.MA=!0;this.close();delete this.MA}})})()});