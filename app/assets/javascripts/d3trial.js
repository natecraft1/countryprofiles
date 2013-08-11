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
          height = ($(window).height()),
          centered;
      // $('#target').addClass('hidden');
      var projection = d3.geo.mercator()
        .translate([width/2, height/2])
        .center([0, 0])
        .scale(196);


      var svg = d3.select("#container")
          .append("svg")
          .attr('width', width)
          .attr('height', height);

      var g = svg.append("g").attr("stroke-width", 1.5);

      var path = d3.geo.path()
          .projection(projection);
      
      //make the country
      g.append("g")
        .attr("class", "innerg")
        .selectAll("country")
        .data([found])
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path);
    
      clicked(found);


        function clicked(d) {

          var x, y, k;

          if (d && centered !== d) {
            var centroid = path.centroid(d);
            console.log(centroid);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
          } else {
            x = width / 2;
            y = height / 2;
            console.log(x);
                        console.log(y);

            k = 1;
            centered = null;
          }
          console.log(x);

          g.selectAll("path")
              .classed("active", centered && function(d) { return d === centered; });

          g.transition()
              .duration(500)
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
              .style("stroke-width", 1.5 / k + "px");
        }


      // projection = d3.geo.mercator()
      //   .translate([width/2, height/2])
      //   .center(projection.invert(path.centroid(found)))
      //   .scale(196);

      console.log(projection);
       // projection.center = projection.invert(path.centroid(found));
        // var pixtolatlon = projection.invert(path.centroid(found));
        // console.log(projection.);
      console.log(path.centroid(found));

        // projection.center(pixtolatlon);

//       getCentroid(cunt);
//       function getCentroid(cunt) {
//       console.log(cunt);
//     // get the DOM element from a D3 selection
//     // you could also use "this" inside .each()
     
//         // use the native SVG interface to get the bounding box
//         bbox = cunt.getBBox();
//     // return the center of the bounding box
//       return [bbox.x + bbox.width/2, bbox.y + bbox.height/2];
// }
     
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







