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
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.wa=function(f){if(!(f instanceof b.V))throw Error(b.V.Kc._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+b.V.Kc._ERR_DATA_INVALID_TYPE_DETAIL);this.gd=f;this.fa=0;this.$j=-1;this.Init()};o_("PagingTableDataSource",b.wa,b);b.b.la(b.wa,b.V,"oj.PagingTableDataSource");b.wa.prototype.Init=function(){b.wa.p.Init.call(this)};b.b.g("PagingTableDataSource.prototype.Init",{Init:b.wa.prototype.Init});b.wa.prototype.getWrappedDataSource=function(){return this.gd};
b.b.g("PagingTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.wa.prototype.getWrappedDataSource});b.wa.prototype.getPage=function(){return"loadMore"==this.NF?0:this.sG()};b.b.g("PagingTableDataSource.prototype.getPage",{getPage:b.wa.prototype.getPage});b.wa.prototype.setPage=function(f,a){a=a||{};f=parseInt(f,10);try{b.wa.p.handleEvent.call(this,b.Bc.N.BEFOREPAGE,{page:f,previousPage:this.sG()})}catch(d){return Promise.reject(null)}var c=this.sG();this.cb=null!=a.pageSize?a.pageSize:
this.cb;a.pageSize=this.cb;a.startIndex=f*this.cb;this.fa=null==a.startIndex?this.fa:a.startIndex;this.NF="page";var e=this;return new Promise(function(d,f){0<e.cb?e.gd.fetch(a).then(function(a){a.startIndex=0;e.pI(a.data.length);b.wa.p.handleEvent.call(e,b.Bc.N.PAGE,{page:e.sG(),previousPage:c});d(null)},function(){e.fa=c*e.cb;f(null)}):d(null)})};b.b.g("PagingTableDataSource.prototype.setPage",{setPage:b.wa.prototype.setPage});b.wa.prototype.getStartItemIndex=function(){return"loadMore"==this.NF?
0:this.fa};b.b.g("PagingTableDataSource.prototype.getStartItemIndex",{getStartItemIndex:b.wa.prototype.getStartItemIndex});b.wa.prototype.getEndItemIndex=function(){return this.$j};b.b.g("PagingTableDataSource.prototype.getEndItemIndex",{getEndItemIndex:b.wa.prototype.getEndItemIndex});b.wa.prototype.getPageCount=function(){var b=this.totalSize();return-1==b?-1:Math.ceil(b/this.cb)};b.b.g("PagingTableDataSource.prototype.getPageCount",{getPageCount:b.wa.prototype.getPageCount});b.wa.prototype.at=
function(b,a){return this.gd.at(b,a)};b.b.g("PagingTableDataSource.prototype.at",{at:b.wa.prototype.at});b.wa.prototype.fetch=function(b){b=b||{};if(null==b.startIndex)return this.setPage(this.getPage());this.NF="loadMore";this.fa=null==b.startIndex?this.fa:b.startIndex;var a=null!=b.pageSize?b.pageSize:this.cb;b.pageSize=a;b.startIndex=this.fa;var d=this;return new Promise(function(c,e){0<a?d.gd.fetch(b).then(function(a){d.pI(a.data.length);c(a)},function(a){e(a)}):c(null)})};b.b.g("PagingTableDataSource.prototype.fetch",
{fetch:b.wa.prototype.fetch});b.wa.prototype.get=function(b,a){return this.gd.get(b,a)};b.b.g("PagingTableDataSource.prototype.get",{get:b.wa.prototype.get});b.wa.prototype.getCapability=function(b){return this.gd.getCapability(b)};b.b.g("PagingTableDataSource.prototype.getCapability",{getCapability:b.wa.prototype.getCapability});b.wa.prototype.on=function(f,a){var d=this,c=this.gd;if(f==b.V.N.SYNC){var e=function(b){d.Upa(b,a)};c.on(f,e);return e}if(f==b.V.N.ADD||f==b.V.N.REMOVE||f==b.V.N.CHANGE)return e=
function(b){d.Lpa(b,a)},c.on(f,e),e;if(f==b.V.N.REFRESH||f==b.V.N.RESET)return e=function(b){d.fa=0;a(b)},c.on(f,e),e;if(f==b.Bc.N.PAGE||f==b.Bc.N.BEFOREPAGE||f==b.Bc.N.PAGECOUNT)b.wa.p.on.call(this,f,a);else c.on(f,a);return a};b.b.g("PagingTableDataSource.prototype.on",{on:b.wa.prototype.on});b.wa.prototype.off=function(f,a){return f==b.Bc.N.PAGE||f==b.Bc.N.PAGECOUNT?(b.wa.p.off.call(this,f,a),a):this.gd.off(f,a)};b.b.g("PagingTableDataSource.prototype.off",{off:b.wa.prototype.off});b.wa.prototype.sort=
function(b){return this.gd.sort(b)};b.b.g("PagingTableDataSource.prototype.sort",{sort:b.wa.prototype.sort});b.wa.prototype.totalSize=function(){return this.gd.totalSize()};b.b.g("PagingTableDataSource.prototype.totalSize",{totalSize:b.wa.prototype.totalSize});b.wa.prototype.totalSizeConfidence=function(){return this.gd.totalSizeConfidence()};b.b.g("PagingTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.wa.prototype.totalSizeConfidence});b.wa.prototype.sG=function(){return 0<
this.cb?Math.floor(this.fa/this.cb):0};b.wa.prototype.Lpa=function(b,a){var d=[],c;for(c=0;c<b.indexes.length;c++){var e=b.indexes[c];void 0!==e&&(e-=this.fa,(0>e||e>=this.fa+this.cb)&&d.push(c))}if(0<d.length)for(d.sort(function(a,b){return a-b}),c=d.length-1;0<=c;c--)b.data.splice(d[c],1),b.indexes.splice(d[c],1),b.keys.splice(d[c],1);this.pI(b.data.length);b.startIndex=this.fa;a(b)};b.wa.prototype.Upa=function(f,a){f.startIndex!=this.fa&&(this.fa=f.startIndex);this.pI(f.data.length);if("page"==
this.NF){var d={};b.Zc.sg(d,f);d.startIndex=0;a(d)}else a(f)};b.wa.prototype.pI=function(b){var a=this.totalSize();0<a?(this.$j=this.fa+this.cb-1,this.$j=this.$j>a-1?a-1:this.$j):this.$j=0<b?this.fa+b-1:-1};b.wa.N={ADD:"add",REMOVE:"remove",RESET:"reset",SYNC:"sync",REFRESH:"refresh",SORT:"sort"};o_("PagingTableDataSource.EventType",b.wa.N,b);b.Bc=function(){};o_("PagingModel",b.Bc,b);b.Bc.prototype.getPage=function(){};b.b.g("PagingModel.prototype.getPage",{getPage:b.Bc.prototype.getPage});b.Bc.prototype.setPage=
function(){};b.b.g("PagingModel.prototype.setPage",{setPage:b.Bc.prototype.setPage});b.Bc.prototype.getStartItemIndex=function(){};b.b.g("PagingModel.prototype.getStartItemIndex",{getStartItemIndex:b.Bc.prototype.getStartItemIndex});b.Bc.prototype.getEndItemIndex=function(){};b.b.g("PagingModel.prototype.getEndItemIndex",{getEndItemIndex:b.Bc.prototype.getEndItemIndex});b.Bc.prototype.getPageCount=function(){};b.b.g("PagingModel.prototype.getPageCount",{getPageCount:b.Bc.prototype.getPageCount});
b.Bc.prototype.totalSize=function(){};b.b.g("PagingModel.prototype.totalSize",{totalSize:b.Bc.prototype.totalSize});b.Bc.prototype.totalSizeConfidence=function(){};b.b.g("PagingModel.prototype.totalSizeConfidence",{totalSizeConfidence:b.Bc.prototype.totalSizeConfidence});b.Bc.N={BEFOREPAGE:"beforePage",PAGE:"page",PAGECOUNT:"pageCount"};o_("PagingModel.EventType",b.Bc.N,b)});