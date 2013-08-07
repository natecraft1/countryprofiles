$(document).ready(function() {

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

$("#myInput").keyup(function() {
  var result = $('#myInput').val();  



// load and display the World
  $.ajax({
    url: '/assets/worldcountries.geo.json',
    dataType: 'json',
    success: function(data) {
    console.log(data);
      // write code to parse the JSON portion of the response and save it in a variable called topology
    //    console.log(topology);
      
    for (i=0; i < data.features.length; i++) {

    
      if (data.features[i].properties.name == result)
        { 
          $("svg").remove();
          var found = data.features[i].geometry; 
          makecunts();
        }
    }
    function makecunts() {
      var width = $(window).width(),
          height = ($(window).height());
      // $('#target').addClass('hidden');
      var projection = d3.geo.mercator()
        .translate([width/2, height/2])
        .center([0, 0]);;

      var svg = d3.select("#container")
          .append("svg")
          .attr('width', $(window).width())
          .attr('height', $(window).height());

      var path = d3.geo.path()
          .projection(projection);
      console.log("called");
      //make the country
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
    }
  });
  return false;
});
});

  // d3.select(window)
  //             .on("resize", sizeChange);

      

      // function sizeChange() {
      //   console.log("called");
      //       d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
      //       $("svg").height($("#container").width()*0.618);
      //   }







