define(["indicator_base","highstock"],function(a){function b(b,c,d){var e=0;e=a.isOHLCorCandlestick(this.options.type)?a.extractPriceForAppliedTO(b.appliedTo,c,d):a.extractPrice(c,d);for(var f=d,g=1;f>=0&&g<=b.period;f--,g++){var h=0;h=a.isOHLCorCandlestick(this.options.type)?a.extractPriceForAppliedTO(b.appliedTo,c,f):a.extractPrice(c,f),(e>h||0==e)&&(e=h)}return e}var c={},d={};return{init:function(){!function(a,e,f){function g(a,e){{var g=this;g.chart}for(var h in d)if(d[h]&&d[h].options&&d[h].options.data&&d[h].options.data.length>0&&c[h].parentSeriesID==g.options.id){var i=g.options.data,j=f.findDataUpdatedDataPoint(i,a);if(j>=1){var k=b.call(this,c[h],i,j);k=f.toFixed(k,5),e?d[h].options.data.length<i.length?d[h].addPoint([i[j].x||i[j][0],k]):d[h].data[j].update([i[j].x||i[j][0],k]):d[h].addPoint([i[j].x||i[j][0],k])}}}a&&!a.Series.prototype.addMIN&&(a.Series.prototype.addMIN=function(a){var g=this.options.id;a=e.extend({period:21,stroke:"red",strokeWidth:2,dashStyle:"line",levels:[],appliedTo:f.CLOSE,parentSeriesID:g},a);var h="_"+(new Date).getTime(),i=this.options.data||[];if(!(a.period>=i.length)){if(i&&i.length>0){for(var j=[],k=0;k<i.length;k++)if(k>=a.period){var l=b.call(this,a,i,k);j.push([i[k].x||i[k][0],f.toFixed(l,5)])}else j.push([i[k].x||i[k][0],0]);var m=this.chart;c[h]=a;var n=this;d[h]=m.addSeries({id:h,name:"MIN ("+a.period+", "+f.appliedPriceString(a.appliedTo)+")",data:j,type:"line",dataGrouping:n.options.dataGrouping,opposite:n.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:n.options.compare},!1,!1),e(d[h]).data({onChartIndicator:!0,indicatorID:"min",isIndicator:!0,parentSeriesID:a.parentSeriesID,period:a.period}),m.redraw()}return h}},a.Series.prototype.removeMIN=function(a){var b=this.chart;c[a]=null,b.get(a).remove(),d[a]=null},a.Series.prototype.preRemovalCheckMIN=function(a){return{isMainIndicator:!0,period:c[a]?c[a].period:void 0,appliedTo:c[a]?c[a].appliedTo:void 0,isValidUniqueID:null!=c[a]}},a.wrap(a.Series.prototype,"addPoint",function(a,b,d,e,h){a.call(this,b,d,e,h),f.checkCurrentSeriesHasIndicator(c,this.options.id)&&g.call(this,b)}),a.wrap(a.Point.prototype,"update",function(a,b,d,e){a.call(this,b,d,e),f.checkCurrentSeriesHasIndicator(c,this.series.options.id)&&g.call(this.series,b,!0)}))}(Highcharts,jQuery,a)}}});