$("#target").keyup(function() {
  var result = $('#myInput').val();  
  console.log(result);


// load and display the World
  d3.json("/assets/worldcountries.geo.json", function(topology) {
      
    for (i=0; i < topology.features.length; i++)
    {
      if (topology.features[i].properties.name == result)
        { 
          var found = topology.features[i].geometry; 
          makecunts();}
    }
    function makecunts() {
      // $('#target').addClass('hidden');
      var projection = d3.geo.mercator();

      var svg = d3.select("#container")
          .append("svg")
          .append("g");

      var path = d3.geo.path()
          .projection(projection);
      console.log("called");
      svg.selectAll("country")
        .data([found])
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path);
      // projection.transition()
      // .duration(1500)
      // .scale(500);
    }
//       .transition()
//       .duration(1500)
//       .delay(1000).attr("transform", "scale(" + k + ")translate(" + x + width/2 + "," + y + ")")
// ;

  });
  return false;
});
  // d3.select(window)
  //             .on("resize", sizeChange);

      

      // function sizeChange() {
      //   console.log("called");
      //       d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
      //       $("svg").height($("#container").width()*0.618);
      //   }







