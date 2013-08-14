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
  
  $.ajax({
    url: '/worldcountries.geo.json',
    dataType: 'json',
    success: function(data) {

      var scale = d3.scale.linear()
            .domain([0, data.features.length])
            .range([0, 1]);

      var colorscale = d3.scale.category20();

      var spread = height / data.features.length;

      var feat = data.features;

      svg.selectAll("countries")
        .data(feat)
        .enter()
        .append("text")
        .attr("class", "countries")
        .text(function(d) {return d.properties.name})
        .attr("dy", function(d,i) {
          return i * spread;
        }).attr("dx", -340)
        .style('fill', function(d, i) { return colorscale(i); })
        .attr('font-size', 22)
        .transition()
        .duration(function(d,i) { return Math.random()*330000 + 20000})
        .each(slide);

        function slide() {
          var textitem = d3.select(this);
          (function repeat() {
          textitem = textitem.transition()
                .attr("dx", width + 250)
                .transition()
                .duration(function(d,i) { return Math.random()*330000 + 20000})
                .attr("dx", -340)
                .each("start", repeat);
          })();
        }

        d3.selectAll("countries")
          .on("click", function() {})
    }
  });

  

  // var force = d3.layout.force()
  //   .nodes("text")
  //   .size([100, 200])
  //   .start();


$("#myInput").keyup(function() {
  var result = $('#myInput').val();  
  console.log("hey");


// load and display the World
  $.ajax({
    url: '/worldcountries.geo.json',
    dataType: 'json',
    complete: function(data) {
    var features = JSON.parse(data.responseText).features;
      // write code to parse the JSON portion of the response and save it in a variable called topology
    //    console.log(topology);
      
    for (i=0; i < features.length; i++) {

      
      if (features[i].properties.name == result && $("." + features[i].properties.name.toLowerCase()).length == 0)
        { 
          $(".active").remove();
          var found = features[i].geometry; 
          


        
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
        .attr("class", features[i].properties.name.toLowerCase())
        .attr("d", path);
    
      clicked(found);

  features[i].properties.name.toLowerCase()
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







