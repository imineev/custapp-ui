/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojpagingtabledatasource","ojs/ojarraydatagriddatasource"],function(b){b.Ff=function(b,a){this.yu=b;this.hp=a};o_("PagingHeaderSet",b.Ff,b);b.Ff.prototype.getData=function(b,a){return this.yu.getData(b+this.hp,a)};b.b.g("PagingHeaderSet.prototype.getData",{getData:b.Ff.prototype.getData});b.Ff.prototype.getMetadata=function(b,a){return this.yu.getMetadata(b+this.hp,a)};b.b.g("PagingHeaderSet.prototype.getMetadata",{getMetadata:b.Ff.prototype.getMetadata});b.Ff.prototype.getCount=
function(){return this.yu.getCount()};b.b.g("PagingHeaderSet.prototype.getCount",{getCount:b.Ff.prototype.getCount});b.Ff.prototype.getLevelCount=function(){return this.yu.getLevelCount()};b.b.g("PagingHeaderSet.prototype.getLevelCount",{getLevelCount:b.Ff.prototype.getLevelCount});b.Ff.prototype.getExtent=function(b,a){return this.yu.getExtent(b+this.hp,a)};b.b.g("PagingHeaderSet.prototype.getExtent",{getExtent:b.Ff.prototype.getExtent});b.Ff.prototype.getDepth=function(b,a){return this.yu.getDepth(b+
this.hp,a)};b.b.g("PagingHeaderSet.prototype.getDepth",{getDepth:b.Ff.prototype.getDepth});b.Ff.prototype.paa=function(){return this.yu};b.b.g("PagingHeaderSet.prototype.getHeaderSet",{paa:b.Ff.prototype.paa});b.Ff.prototype.yC=function(){return this.hp};b.b.g("PagingHeaderSet.prototype.getStartIndex",{yC:b.Ff.prototype.yC});b.bb=function(f){if(!(f instanceof b.Dp))throw new b.aa("Not a datagridatasource","Not a datagridatasource",b.aa.vc.ERROR);this.gd=f;this.fa=0;this.Init()};o_("PagingDataGridDataSource",
b.bb,b);b.b.la(b.bb,b.Dp,"oj.PagingDataGridDataSource");b.bb.prototype.Init=function(){b.bb.p.Init.call(this);this.DB()};b.b.g("PagingDataGridDataSource.prototype.Init",{Init:b.bb.prototype.Init});b.bb.prototype.DB=function(){this.gd.on("change",this.Ioa.bind(this))};b.bb.prototype.getPage=function(){return this.Hd};b.b.g("PagingDataGridDataSource.prototype.getPage",{getPage:b.bb.prototype.getPage});b.bb.prototype.setPage=function(f,a){a=a||{};f=parseInt(f,10);try{b.bb.p.handleEvent.call(this,b.Bc.N.BEFOREPAGE,
{page:f,previousPage:this.Hd})}catch(d){return Promise.reject(null)}this.cb=null!=a.pageSize?a.pageSize:this.cb;a.startIndex=f*this.cb;var c=this.Hd;this.Hd=f;this.fa=a.startIndex;var e=this;return new Promise(function(b,d){e.Lf(a).then(function(){b(null)},function(){e.Hd=c;e.fa=e.Hd*e.cb;d(null)})})};b.b.g("PagingDataGridDataSource.prototype.setPage",{setPage:b.bb.prototype.setPage});b.bb.prototype.Lf=function(b){this.qo=!0;this.fa=b.startIndex;var a=this;return new Promise(function(b){a.handleEvent("change",
{operation:"sync",pageSize:a.cb});b(void 0)})};b.bb.prototype.fetch=function(b){this.cb=b.pageSize+b.startIndex;b.startIndex=0;return this.Lf(b)};b.b.g("PagingDataGridDataSource.prototype.fetch",{fetch:b.bb.prototype.fetch});b.bb.prototype.getStartItemIndex=function(){return this.fa};b.b.g("PagingDataGridDataSource.prototype.getStartItemIndex",{getStartItemIndex:b.bb.prototype.getStartItemIndex});b.bb.prototype.getEndItemIndex=function(){return this.$j};b.b.g("PagingDataGridDataSource.prototype.getEndItemIndex",
{getEndItemIndex:b.bb.prototype.getEndItemIndex});b.bb.prototype.getPageCount=function(){var b=this.totalSize();return-1==b?-1:Math.ceil(b/this.cb)};b.b.g("PagingDataGridDataSource.prototype.getPageCount",{getPageCount:b.bb.prototype.getPageCount});b.bb.prototype.Ioa=function(f){switch(f.operation){case "refresh":this.fa=0;this.handleEvent("change",{operation:"sync",pageSize:this.cb});this.handleEvent(b.wa.N.REFRESH,null);break;case "reset":this.handleEvent(b.wa.N.RESET,null);break;case "insert":this.handleEvent(b.wa.N.ADD,
{index:f.indexes.row});break;case "delete":this.handleEvent(b.wa.N.REMOVE,null);break;case "update":f.indexes.row=0<=f.indexes.row-this.fa?f.indexes.row-this.fa:-1;this.handleEvent("change",f);break;default:this.handleEvent("change",f),this.handleEvent(b.wa.N.SYNC,null)}};b.bb.prototype.getCount=function(b){var a=this.gd.getCount(b);return"row"===b&&0<=a?this.fa+this.cb<a?this.cb:a-this.fa:a};b.b.g("PagingDataGridDataSource.prototype.getCount",{getCount:b.bb.prototype.getCount});b.bb.prototype.getCountPrecision=
function(b){return this.gd.getCountPrecision(b)};b.b.g("PagingDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:b.bb.prototype.getCountPrecision});b.bb.prototype.fetchHeaders=function(f,a,d){var c;null==this.qo?(c=new b.Ke(0,0,f.axis,null),null!=a&&a.success&&a.success.call(d.success,c,f)):"row"===f.axis?(f.start+=this.fa,f.start+f.count>this.fa+this.cb&&(f.count=this.cb-f.start),this.$w={callbacks:a,callbackObjects:d},this.gd.fetchHeaders(f,{success:this.oQ.bind(this),error:this.Mpa.bind(this)},
d)):this.gd.fetchHeaders(f,a,d)};b.b.g("PagingDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:b.bb.prototype.fetchHeaders});b.bb.prototype.oQ=function(f,a){var d,c,e;a.start-=this.fa;a.count+=1;d=new b.Ff(f,this.fa);c=this.$w.callbacks.success;e=this.$w.callbackObjects.success;this.$w=null;c.call(e,d,a)};b.bb.prototype.Mpa=function(b){var a,d;a=this.$w.callbacks.error;d=this.$w.callbackObjects.error;this.$w=null;a.call(d,b)};b.bb.prototype.fetchCells=function(f,a,d){var c;if(null==this.qo)c=
new b.ph(0,0,0,0,null),null!=a&&a.success&&a.success.call(d.success,c,f);else{for(c=0;c<f.length;c+=1)"row"===f[c].axis&&(f[c].start+=this.fa,f[c].start+f[c].count>this.fa+this.cb&&(f[c].count=this.cb-f[c].start));this.Yw={callbacks:a,callbackObjects:d};this.gd.fetchCells(f,{success:this.Hoa.bind(this),error:this.Goa.bind(this)},d)}};b.b.g("PagingDataGridDataSource.prototype.fetchCells",{fetchCells:b.bb.prototype.fetchCells});b.bb.prototype.Hoa=function(f,a){var d,c,e;for(d=0;d<a.length;d+=1)"row"===
a[d].axis&&(a[d].start-=this.fa,a[d].count+=1);d=new b.Jj(f,this.fa);c=this.Yw.callbacks.success;e=this.Yw.callbackObjects.success;this.Yw=null;this.$j=this.fa+f.getCount("row")-1;this.handleEvent("sync",{data:Array(f.getCount("row")),startIndex:this.fa});c.call(e,d,a)};b.bb.prototype.Goa=function(b){var a,d;a=this.Yw.callbacks.error;d=this.Yw.callbackObjects.error;this.Yw=null;a.call(d,b)};b.bb.prototype.keys=function(b){return this.gd.keys({column:b.column,row:b.row+this.fa})};b.b.g("PagingDataGridDataSource.prototype.keys",
{keys:b.bb.prototype.keys});b.bb.prototype.indexes=function(b){b=this.gd.indexes(b);-1!=b.row&&(b.row-=this.fa);return b};b.b.g("PagingDataGridDataSource.prototype.indexes",{indexes:b.bb.prototype.indexes});b.bb.prototype.getCapability=function(b){return this.gd.getCapability(b)};b.b.g("PagingDataGridDataSource.prototype.getCapability",{getCapability:b.bb.prototype.getCapability});b.bb.prototype.size=function(){var b;if(null==this.qo)return-1;b=this.gd.getCount("row");return this.gd.getCount("row")>
this.cb?this.cb:b};b.b.g("PagingDataGridDataSource.prototype.size",{size:b.bb.prototype.size});b.bb.prototype.sort=function(b,a,d){this.gd.sort(b,a,d)};b.b.g("PagingDataGridDataSource.prototype.sort",{sort:b.bb.prototype.sort});b.bb.prototype.totalSize=function(){return null==this.qo?-1:this.gd.getCount("row")};b.b.g("PagingDataGridDataSource.prototype.totalSize",{totalSize:b.bb.prototype.totalSize});b.bb.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("PagingDataGridDataSource.prototype.totalSizeConfidence",
{totalSizeConfidence:b.bb.prototype.totalSizeConfidence});b.bb.prototype.moveOK=function(b,a,d){return this.gd.moveOK(b,a,d)};b.b.g("PagingDataGridDataSource.prototype.moveOK",{moveOK:b.bb.prototype.moveOK});b.bb.prototype.move=function(b,a,d,c,e){this.gd.move(b,a,d,c,e)};b.b.g("PagingDataGridDataSource.prototype.move",{move:b.bb.prototype.move});b.Jj=function(b,a){this.zJ=b;this.hp=a};o_("PagingCellSet",b.Jj,b);b.Jj.prototype.getData=function(b){return this.zJ.getData({column:b.column,row:b.row+
this.hp})};b.b.g("PagingCellSet.prototype.getData",{getData:b.Jj.prototype.getData});b.Jj.prototype.getMetadata=function(b){return this.zJ.getMetadata({column:b.column,row:b.row+this.hp})};b.b.g("PagingCellSet.prototype.getMetadata",{getMetadata:b.Jj.prototype.getMetadata});b.Jj.prototype.getCount=function(b){return this.zJ.getCount(b)};b.b.g("PagingCellSet.prototype.getCount",{getCount:b.Jj.prototype.getCount});b.Jj.prototype.Z$=function(){return this.zJ};b.b.g("PagingCellSet.prototype.getCellSet",
{Z$:b.Jj.prototype.Z$});b.Jj.prototype.yC=function(){return this.hp};b.b.g("PagingCellSet.prototype.getStartIndex",{yC:b.Jj.prototype.yC})});