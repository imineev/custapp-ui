/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojbutton","ojs/ojmenu","ojs/ojlistview"],function(b,f){b.qe=function(a,b,e){this.u=a;this.$=b;this.oV=e};b.qe.prototype.ag=function(){this.$.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical")};b.qe.prototype.cv=function(){};b.qe.prototype.$u=function(){};b.qe.prototype.eX=function(){return!1};b.qe.prototype.hL=function(){};b.qe.prototype.xL=function(a,b){a.attr("aria-selected",b?"true":"false")};b.qe.prototype.IK=function(){};
b.qe.prototype.iX=function(){};b.qe.prototype.jX=function(){};b.qe.prototype.fs=function(b,c,e){return a.p.fs.apply(this.u,arguments)};b.qe.prototype.fv=function(b){return a.p.fv.apply(this.u,arguments)};b.qe.prototype.eg=function(b){return a.p.eg.apply(this.u,arguments)};b.qe.prototype.js=function(b,c){a.p.js.apply(this.u,arguments)};b.qe.prototype.Init=function(){this.$.addClass("oj-navigationlist-expanded oj-navigationlist-vertical")};b.qe.prototype.Wi=function(b){return a.p.Wi.apply(this.u,arguments)};
b.qe.prototype.Uy=function(){};b.qe.prototype.NW=function(){};b.qe.prototype.Ru=function(){};b.xh=function(a,c,e){b.xh.p.constructor.call(this,a,c,e)};b.b.la(b.xh,b.qe,"oj.HorizontalNavListHandler");b.xh.prototype.ag=function(){this.$.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");this.$.find("."+this.u.bv).remove()};b.xh.prototype.xL=function(a,b){a.attr("aria-pressed",b?"true":"false")};b.xh.prototype.fs=function(b,c,e){b===f.ui.keyCode.LEFT?b=this.u.jh()?f.ui.keyCode.DOWN:
f.ui.keyCode.UP:b===f.ui.keyCode.RIGHT&&(b=this.u.jh()?f.ui.keyCode.UP:f.ui.keyCode.DOWN);b=a.p.fs.call(this.u,b,c,e);"top"===this.u.W.options.edge&&this.u.J.elem[0].scrollIntoView(!1);return b};b.xh.prototype.fv=function(a){return a===this.u.ls||a===this.u.Yr||a===this.u.Xi||a===this.u.Lj};b.xh.prototype.hL=function(a){a=this.u.kJ(a);a.attr("role","button");a[0].hasAttribute("aria-selected")&&(a.attr("aria-pressed","false"),a.removeAttr("aria-selected"))};b.xh.prototype.IK=function(){var a=this;
this.u.element.attr("role","toolbar");this.u.element.find("."+this.u.ug()+":visible").each(function(b){0<b&&a.l_(this,b)})};b.xh.prototype.l_=function(a,b){var e=f(a),g=e.prev();0<b&&e.is(":visible")&&g.length&&!g.is("li."+this.u.bv)&&e.before('\x3cli role\x3d"separator" class\x3d"'+this.u.bv+'"\x3e\x3c/li\x3e')};b.xh.prototype.iX=function(a,b){this.l_(a,b.index)};b.xh.prototype.jX=function(a){a=f(a);var b=a.prev();b.length&&b.is("li."+this.u.bv)?b.remove():(a=a.next(),a.is("li."+this.u.bv)&&a.remove())};
b.xh.prototype.Wi=function(a){return this.u.uf(f(a))[0].hasAttribute("aria-pressed")};b.xh.prototype.Init=function(){this.$.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal")};b.xh.prototype.Uy=function(){};b.Yl=function(a,c,e){b.Yl.p.constructor.call(this,a,c,e)};b.b.la(b.Yl,b.qe,"oj.CollapsibleNavListHandler");b.Yl.prototype.ag=function(){this.$.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};b.Yl.prototype.Init=function(){this.$.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical")};
b.Yl.prototype.cv=function(b,c,e){a.p.EK.apply(this.u,arguments)};b.Yl.prototype.$u=function(b,c,e){a.p.CK.apply(this.u,arguments)};b.Yl.prototype.eX=function(a,b,e,g){var h=0<e.children("."+this.u.eh()).length;if(b===this.u.Xi||b===this.u.Lj)return b===this.u.Xi&&!this.u.jh()||b===this.u.Lj&&this.u.jh()?this.u.eg(e)===this.u.Uk&&this.u.Cp(e,a,!0,g,!0,!0):this.u.eg(e)===this.u.Tk&&this.u.$r(e,a,!0,g,!0,!0,!0),!0;if(h&&(b===f.ui.keyCode.ENTER||b===f.ui.keyCode.SPACE)){if(0>=e.length)return;this.u.eg(e)===
this.u.Tk?this.u.$r(e,null,!0,g,!0,!0,!0):this.u.eg(e)===this.u.Uk&&this.u.Cp(e,null,!0,g,!0,!0);return!0}return!1};b.Yl.prototype.Uy=function(){};b.be=function(a,c,e){b.be.p.constructor.call(this,a,c,e);this.wV=[]};b.b.la(b.be,b.Yl,"oj.SlidingNavListHandler");b.be.prototype.ag=function(){this.$.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");this.fI.remove()};b.be.prototype.L8=function(a,b,e,f){var h=this,k=this.u.vk(),l=k.outerWidth()/2,p=this.u.jh();b||(l*=-1);var n=this.u.vk().hasClass("oj-focus-ancestor");
p?(k.css({"margin-right":l}),k.animate({"margin-right":"0px"},400,"swing",function(){h.YH(a,b,e,f,n)})):(k.css({"margin-left":l}),k.animate({"margin-left":"0px"},400,"swing",function(){h.YH(a,b,e,f,n)}))};b.be.prototype.YH=function(a,b,e,f,h){null!==this.u.yf&&(e&&(h&&this.u.vk().addClass("oj-focus-ancestor"),this.u.ID(e,f)),b?this.u.FK(a.children("."+this.u.eh())):this.u.DK(a.children("."+this.u.eh())))};b.be.prototype.cv=function(a,b,e){var g=f(a).parents(".oj-navigationlist-item-element:first"),
h=g.children("."+this.u.eh()),k,l=null,p=g.closest("."+this.u.Lp);if(0<p.length){p.removeClass(this.u.Lp);g.addClass(this.u.Lp);var l=h.find("."+this.u.ug()+":eq(0)"),n=g.parentsUntil(p,"ul"),n=p.is(this.u.element)?n.get().concat(p.get()):n.get(),m=this,q,n=f(n.reverse());n.each(function(a,b){k=f(b).is(m.u.element)?m.u.iJ():m.u.tU(f(b).parent());q=a===n.length-1?g:f(n.get(a+1)).parent();m.zia(m.u.Ye(q[0]),m.u.tU(q),k);m.wV.push(q)})}b?this.L8(g,!0,l,e):this.YH(g,!0,l,e,!1);this.u.element.focus();
g.siblings().attr("aria-hidden","true");g.children("."+this.u.vf()).children("."+this.u.bm).attr("aria-hidden","true");h.removeAttr("aria-hidden");a.css("display","");g.addClass("oj-skipfocus")};b.be.prototype.$u=function(a,b,e){var f=a.children("."+this.u.eh()),h=a.parent();a.children("."+this.u.vf()).children("."+this.u.bm).removeAttr("aria-hidden");f.attr("aria-hidden","true");a.siblings().removeAttr("aria-hidden");a.removeClass("oj-skipfocus");a.removeClass(this.u.Lp);0===a.closest("."+this.u.Lp).length&&
(h.closest("."+this.u.ug()).addClass(this.u.Lp),this.u.element.is(h)&&this.u.element.addClass(this.u.Lp));b?this.L8(a,!1,f.parent(),e):this.YH(a,!1,f.parent(),e,!1);this.Vta();this.u.element.focus()};b.be.prototype.xL=function(a,b){b?a.attr("aria-describedby","selectedLabel"):a.removeAttr("aria-describedby")};b.be.prototype.eg=function(a){a=this.u.uf(a).attr("aria-expanded");return"true"===a?this.u.Uk:"false"===a?this.u.Tk:this.u.GX};b.be.prototype.js=function(a,b){b===this.u.Uk?(this.u.uf(a).attr("aria-expanded",
"true"),a.removeClass(this.u.KW).addClass(this.u.UW)):b===this.u.Tk&&(this.u.uf(a).attr("aria-expanded","false"),a.removeClass(this.u.UW).addClass(this.u.KW))};b.be.prototype.hL=function(a,b){var e=this.u.uf(a);e.attr("role","menuitem");b.attr("id")||b.uniqueId();var f=a.children("."+this.u.eh());0<f.length&&(e.attr("aria-haspopup","true"),f.attr("role","menu"),f.css("display",""),a.removeAttr("aria-expanded"),e.attr("aria-expanded","false"))};b.be.prototype.IK=function(){this.u.element.attr("role",
"menu")};b.be.prototype.Init=function(a){this.$.addClass("oj-navigationlist-slider oj-navigationlist-vertical");a.element.addClass("oj-navigationlist-current");this.yja(a);this.Fqa()};b.be.prototype.yja=function(a){var b;this.fI=f(document.createElement("div"));this.fI.addClass("oj-navigationlist-toolbar");this.zo=f(document.createElement("a"));this.rB=f(document.createElement("span"));this.rB.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role","img").attr("alt",
this.oV.v("previousIcon"));this.rB.css("visibility","hidden");this.zo.addClass("oj-navigationlist-previous-link").attr("tabindex","-1").append(this.rB);this.JA=f(document.createElement("label"));this.JA.addClass("oj-navigationlist-current-header").text(this.u.iJ());this.uI=f(document.createElement("span"));this.uI.attr("role","separator").attr("aria-orientation","vertical").addClass("oj-navigationlist-toolbar-separator");this.lj=f(document.createElement("button"));this.lj.addClass("oj-navigationlist-hierarchical-button");
this.Sg=f(document.createElement("ul"));this.Sg.addClass("oj-navigationlist-hierarchical-menu").hide();b=f(document.createElement("label"));b.addClass("oj-helper-hidden-accessible").attr("aria-hidden","true").attr("id","selectedLabel");b.text(this.oV.v("selectedLabel"));this.zo.append(this.JA);this.fI.append(this.zo).append(this.uI).append(this.lj).append(this.Sg).append(b);this.$.prepend(this.fI);this.VH(a.hierarchyMenuDisplayThresholdLevel)};b.be.prototype.NW=function(){var a=this.wV.pop();a&&this.u.Cp(a,
null,!0,null,!0,!0)};b.be.prototype.Fqa=function(){var a=this,b=this.Sg.uniqueId().attr("id");this.Sg.ojMenu({openOptions:{position:{my:"end top",at:"end bottom"}},select:function(b,c){for(var h=c.item.nextAll(),k,l,p=a.wV,n=c.item.data("key");0<p.length&&(l=p.pop(),k=a.u.Ye(l[0]),a.u.Cp(f(l),null,!0,k,!0,!0),n!==k););h.remove();c.item.remove();a.Sg.ojMenu("refresh")}});this.lj.ojButton({label:this.oV.v("hierMenuBtnLabel"),display:"icons",icons:{start:"oj-fwk-icon oj-hier-icon"},menu:"#"+b,disabled:!0,
chroming:"half"})};b.be.prototype.zia=function(a,b,e){if(this.lj){var g=this.Sg.find("li").length,h=f(document.createElement("li")),k=f(document.createElement("a"));k.attr("href","#");h.append(k);if(0<g){for(var l=0;l<g;l++)0<l&&k.append(f(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));k.append(f(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"))}g=f(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
g.text(e);k.append(g);h.data("key",a);this.Sg.append(h);this.Sg.ojMenu("refresh");this.VH(this.u.Pd("hierarchyMenuDisplayThresholdLevel"));this.lj.ojButton("option","disabled",!1);this.rB.css("visibility","visible");this.zo.attr("tabindex","0");this.JA.text(b)}};b.be.prototype.Ru=function(a){this.u.Pd("hierarchyMenuDisplayThresholdLevel")!==a.hierarchyMenuDisplayThresholdLevel&&this.VH(a.hierarchyMenuDisplayThresholdLevel)};b.be.prototype.VH=function(a){var b=this.Sg.find("li").length;-1===a||b<a?
(this.uI.css("visibility","hidden"),this.lj.css("visibility","hidden")):b>=a&&(this.uI.css("visibility","visible"),this.lj.css("visibility","visible"))};b.be.prototype.Vta=function(){if(this.lj){var a=this.Sg.find("li").last().remove();this.Sg.ojMenu("refresh");this.VH(this.u.Pd("hierarchyMenuDisplayThresholdLevel"));0===this.Sg.children("li").length?(this.lj.ojButton("option","disabled",!0),this.rB.css("visibility","hidden"),this.zo.attr("tabindex","-1"),this.JA.text(this.u.iJ())):this.JA.text(a.children("a").text())}};
b.be.prototype.Uy=function(a,b){a.removeClass(this.u.Lp);b.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden")};var a=function(a,c){function e(){}b.b.la(e,a,"");f.extend(e.prototype,c);return e}(b.sR,{bm:"oj-navigationlist-item-content",UW:"oj-expanded",KW:"oj-collapsed",Lp:"oj-navigationlist-current",bv:"oj-navigationlist-divider",Gfa:"oj-navigationlist-category-divider",ZL:"oj-navigationlist-item-label",KY:"oj-navigationlist-icon-only",RY:"oj-navigationlist-item-icon",
YCa:"oj-navigationlist-horizontal",fZ:"oj-navigationlist-has-icons",gZ:"oj-navigationlist-item-no-icon",$ga:"oj-navigationlist-item-title",hZ:"oj-navigationlist",iZ:"oj-navigationlist-touch",aha:"oj-navigationlist-listview-container",lE:"IsTitleAttrDueToTruncation",EL:"oj-navigationlist-app-level",jM:"oj-navigationlist-page-level",eM:"navigationListItemIconHastitle",bha:"oj-navigationlist-nofollow-link",tU:function(a){a=this.gJ(a);return a.is("a")?f.trim(a.text()):f.trim(a.find("."+this.$ga).text())},
gJ:function(a){var b=a.children("."+this.bm);0===b.length&&(b=a.children("."+this.vf()).children("."+this.bm),0===b.length&&(b=a.children("."+this.vf()).children(":not(."+this.Po()+"):not(."+this.Gl()+")")));return b},jh:function(){return"rtl"===this.W.Ic()},Nr:function(){this.Fc.IK();a.p.Nr.apply(this,arguments)},Rba:function(a,b){this.Fc.iX(a,b)},bV:function(b){this.Fc.jX(b);a.p.bV.apply(this,arguments)},F7:function(a){var b=a.children();a.removeAttr("style").removeClass(this.fZ).removeAttr("aria-hidden");
for(a=0;a<b.length;a++){var e=b[a],e=f(e);if(e.hasClass(this.bv))e.remove();else{var g=this.gJ(e);g.removeClass(this.bm).removeClass(this.gZ).removeAttr("aria-haspopup");var h=g.children("."+this.RY);h&&0<h.length&&(h.removeAttr("role"),h.removeAttr("aria-label"),this.gua(h));e.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");h=this.uf(e);h.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed");
g.children("."+this.ZL).contents().unwrap();h.data(this.lE)&&h.removeAttr("title");h=e.children("ul");0<h.length?(this.Fc.Uy(e,g,h),this.F7(h)):this.Fc.Uy(e,g)}}},LD:function(b){return b.hasClass(this.bm)||b.hasClass(this.Po())||b.hasClass(this.Gl())?!1:a.p.LD.apply(this,arguments)},hX:function(a){return a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)&&!a.hasClass(this.bm)||a.hasClass("oj-component")},Osa:function(a){var b={drillMode:"none"!==a.drillMode?"collapsible":"none",
selection:null!==a.selection?[a.selection]:[],item:a.item,data:a.data,selectionMode:"single"};b.element=this.Lq;b.item.focusable=function(a){return f(a.data).is("li")?!f(a.data).hasClass("oj-disabled"):!f(a.parentElement).hasClass("oj-disabled")};return b=f.extend(f.extend({},a),b)},iJ:function(){return this.W.options.rootLabel?this.W.options.rootLabel:this.W.v("defaultRootLabel")},Xy:function(){var b=this.W.element.attr("aria-labelledby");b?(this.element.attr("aria-labelledby",b),this.W.element.removeAttr("aria-labelledby")):
this.element.attr("aria-label",this.iJ());a.p.Xy.apply(this,arguments)},wL:function(){this.element.attr("aria-labelledby")&&(this.W.element.attr("aria-labelledby",this.element.attr("aria-labelledby")),this.element.removeAttr("aria-labelledby"));this.element.attr("aria-label")&&this.element.removeAttr("aria-label");a.p.wL.apply(this,arguments)},Yo:function(d){var c=this,e=d.W.element;e.addClass(this.hZ);b.A.Zd()&&e.addClass(this.iZ);this.Lq=e.children("ul:first");0===this.Lq.length&&(this.Lq=f(document.createElement("ul")),
e.append(this.Lq));e=f(document.createElement("div"));e.addClass(this.aha);this.Lq.wrap(e);d=this.Osa(d);a.p.Yo.call(this,d);this.element.removeClass("oj-component-initnode");this.W._on(this.W.element,{mouseup:function(a){c.DN(a)},"click .oj-navigationlist-previous-link":function(){c.IN()},"keydown .oj-navigationlist-previous-link":function(a){a.keyCode===f.ui.keyCode.ENTER&&c.IN()},"keydown .oj-navigationlist-element":function(a){a.keyCode!==f.ui.keyCode.ESCAPE||a.isDefaultPrevented()||c.IN()},"mouseenter a.oj-navigationlist-item-content":function(a){a=
f(a.currentTarget);var b=a.find("."+c.ZL);b[0].offsetWidth<b[0].scrollWidth&&!a.attr("title")&&(a.attr("title",b.text().trim()),a.data(c.lE,"true"))},"mouseleave a.oj-navigationlist-item-content":function(a){var b=f(a.currentTarget);b.data(c.lE)&&(b.removeData(c.lE),b.removeAttr("title"));c.DN(a)}})},IN:function(){this.Fc.NW()},R4:function(){var a=this.W.options.drillMode,c=this.W.options.edge;this.Fc="sliding"===a?new b.be(this,this.W.element,this.W):"collapsible"===a?new b.Yl(this,this.W.element,
this.W):"none"===a&&"top"===c?new b.xh(this,this.W.element,this.W):new b.qe(this,this.W.element,this.W);this.Fc.Init(this.options);this.k8(this.W.options.navigationLevel)},k8:function(a){"none"===this.W.options.drillMode&&("application"===a?(this.W.element.addClass(this.EL),this.W.element.removeClass(this.jM)):"page"===a&&(this.W.element.addClass(this.jM),this.W.element.removeClass(this.EL)))},DN:function(a){a=this.Ok(f(a.target));null!=a&&this.Oy(a,"oj-active",!1)},xx:function(){this.R4();a.p.xx.apply(this,
arguments)},KD:function(b){a.p.KD.apply(this,arguments);var c=this.Ok(f(b.target));c&&!c.hasClass("oj-disabled")&&this.Oy(c,"oj-active",!0)},My:function(b){this.DN(b);a.p.My.apply(this,arguments)},aX:function(){return"oj-navigationlist-listview"},UK:function(){return"oj-navigationlist-element"},Li:function(){return"oj-navigationlist-item"},dn:function(){return"oj-navigationlist-focused-element"},ug:function(){return"oj-navigationlist-item-element"},Gl:function(){return"oj-navigationlist-collapse-icon"},
Po:function(){return"oj-navigationlist-expand-icon"},oU:function(a){return"oj-navigationlist-depth-"+a},vf:function(){return"oj-navigationlist-group-item"},eh:function(){return"oj-navigationlist-group"},Ox:function(){return"oj-navigationlist-collapsible-transition"},du:function(){return this.Ox()},EK:function(a,b,e){this.Fc.cv(a,b,e)},CK:function(a,b,e){this.Fc.$u(a,b,e)},fs:function(a,b,e){return this.Fc.fs(a,b,e)},fv:function(a){return this.Fc.fv(a)},eg:function(a){return this.Fc.eg(a)},js:function(a,
b){this.Fc.js(a,b)},$K:function(b){var c=this.Ok(f(b.target));null!=c&&0!==c.length&&(this.$i(c)?b.preventDefault():(this.Ye(c[0]),this.LD(f(b.target))||(c=this.gJ(c).attr("href"),c&&"#"!==c&&0===b.button&&(b.shiftKey||b.ctrlKey)||(a.p.$K.apply(this,arguments),b.preventDefault()))))},JD:function(a){var b,e,g;if(this.J)if(b=a.keyCode,e=this.J.elem,g=this.J.key,b===f.ui.keyCode.HOME||b===f.ui.keyCode.END){var h;h=b===f.ui.keyCode.HOME?this.element.find("."+this.bm+":visible").first().closest("."+this.ug()):
this.element.find("."+this.bm+":visible").last().closest("."+this.ug());this.ID(h,a);a.preventDefault()}else h=this.fX(a),b=this.Fc.eX(a,b,e,g),!0!==h&&!0!==b||a.preventDefault()},UD:function(b,c,e){var f=this.J.elem;this.Wi(f[0])&&!this.ZQ(f)&&this.FO(b,f)&&(a.p.UD.apply(this,arguments),this.NQ(f))},Oy:function(a,b,e){var g;a=f(a);"oj-selected"===b&&this.Fc.xL(this.uf(a),e);g=a.children("."+this.vf());0<g.length&&(a=f(g[0]));e?a.addClass(b):a.removeClass(b);a.hasClass("oj-selected")||a.hasClass("oj-hover")||
a.hasClass("oj-active")||a.hasClass("oj-disabled")?a.removeClass("oj-default"):a.addClass("oj-default")},Wi:function(a){return!f(a).hasClass("oj-disabled")&&this.Fc.Wi(f(a))},aj:function(a,b,e){return"ready"!==a?this.W._trigger(a,b,e):!0},Mj:function(a,b,e){if("selection"===a){var f=e._context,h=f&&f.pk&&f.pk.items;h&&(f.pk.item=h,f.pk.items=void 0);b&&0<b.length?this.W.option(a,b[0],e):this.W.option(a,null,e)}else this.W.option(a,b,e);this.options[a]=b},OX:function(a){return null!=a.data||null!=
a.drillMode||null!=a.item||null!=a.display||null!=a.edge},Ru:function(b,c){var e={lW:[]},g;void 0!==b.hierarchyMenuDisplayThresholdLevel&&this.Fc.Ru(b);void 0!==b.navigationLevel&&this.k8(b.navigationLevel);if(void 0!==b.selection)if(g=b.selection){var h=this.Pd("selection");h&&0!==h.length&&h[0]===g?delete b.selection:(h=this.re(g))&&this.Wi(h)?this.FO(null,f(h))?(b.selection=[g],this.NQ(f(h))):(delete b.selection,e.lW.push("selection")):(delete b.selection,e.lW.push("selection"))}else b.selection=
[];e.cBa=a.p.Ru.call(this,b,c);void 0!==g&&(b.selection=g);return e},Pd:function(a){var b=this.W.option(a);return"selection"===a?b?[b]:[]:null===b?this.options[a]:b},gh:function(){return b.Components.gh(this.W.element)},Wy:function(b,c){!b.hasClass("oj-disabled")&&this.Wi(b[0])&&(!this.ZQ(b)&&this.FO(c,b)?(a.p.Wy.apply(this,arguments),this.NQ(b)):this.ID(b,c))},FO:function(a,b){var e=this.Ye(b[0]);return this.aj("beforeSelect",a,{item:b,key:e})},NQ:function(a){return this.W.element.hasClass(this.bha)?
!1:(a=this.gJ(a).attr("href"))&&"#"!==a?(window.location.href=a,!0):!1},ZQ:function(a){var b;b=this.Pd("selection");a=this.Ye(a[0]);return-1<b.indexOf(a)?!0:!1},Ava:function(a,b){a.attr("title")||a.attr("title",b)},gua:function(a){a.data(this.eM)?a.removeData(this.eM):a.removeAttr("title")},ou:function(b,c){var e=f(b);if(e.hasClass(this.Gfa))e.removeClass(this.ug()),e.removeClass(this.dn()),e.removeClass(this.Li()),e.removeAttr("aria-selected"),e.children().remove(),e.attr("role","separator");else{var g=
this.Gl(),h=this.Po(),k=this.RY,l=e.children("."+this.vf()),p;0<l.length?(l.addClass(this.Li()),p=l.children(":not(."+h+"):not(."+g+")"),h=l.children("."+h),0===h.length&&(h=l.children("."+g)),h.attr("role","presentation"),h.removeAttr("aria-labelledby"),e.hasClass("oj-disabled")&&l.addClass("oj-disabled")):p=e.children().first();p.addClass(this.bm);g=p.wrapInner('\x3cspan class\x3d"'+this.ZL+'"\x3e\x3c/span\x3e').find("."+k);0<g.length?(g.insertBefore(g.parent()),g.attr("title")&&g.data(this.eM,
g.attr("title")),"icons"===this.W.options.display&&(this.W.element.addClass(this.KY),k=this.tU(e),g.attr("aria-label",k),g.attr("role","img"),this.Ava(g,k)),e.closest("ul").addClass(this.fZ)):p.addClass(this.gZ);e.hasClass("oj-disabled")?this.uf(e).attr("aria-disabled","true"):0<l.length?l.addClass("oj-default"):e.addClass("oj-default");this.Fc.hL(e,p);a.p.ou.apply(this,arguments)}},getNodeBySubId:function(a){var b;if(null===a)return this.element?this.element[0]:null;b=a.subId;return"oj-navigationlist-item"===
b?(a=a.key,a=this.re(a)):"oj-navigationlist-previous-link"===b?this.Fc.zo?this.Fc.zo[0]:null:"oj-navigationlist-hierarchical-button"===b?this.Fc.lj?this.Fc.lj[0]:null:"oj-navigationlist-hierarchical-menu"===b?this.Fc.Sg?this.Fc.Sg[0]:null:null},getSubIdByNode:function(a){if(this.Fc.zo&&this.Fc.zo[0]===a)return{subId:"oj-navigationlist-previous-link"};if(this.Fc.lj&&this.Fc.lj[0]===a)return{subId:"oj-navigationlist-hierarchical-button"};if(this.Fc.Sg&&this.Fc.Sg[0]===a)return{subId:"oj-navigationlist-hierarchical-menu"};
a=this.Ok(a);return null!=a&&0<a.length&&(a=this.Ye(a[0]),null!=a)?{subId:"oj-navigationlist-item",key:a}:null},getContextByNode:function(b){return(b=a.p.getContextByNode.call(this,b))&&"oj-listview-item"==b.subId?(b.subId="oj-navigationlist-item",b):null},refresh:function(){this.x7();this.R4();a.p.refresh.apply(this,arguments)},x7:function(){this.W.element.removeClass(this.KY);this.W.element.removeClass(this.EL);this.W.element.removeClass(this.jM);this.F7(this.element);this.Fc.ag()},destroy:function(){this.x7();
a.p.destroy.apply(this,arguments);this.Lq.unwrap();this.Lq.is(":empty")&&this.Lq.remove();this.W.element.removeClass(this.hZ+" "+this.iZ);this.W._off(this.element,"click");this.W._off(this.element,"focus");this.W._off(this.element,"blur");this.W._off(this.element,"mouseover");this.W._off(this.element,"mousein");this.W._off(this.element,"mouseout");this.W._off(this.element,"keydown")}});(function(){b.Ja("oj.ojNavigationList",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,drillMode:"none",
edge:"start",hierarchyMenuDisplayThresholdLevel:0,rootLabel:null,selection:null,expanded:"auto",data:null,display:"all",navigationLevel:"page",item:{renderer:null,selectable:!0},beforeSelect:null,beforeCollapse:null,beforeCurrentItem:null,collapse:null,beforeExpand:null,expand:null,optionChange:null},_ComponentCreate:function(){this._super();this.Ma()},Eg:function(){this._super();this.mh.xx()},Hg:function(a,b,e){this.mh.Dca(a,b,e)},Ma:function(){for(var b in this.options)this.G9(b,this.options[b]);
this.vI(this.options.drillMode,this.options.display,this.options.edge);this.mh=new a;b={W:this};b=f.extend(this.options,b);this.mh.Yo(b)},getNodeBySubId:function(a){return this.mh.getNodeBySubId(a)},getSubIdByNode:function(a){return this.mh.getSubIdByNode(a)},getContextByNode:function(a){return this.mh.getContextByNode(a)},expand:function(a,b){this.mh.XT(a,b,!0,!0)},collapse:function(a,b){this.mh.k$(a,b,!0)},getExpanded:function(){return this.mh.getExpanded()},vI:function(a,b,e){if("none"!==a){if("icons"===
b)throw"Icon only navigation list should have drillMode set to 'none'.";if("top"===e)throw"Horizontal navigation list should have drillMode set to 'none'.";}},G9:function(a,b){var e=!0;"drillMode"===a?e="none"===b||"collapsible"===b||"sliding"===b:"display"===a?e="all"===b||"icons"===b:"edge"===a&&(e="top"===b||"start"===b);if(!e)throw"Invalid value: "+b+" for key: "+a;},_setOption:function(a,b){this.G9(a,b);switch(a){case "drillMode":this.vI(b,this.options.display,this.options.edge);break;case "display":this.vI(this.options.drillMode,
b,this.options.edge);break;case "edge":this.vI(this.options.drillMode,this.options.display,b)}return this._super(a,b)},_setOptions:function(a,b){var e=this.mh.Ru(a,b),f;for(f in a)0>e.lW.indexOf(f)&&this._setOption(f,a[f],b);e.cBa&&this.mh.refresh();return this},Tj:function(){this.mh.Eca()},On:function(){},refresh:function(){this._super();this.mh.refresh()},whenReady:function(){return this.mh.whenReady()},_destroy:function(){this.mh.destroy();this._super();delete this.mh}});b.Components.tp({ojNavigationList:{hierarchyMenuDisplayThresholdLevel:b.Components.Hi(function(){return b.Hf.gn("navigationList").hierarchyMenuDisplayThresholdLevel})}})})()});