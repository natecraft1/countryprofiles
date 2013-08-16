$(document).ready(function() {

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  $('#new_post').on("submit", function() {
    $.ajax({
      method: "POST",
      url: "/posts",
      data: { post: { content: $("#post_content").val() } }

    });
    return false;
  });
  
  $("#login").on("click", function() {
    $("#login").remove();
  });

  var width = $(window).width(),
      height = ($(window).height()),
      centered,
      found,
      foundname;
     

  var svg = d3.select("#container")
      .append("svg")
      .attr('width', width)
      .attr('height', height);
  
  $.ajax({
    url: '/worldcountries.geo.json',
    dataType: 'json',
    success: function(data) {
      window.data = data;
      floatCountries();
      $("#myInput").keyup(inputKeyup);
    }
  });

  function floatCountries() {
    var scale = d3.scale.linear()
            .domain([0, data.features.length])
            .range([0, 1]);

      var colorscale = d3.scale.category20();

      var spread = height / data.features.length;

      var feat = data.features;

      svg.selectAll(".countries")
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
        .duration(function(d,i) { return Math.random() * 330000 + 20000})
        .each(slide);

        function slide() {
          var textitem = d3.select(this);
          (function repeat() {
          textitem = textitem.transition()
                .attr("dx", width + 250)
                .transition()
                .duration(function(d,i) { return Math.random() * 330000 + 20000})
                .attr("dx", -340)
                .each("start", repeat);
          })();
        }
      clickCunts();
  }
function clickCunts() {
  d3.selectAll(".countries").on("click", function() {
    result = d3.select(this).text();
    console.log(result);
        
      // $('select').find("option[value=" + result + "]")​​​​​​​​​​​​​​​​​.attr('selected', true ); 
      // $("#post_country").val(result).attr('selected', 'selected');
      $("select option").filter(function() {
        return $(this).text() == result;
      }).prop("selected", true);

    console.log(result.toLowerCase());
    drawCunt(result);
    history.pushState({}, '', result.toLowerCase());
    //ajax call to set the correct path
    // $.ajax({
    //   method: 'GET',
    //   url: result.toLowerCase()
    // });
    return false;
  });
}

  function drawCunt(country) {
    var features = data.features;

    for (i=0; i < features.length; i++) {

      
      if (features[i].properties.name == country && $("." + features[i].properties.name.toLowerCase()).length == 0)
        { 
            // $(".innertopbar").html('');
            // $(".innertopbar").append("<input type='text' class='createpost' id='cat" + country + "' placeholder='Category'></input>" +
            //   "<input type='text' class='createpost' id='post" + country + "' placeholder='Text'></input>")
          // d3.selectAll(".countries").transition().duration(1500).attr("dx", -3000);

          $("#categoryandtext").addClass("topright");
          $("#categoryandtext").removeClass("hidden");
          $(".active").remove();
          found = features[i].geometry; 
          foundname =  features[i].properties.name.toLowerCase();
          
          makecunts(found);
        }
    }
  }

function inputKeyup() {

  var result = $('#myInput').val();  
  drawCunt(result);
  return false;
}
  
  

    function makecunts(country) {
      console.log("called");
      console.log(country);
      
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
        .data([country])
        .enter()
        .append("path")
        .attr("class", foundname)
        .attr("d", path);
    
      enlarge(found)
      
      
        function enlarge(d) {

          var x, y, k;

            var centroid = path.centroid(d);
            console.log(centroid);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
        
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
});

  // d3.select(window)
  //             .on("resize", sizeChange);

      

      // function sizeChange() {
      //   console.log("called");
      //       d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
      //       $("svg").height($("#container").width()*0.618);
      //   }







