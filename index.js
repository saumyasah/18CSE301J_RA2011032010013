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
var text=svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){return d;})
    .attr("y",function(d,i){return svgheight-d-2;})
    .attr("x",function(d,i){return barwidth*i})
    .attr("fill","#A64C38")
