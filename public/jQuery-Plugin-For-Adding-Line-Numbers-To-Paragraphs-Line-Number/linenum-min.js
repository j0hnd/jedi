"use strict";!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n(jQuery)}(function(n){n.fn.extend({linenum:function(e){var i,t,f,e,o=this,a=100,l="10%",d="90%",p="0";if(this.children().length>0)throw"$.linenum - Element can only contain text (Limitation)";if(e&&"undefined"!=typeof e.maxlines){if(isNaN(e.maxlines))throw"$.linenum - options.maxlines is invalid.";a=Number(e.maxlines)}if(e&&"undefined"!=typeof e.format){if("string"!=typeof e.format||null==e.format.match(/^.*0.*$/g))throw"$.linenum - options.format is invalid.";p=e.format}e&&"undefined"!=typeof e.lnwidth&&(l=e.lnwidth),e&&"undefined"!=typeof e.cwidth&&(d=e.cwidth),f=n("<span>"),f.append(o.html()).css({"float":"left",width:d}),t=n("<span>"),t.css({"float":"left",overflow:"hidden",width:l});for(var m=a;m>0;m--)t.append(p.replace("0",a-m+1)+"<br>");return i=o.clone().empty(),i.append(t).append(f),o.empty(),o.replaceWith(i),t.height(f.height()),{newElem:i,linenumSpan:t,contentsSpan:f}}})});