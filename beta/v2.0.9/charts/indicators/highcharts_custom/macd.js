define(["indicator_base","highstock"],function(a){function b(b,c,d,e,f,g){var j=b[c].x||b[c][0],k=null,l={data:b,maData:h[f],index:c,period:d.fastPeriod,maType:d.fastMaType,type:e,key:"f"+f,isPointUpdate:g,appliedTo:d.appliedTo,isIndicatorData:!1},m=a.calculateMAValue(l),n={data:b,maData:i[f],index:c,period:d.slowPeriod,maType:d.slowMaType,type:e,key:"s"+f,isPointUpdate:g,appliedTo:d.appliedTo,isIndicatorData:!1},o=a.calculateMAValue(n);return c>=d.slowPeriod&&(k=m-o),g?(h[f][c]=[j,m],i[f][c]=[j,o]):(h[f].push([j,m]),i[f].push([j,o])),k}function c(b,c,d){var e=null,f=a.getIndicatorData(b,d),g=a.getIndicatorData(c,d);return f&&g&&(e=f-g),e}var d={},e={},f={},g={},h={},i={};return{init:function(){!function(a,j,k){function l(a,c){{var f=this;f.chart}for(var g in e)if(e[g]&&e[g].options&&e[g].options.data&&e[g].options.data.length>0&&d[g].parentSeriesID==f.options.id){var h=f.options.data,i=d[g],j=k.findIndexInDataForTime(h,a);if(j>=1){var l=b(h,j,i,this.options.type,g,c);c?e[g].data[j].update({y:k.toFixed(l,4)}):e[g].addPoint([h[j].x||h[j][0],k.toFixed(l,4)],!0,!0,!1)}}}function m(a,b){{var c=this;c.chart}for(var g in f)if(f[g]&&f[g].options&&f[g].options.data&&f[g].options.data.length>0&&d[g].parentSeriesID==c.options.id){var h=c.options.data,i=d[g],j=k.findIndexInDataForTime(h,a),l=f[g].options.data,m=g.replace("s","m"),n=e[m].options.data;if(j>=1){var o={data:n,maData:l,index:j,period:i.signalPeriod+i.slowPeriod-1,maType:i.signalMaType,type:this.options.type,key:g,isPointUpdate:b,appliedTo:i.appliedTo,isIndicatorData:!0},p=k.calculateMAValue(o);p&&!isNaN(p)&&(b?f[g].data[j].update({y:k.toFixed(p,4)}):f[g].addPoint([h[j].x||h[j][0],k.toFixed(p,4)],!0,!0,!1))}}}function n(a,b){{var h=this;h.chart}for(var i in g)if(g[i]&&g[i].options&&g[i].options.data&&g[i].options.data.length>0&&d[i].parentSeriesID==h.options.id){var j=h.options.data,l=i.replace("h","m"),m=e[l].options.data,n=i.replace("h","s"),o=f[n].options.data,p=(d[i],k.findIndexInDataForTime(j,a));if(p>=1){var q=c(m,o,p);b?g[i].data[p].update({y:k.toFixed(q,4)}):g[i].addPoint([j[p].x||j[p][0],k.toFixed(q,4)],!0,!0,!1)}}}a&&!a.Series.prototype.addMACD&&(a.Series.prototype.addMACD=function(a){var l=this.options.id;a=j.extend({fastPeriod:12,slowPeriod:26,signalPeriod:9,fastMaType:"EMA",slowMaType:"EMA",signalMaType:"EMA",macdStroke:"red",signalLineStroke:"#A52A2A",macdHstgrmColor:"#A52A2A",strokeWidth:1,dashStyle:"line",appliedTo:k.CLOSE,parentSeriesID:l},a);var m=(new Date).getTime(),n="m-"+m,o="s-"+m,p="h-"+m,q=this.options.data||[];if(q&&q.length>0){var r=[];h[n]=[],i[n]=[];for(var s=0;s<q.length;s++){var t=b(q,s,a,this.options.type,n,!1);r.push([q[s].x||q[s][0],k.toFixed(t,4)])}for(var u=[],s=0;s<r.length;s++){var v={data:r,maData:u,index:s,period:a.signalPeriod+a.slowPeriod-1,maType:a.signalMaType,type:this.options.type,key:o,isPointUpdate:!1,appliedTo:a.appliedTo,isIndicatorData:!0},w=k.calculateMAValue(v);u.push([r[s].x||r[s][0],k.toFixed(w,4)])}for(var x=[],s=0;s<r.length;s++){var y=c(r,u,s);x.push([r[s].x||r[s][0],k.toFixed(y,4)])}var z=this.chart;d[n]=a,d[o]=a,d[p]=a,z.addAxis({id:"macd"+n,title:{text:"MACD",align:"high",offset:0,rotation:0,y:10,x:35},lineWidth:2},!1,!1,!1),k.recalculate(z);var A=this;g[p]=z.addSeries({id:p,name:"MACD (HISTOGRAM, "+k.appliedPriceString(a.appliedTo)+")",data:x,type:"column",yAxis:"macd"+n,dataGrouping:A.options.dataGrouping,opposite:A.options.opposite,color:a.macdHstgrmColor,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:A.options.compare},!1,!1);var A=this;e[n]=z.addSeries({id:n,name:"MACD ("+a.fastPeriod+","+k.appliedPriceString(a.appliedTo)+")",data:r,type:"line",yAxis:"macd"+n,dataGrouping:A.options.dataGrouping,opposite:A.options.opposite,color:a.macdStroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:A.options.compare},!1,!1);var A=this;f[o]=z.addSeries({id:o,name:"MACD (SIGNAL,"+a.signalPeriod+","+k.appliedPriceString(a.appliedTo)+")",data:u,type:"line",yAxis:"macd"+n,dataGrouping:A.options.dataGrouping,opposite:A.options.opposite,color:a.signalLineStroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:A.options.compare},!1,!1),j(g[p]).data({onChartIndicator:!0,indicatorID:"macd",isIndicator:!0,parentSeriesID:a.parentSeriesID,period:a.slowPeriod}),j(e[n]).data({onChartIndicator:!0,indicatorID:"macd",isIndicator:!0,parentSeriesID:a.parentSeriesID,period:a.fastPeriod}),j(f[o]).data({onChartIndicator:!0,indicatorID:"macd",isIndicator:!0,parentSeriesID:a.parentSeriesID,period:a.signalPeriod}),z.redraw()}},a.Series.prototype.removeMACD=function(a){var b=this.chart,c=a.replace("m-","").replace("s-","").replace("h-","");["m","s","h"].forEach(function(a){var h=a+"-"+c;d[h]=null,b.get(h).remove(),e[h]=null,f[h]=null,g[h]=null}),b.get("macd"+a).remove(!1),k.recalculate(b),b.redraw()},a.Series.prototype.preRemovalCheckMACD=function(a){var b=void 0;return d[a]&&(b="MACD ("+d[a].fastPeriod+","+d[a].slowPeriod+","+d[a].signalPeriod+","+k.appliedPriceString(d[a].appliedTo)+")"),{isMainIndicator:0===a.indexOf("m-"),fastPeriod:d[a]?d[a].fastPeriod:void 0,slowPeriod:d[a]?d[a].slowPeriod:void 0,signalPeriod:d[a]?d[a].signalPeriod:void 0,fastMaType:d[a]?d[a].fastMaType:void 0,slowMaType:d[a]?d[a].slowMaType:void 0,signalMaType:d[a]?d[a].signalMaType:void 0,isValidUniqueID:null!=d[a],indicatorName:b}},a.wrap(a.Series.prototype,"addPoint",function(a,b,c,e,f){a.call(this,b,c,e,f),k.checkCurrentSeriesHasIndicator(d,this.options.id)&&(l.call(this,b[0]),m.call(this,b[0]),n.call(this,b[0]))}),a.wrap(a.Point.prototype,"update",function(a,b,c,e){a.call(this,b,c,e),k.checkCurrentSeriesHasIndicator(d,this.series.options.id)&&(l.call(this.series,this.x,!0),m.call(this.series,this.x,!0),n.call(this.series,this.x,!0))}))}(Highcharts,jQuery,a)}}});