define(["indicator_base","highstock"],function(a){var b={},c={};return{init:function(){!function(a,d,e){function f(a,d){{var f=this;f.chart}for(var g in c)if(c[g]&&c[g].options&&c[g].options.data&&c[g].options.data.length>0&&b[g].parentSeriesID==f.options.id){var h=f.options.data,i=b[g].period,j=e.findDataUpdatedDataPoint(h,a);if(j>=1){var k=e.extractPrice(h,j)/e.extractPrice(h,j-i);k=e.toFixed(k,5),d?c[g].options.data.length<h.length?c[g].addPoint([h[j].x||h[j][0],k]):c[g].data[j].update([h[j].x||h[j][0],k]):c[g].addPoint([h[j].x||h[j][0],k])}}}a&&!a.Series.prototype.addROCR&&(a.Series.prototype.addROCR=function(a){var f=this.options.id;a=d.extend({period:14,stroke:"red",strokeWidth:2,dashStyle:"line",levels:[],parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(h&&h.length>0){for(var i=[],j=0;j<h.length;j++)if(j>=a.period){var k=e.extractPrice(h,j)/e.extractPrice(h,j-a.period);isFinite(k)&&!isNaN(k)&&i.push([h[j].x||h[j][0],e.toFixed(k,5)])}else i.push([h[j].x||h[j][0],0]);var l=this.chart;b[g]=a,l.addAxis({id:"rocr"+g,title:{text:"ROCR ("+a.period+")",align:"high",offset:0,rotation:0,y:10,x:55},lineWidth:2,plotLines:a.levels},!1,!1,!1),e.recalculate(l);var m=this;c[g]=l.addSeries({id:g,name:"ROCR ("+a.period+")",data:i,type:"line",dataGrouping:m.options.dataGrouping,yAxis:"rocr"+g,opposite:m.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle},!1,!1),d(c[g]).data({isIndicator:!0,indicatorID:"rocr",parentSeriesID:a.parentSeriesID,period:a.period}),l.redraw()}return g},a.Series.prototype.removeROCR=function(a){var d=this.chart;b[a]=null,d.get(a).remove(!1),d.get("rocr"+a).remove(!1),c[a]=null,e.recalculate(d),d.redraw()},a.Series.prototype.preRemovalCheckROCR=function(a){return{isMainIndicator:!0,period:b[a]?b[a].period:void 0,isValidUniqueID:null!=b[a]}},a.wrap(a.Series.prototype,"addPoint",function(a,c,d,g,h){a.call(this,c,d,g,h),e.checkCurrentSeriesHasIndicator(b,this.options.id)&&f.call(this,c)}),a.wrap(a.Point.prototype,"update",function(a,c,d,g){a.call(this,c,d,g),e.checkCurrentSeriesHasIndicator(b,this.series.options.id)&&f.call(this.series,c,!0)}))}(Highcharts,jQuery,a)}}});