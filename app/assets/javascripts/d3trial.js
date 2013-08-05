var width = 960,
    height = 500;

var projection = d3.geo.mercator()
    .center([0, 5 ])
    // .scale(900)
    .rotate([-180,0]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);


// load and display the World
d3.json("/assets/worldcountries.geo.json", function(topology) {
    svg.selectAll("path")
      .data([topology.features[0]])
    .enter()
      .append("path")
      .attr("d", path)
      .attr('fill', 'white')
      .attr('stroke', 'black')
      .attr('stroke-width', .5);
});