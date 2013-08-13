$(document).ready(function() {

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  $("#login").on("click", function() {
    $("#login").remove();
  });

  var width = $(window).width(),
      height = ($(window).height()),
      centered;
     

  var svg = d3.select("#container")
      .append("svg")
      .attr('width', width)
      .attr('height', height);



$("#myInput").keyup(function() {
  var result = $('#myInput').val();  


// load and display the World
  $.ajax({
    url: '/assets/worldcountries.geo.json',
    dataType: 'json',
    success: function(data) {
    console.log("sup");
      // write code to parse the JSON portion of the response and save it in a variable called topology
    //    console.log(topology);
      
    for (i=0; i < data.features.length; i++) {

      
      if (data.features[i].properties.name == result && $("." + data.features[i].properties.name.toLowerCase()).length == 0)
        { 
          $(".active").remove();
          var found = data.features[i].geometry; 
          


        
          makecunts();
        }
    }

    function makecunts() {
      
      var g = svg.append("g").attr("stroke-width", 1.5);
      var projection = d3.geo.mercator()
        .translate([width/2, height/2])
        .center([0, 0])
        .scale(196);

      var path = d3.geo.path()
          .projection(projection);
      
      
      //make the country
      g.append("g")
        .attr("class", "innerg")
        .selectAll("country")
        .data([found])
        .enter()
        .append("path")
        .attr("class", data.features[i].properties.name.toLowerCase())
        .attr("d", path);
    
      clicked(found);

data.features[i].properties.name.toLowerCase()
        function clicked(d) {

          var x, y, k;

          // if (d && centered !== d) {
            var centroid = path.centroid(d);
            console.log(centroid);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
          // } else {
            // x = width / 2;
            // y = height / 2;
            // console.log(x);
            //             console.log(y);

            // k = 1;
            // centered = null;
          // }
          console.log(x);

          g.selectAll("path")
              .classed("active", centered && function(d) { return d === centered; });

          g.transition()
              .duration(1500)
              .attr("transform", "translate(" + width / 2 + "," + height / 3 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
              .style("stroke-width", 1.5 / k + "px");
          svg.selectAll('.active').transition().delay(300).duration(1500).style('fill', 'lightblue')
        }
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







