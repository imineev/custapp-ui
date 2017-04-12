/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(b,f){b.Ja("oj._ojRadioCheckbox",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:null,checked:null,type:null},label:function(){void 0===this.ac&&(this.ac=this.kP());return this.ac},refresh:function(){this._super();this.Ma()},refreshDisabled:function(){this.$R()},widget:function(){return this.gea},bf:function(a,b){var c;this._super(a,b);"checked"in b||(this.QU=!0,c=!!this.element.prop("checked"),
this.option("checked",c,{_context:{lb:!0}}));if("boolean"!==typeof this.options.checked)throw Error("checked option must be a boolean");"disabled"in b||(c=!!this.element.prop("disabled"),this.option("disabled",c,{_context:{lb:!0}}));if("boolean"!==typeof this.options.disabled)throw Error("disabled option must be a boolean");"type"in b||this.option("type",this.element.prop("type"),{_context:{lb:!0}})},_ComponentCreate:function(){this._super();var a=this.options.type;"checkbox"==a?(this.gea=this.element.addClass("oj-checkbox oj-component"),
this.ac=this.kP(),this.ac.addClass("oj-checkbox-label")):"radio"==a&&(this.gea=this.element.addClass("oj-radio oj-component"),this.ac=this.kP(),this.ac.addClass("oj-radio-label"));this.Xl=this.Wma();this._focusable(this.element);this.fz(this.Xl);this.fz(this.ac);f.each(this.ac,function(){f(this.childNodes).wrapAll("\x3cspan class\x3d'oj-radiocheckbox-label-text'\x3e\x3c/span\x3e");var a=document.createElement("span");a.setAttribute("class","oj-radiocheckbox-icon");this.appendChild(a)});this.Ma()},
uz:function(a){this.KB=a.attr("class")},Mv:function(){this.KB?this.element.attr("class",this.KB):this.element.removeAttr("class")},Ma:function(){this.$R();this.QU||this.LB(this.options.checked);this.element.toggleClass("oj-selected",this.options.checked);this.ac.toggleClass("oj-selected",this.options.checked)},LB:function(a){this.element.prop("checked",!!a)},$R:function(){this.cf()?(this.element.prop("disabled",!0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"),this.ac.removeClass("oj-enabled").addClass("oj-disabled"),
this.Xl&&this.Xl.removeClass("oj-enabled").addClass("oj-disabled")):(this.element.prop("disabled",!1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"),this.ac.addClass("oj-enabled").removeClass("oj-disabled"),this.Xl&&this.Xl.addClass("oj-enabled").removeClass("oj-disabled"))},_setOption:function(a,b){this._superApply(arguments);"disabled"===a&&(b=!!b,this.$R(b));"checked"===a&&(this.LB(b),this.element.toggleClass("oj-selected",b),this.ac.toggleClass("oj-selected",b),
this.Xl&&this.Xl.toggleClass("oj-selected",b))},kP:function(){var a=this.element.closest("label"),b="label[for\x3d'"+this.element.prop("id")+"']";return a.add(f(b))},Wma:function(){var a;if(this.ac&&(a=this.ac.parent())&&(a.hasClass("oj-choice-row")||a.hasClass("oj-choice-row-inline")))return a;b.r.warn("The radioset/checkboxset's input and label dom should be wrapped in a dom node with class 'oj-choice-row' or 'oj-choice-row-inline'");return null},getNodeBySubId:function(a){var b=this._super(a);
b||(a=a.subId,"oj-radiocheckbox-input"===a&&(b=this.element[0]),"oj-radiocheckbox-label"===a&&(b=this.label()[0]));return b||null},_destroy:function(){var a=this._super();this.BE(this.Xl);this.BE(this.ac);var b=this.options.type;"checkbox"==b?this.ac.removeClass("oj-enabled oj-disabled oj-selected oj-checkbox-label"):"radio"==b&&this.ac.removeClass("oj-enabled oj-disabled oj-selected oj-radio-label");this.Xl&&this.Xl.removeClass("oj-enabled oj-disabled oj-selected");f.each(this.ac,function(){this.removeChild(this.getElementsByClassName("oj-radiocheckbox-icon")[0]);
var a=this.getElementsByClassName("oj-radiocheckbox-label-text");void 0!==a&&f(a[0].childNodes[0]).unwrap()});return a}})});