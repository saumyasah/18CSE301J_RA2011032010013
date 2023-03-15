var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var svgwidth=500, svgheight=300, barpadding=5;
var barwidth=(svgwidth/dataset.length);
var svg= d3.select('svg')
    .attr("width",svgwidth)
    .attr("height",svgheight);
var barchart=svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y",function(d){return svgheight-d})
    .attr("height",function(d){return d;})
    .attr("width", barwidth-barpadding)
    .attr("transform",function(d,i){var translate=[barwidth*i,0]; return "translate("+translate+")";});
