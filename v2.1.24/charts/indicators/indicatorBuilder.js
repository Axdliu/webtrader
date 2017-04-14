define(["exports","babel-runtime/regenerator","jquery","lodash","../../common/rivetsExtra","jquery-ui","color-picker","ddslick"],function(a,b,c,d,e){"use strict";function f(a){return a&&a.__esModule?a:{"default":a}}function g(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(i){return void c(i)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}Object.defineProperty(a,"__esModule",{value:!0}),a.open=void 0;var h=f(b),i=f(c),j=f(d),k=f(e),l=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a},m=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=null,o=function(a){a.dialog("destroy").remove()},p=function(){var a=g(h["default"].mark(function b(a,c){var d,e,f,g,p,q;return h["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return require(["css!charts/indicators/indicatorBuilder.css"]),b.next=3,require(["text!charts/indicators/indicatorBuilder.html"]);case 3:return d=b.sent,e=m(d,1),f=e[0],g={id:c.id,fields:c.fields.map(function(a){return l({},a,{is_valid:!0})}),levels:c.levels,formula:c.formula,description:c.description,cdl_indicator:c.cdl_indicator,dash_styles:["Solid","ShortDash","ShortDot","ShortDashDot","ShortDashDotDot","Dot","Dash","LongDash","DashDot","LongDashDot","LongDashDotDot"].map(function(a){return{name:a,url:"images/dashstyle/"+a+".svg"}}),update_value:function(a,b){a.value=b},level:{dialog:{marginTop:"0px",visible:!1,add:function(){var a=g.levels.fields,b={};a.forEach(function(a){return b[a.key]=a.value}),b.label={text:b.value},g.levels.values.push(b),g.level.dialog.visible=!1},cancel:function(){g.level.dialog.visible=!1}},remove:function(a){var b=g.levels.values,c=b.indexOf(a);-1!==c&&b.splice(c,1)},add:function(a){var b=(i["default"](a.target),f.find(".levels-tr").next().height()-3);if(g.level.dialog.marginTop=-1*b+"px",g.level.dialog.visible=!g.level.dialog.visible,g.level.dialog.visible){var c=i["default"](".indicator-builder");c.animate({scrollTop:c.prop("scrollHeight")},700)}}}},c.editable&&c.current_options&&(j["default"].forEach(c.current_options,function(a,b){var c=j["default"].find(g.fields,{key:b});c&&(c.value=a)}),c.current_options.levels&&(g.levels.values=j["default"].cloneDeep(c.current_options.levels))),f=i["default"](f),p=k["default"].bind(f[0],g),q={title:c.long_display_name,autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"indicator-builder-ui-dialog",buttons:[{text:"OK",click:function(){var b={},d=!0;return c.cdl_indicator?(b.cdlIndicatorCode=g.id,b.onSeriesID=a.series[0].options.id):(g.levels&&(b.levels=JSON.parse(JSON.stringify(g.levels.values))),g.fields.forEach(function(a){return d=a.is_valid&&d,"plotcolor"!==a.type?void(b[a.key]=a.value):(b[a.key]=[],void(b.levels&&b.levels.length>0&&b[a.key].push({color:a.value,from:j["default"].minBy(b.levels,"value").value,to:j["default"].maxBy(b.levels,"value").value})))})),"fractal"===g.id&&(b.onSeriesID=a.series[0].options.id),d?(n&&n(),a.series[0].addIndicator(g.id,b),void o(f)):void i["default"].growl.error({message:"Invalid parameter(s)!".i18n()})}},{text:"Cancel",click:function(){return o(f)}}],icons:{close:"custom-icon-close",minimize:"custom-icon-minimize",maximize:"custom-icon-maximize"}},f.dialog(q).dialogExtend(j["default"].extend(q,{maximizable:!1,minimizable:!1,collapsable:!1})),b.abrupt("return",f);case 13:case"end":return b.stop()}},b,void 0)}));return function(){return a.apply(this,arguments)}}(),q=a.open=function(){var a=g(h["default"].mark(function b(a,c,d){var e;return h["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return n=d||n,e=i["default"](c).highcharts(),b.next=4,p(e,a);case 4:i["default"](".indicator-builder").dialog("open"),i["default"](".indicator-builder").animate({scrollTop:0},800);case 6:case"end":return b.stop()}},b,void 0)}));return function(){return a.apply(this,arguments)}}();a["default"]={open:q}});