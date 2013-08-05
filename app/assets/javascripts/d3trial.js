d3.select(window)
        .on("resize", sizeChange);

var projection = d3.geo.mercator();

var svg = d3.select("#container")
    .append("svg")
    .append("g");

var path = d3.geo.path()
    .projection(projection);




// load and display the World
d3.json("/assets/worldcountries.geo.json", function(topology) {
    // var zoom = d3.behavior.zoom()
    //   .translate([0, 0])
    //   .scale(1)
    //   .scaleExtent([1, 8])
    //   .on("zoom", zoomed);
    svg.selectAll("country")
      .data([topology.features[0]])
    .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path);
});
function sizeChange() {
      d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
      $("svg").height($("#container").width()*0.618);
  }

// function zoomed() {
//     features.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
//     features.select(".state-border").style("stroke-width", 1.5 / d3.event.scale + "px");
//     features.select(".county-border").style("stroke-width", .5 / d3.event.scale + "px");
// }

