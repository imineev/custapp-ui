/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","ojs/ojmodel"],function(b,f){b.Za=function(){};o_("KnockoutUtils",b.Za,b);b.Za.RU="oj._internalObj";b.Za.Ui="oj._underUpdate";b.Za.Dx="oj.collectionUpdating";b.Za.qW="oj.collectionSubscription";b.Za.AW="oj.collectionUpdatingFunc";b.Za.map=function(a,d,c){function e(c){return function(d){g[b.Za.Ui]||a.set(c,d)}}var g,h,k,l;if(a instanceof b.j){h=Array(a.hf());g=c?f.observableArray(h):h;b.Za.T8(g,a);if(c)for(h=0;h<a.Cc.length;h++)k=a.Cc[h],g()[k]=b.Za.map(a.Un(k,null,
!0,!1),d);else for(h=0;h<a.Cc.length;h++)k=a.Cc[h],g[k]=b.Za.map(a.Un(k,null,!0,!1),d);h=function(c){var d;try{if(!g[b.Za.Ui]){g[b.Za.Dx]=!0;for(d=0;d<c.length;d++){var e=c[d].index,f=b.Za.sc(c[d].value),h=c[d].status;"added"===h?e>=a.length-1?a.add(f):a.add(f,{at:e}):"deleted"===h&&a.Kt(f,e)}a.comparator&&(g[b.Za.Ui]=!0,g.sort(function(c,d){return b.Za.Y_(c,d,a.comparator,a,this)}),g[b.Za.Ui]=!1)}}catch(k){throw k;}finally{g[b.Za.Dx]=!1}};c&&g.subscribe&&(g[b.Za.AW]=h,g[b.Za.qW]=g.subscribe(h,null,
"arrayChange"));c=function(a,c,d){var e;try{!g[b.Za.Dx]&&c instanceof b.j&&(g[b.Za.Ui]=!0,e=d.index,g.splice(e,1))}catch(f){throw f;}finally{g[b.Za.Ui]=!1}};h=function(a,c,e){var f,h;try{if(!g[b.Za.Dx]&&c instanceof b.j&&(g[b.Za.Ui]=!0,f=c.Lra(a),void 0!==f&&-1<f))if(h=b.Za.map(a,d),e.fillIn){for(var k=Array.isArray(g)?g.length:g().length;k<f;k++)g.splice(k,0,b.Za.map(c.Un(k,null,!0,!1),d));g.splice(f,1,h)}else g.splice(f,0,h)}catch(l){throw l;}finally{g[b.Za.Ui]=!1}};k=function(a){try{!g[b.Za.Dx]&&
a instanceof b.j&&(g[b.Za.Ui]=!0,f.isObservable(g)?(g[b.Za.qW]&&g[b.Za.qW].dispose(),g.removeAll(),g[b.Za.AW]&&g.subscribe(g[b.Za.AW],null,"arrayChange")):g=[])}catch(c){throw c;}finally{g[b.Za.Ui]=!1}};l=function(c){try{!g[b.Za.Dx]&&c instanceof b.j&&(g[b.Za.Ui]=!0,g.sort(function(d,e){return b.Za.Y_(d,e,a.comparator,c,this)}))}catch(d){throw d;}finally{g[b.Za.Ui]=!1}};a.Kn(b.ba.N.ADD,h,void 0,void 0,!0);a.Kn(b.ba.N.REMOVE,c,void 0,void 0,!0);a.Kn(b.ba.N.RESET,k,void 0,void 0,!0);a.Kn(b.ba.N.SORT,
l,void 0,void 0,!0)}else{if(void 0===a)return;g={};c=a.attributes;h=null;for(h in c)c.hasOwnProperty(h)&&(k=f.observable(a.get(h)),g[h]=k,l=e(h),l.MDa=h,k.subscribe&&k.subscribe(l));c=function(a){var c,d;try{for(d in g[b.Za.Ui]=!0,c=a.GT(),c)if(c.hasOwnProperty(d))g[d](a.get(d))}catch(e){throw e;}finally{g[b.Za.Ui]=!1}};a.Kn(b.ba.N.CHANGE,c,void 0,void 0,!0);b.Za.T8(g,a);d&&d(g)}return g};o_("KnockoutUtils.map",b.Za.map,b);b.Za.sc=function(a){return a instanceof b.t?a:a.hasOwnProperty(b.Za.RU)?a[b.Za.RU]:
a};b.Za.Y_=function(a,d,c,e,f){return b.j.SX(b.Za.sc(a),b.Za.sc(d),c,e,f)};b.Za.T8=function(a,d){Object.defineProperty(a,b.Za.RU,{value:d,enumerable:!1})}});