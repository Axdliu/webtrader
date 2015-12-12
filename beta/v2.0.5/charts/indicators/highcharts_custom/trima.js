define(["indicator_base","highstock"],function(a){var b={},c={};return{init:function(){!function(a,d,e){function f(a,d){{var f=this;f.chart}for(var g in c)if(c[g]&&c[g].options&&c[g].options.data&&c[g].options.data.length>0&&b[g].parentSeriesID==f.options.id){var h=f.options.data,i=c[g].options.data,j=b[g].period+1,k=Math.round(j/2),l=e.findDataUpdatedDataPoint(h,a);if(l>=1){var m=0;m=e.isOHLCorCandlestick(this.options.type)?e.extractPriceForAppliedTO(b[g].appliedTo,h,l):h[l].y?h[l].y:h[l][1];var n=e.toFixed(((i[l-1].y||i[l-1][1])*(k-1)+m)/k,4);d?c[g].options.data.length<h.length?c[g].addPoint([h[l].x||h[l][0],n]):c[g].data[l].update([h[l].x||h[l][0],n]):c[g].addPoint([h[l].x||h[l][0],n])}}}a&&!a.Series.prototype.addTRIMA&&(a.Series.prototype.addTRIMA=function(a){var f=this.options.id;a=d.extend({period:21,stroke:"red",strokeWidth:2,dashStyle:"line",levels:[],appliedTo:e.CLOSE,parentSeriesID:f},a);var g="_"+(new Date).getTime(),h=this.options.data||[];if(!(a.period>=h.length)){if(h&&h.length>0){for(var i=[],j=0,k=a.period+1,l=Math.round(k/2),m=0;l>m;m++)j+=e.isOHLCorCandlestick(this.options.type)?e.extractPriceForAppliedTO(a.appliedTo,h,m):e.extractPrice(h,m),i.push(m==l-1?[h[l-1].x?h[l-1].x:h[l-1][0],j/l]:[h[m].x?h[m].x:h[m][0],null]);for(var m=l;m<h.length;m++){var n=0;n=e.isOHLCorCandlestick(this.options.type)?e.extractPriceForAppliedTO(a.appliedTo,h,m):h[m].y?h[m].y:h[m][1];var o=(i[m-1][1]*(l-1)+n)/l;i.push([h[m].x||h[m][0],e.toFixed(o,4)])}var p=this.chart;b[g]=a;var q=this;c[g]=p.addSeries({id:g,name:"TRIMA ("+a.period+", "+e.appliedPriceString(a.appliedTo)+")",data:i,type:"line",dataGrouping:q.options.dataGrouping,opposite:q.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:q.options.compare},!1,!1),d(c[g]).data({onChartIndicator:!0,indicatorID:"trima",isIndicator:!0,parentSeriesID:a.parentSeriesID,period:a.period}),p.redraw()}return g}},a.Series.prototype.removeTRIMA=function(a){var d=this.chart;b[a]=null,d.get(a).remove(),c[a]=null},a.Series.prototype.preRemovalCheckTRIMA=function(a){return{isMainIndicator:!0,period:b[a]?b[a].period:void 0,appliedTo:b[a]?b[a].appliedTo:void 0,isValidUniqueID:null!=b[a]}},a.wrap(a.Series.prototype,"addPoint",function(a,c,d,g,h){a.call(this,c,d,g,h),e.checkCurrentSeriesHasIndicator(b,this.options.id)&&f.call(this,c)}),a.wrap(a.Point.prototype,"update",function(a,c,d,g){a.call(this,c,d,g),e.checkCurrentSeriesHasIndicator(b,this.series.options.id)&&f.call(this.series,c,!0)}))}(Highcharts,jQuery,a)}}});