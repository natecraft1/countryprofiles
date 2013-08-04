var data = [10, 50, 90, 130, 170];
var width = 500;
var height = 1000;

var canvas = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.append('g')
	.attr("transform", "translate(10, 10)");	

var circles = canvas.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr('cx', function(d) {return d;})
	.attr('cy', function(d) {return d;})
	.attr('r', function(d) {return d;})
	.attr('fill', 'blue');

// var widthscale = d3.scale.linear()
// 	.domain([0, 170])
// 	.range([0, width]);

		// var color = d3.scale.linear()
		// 			.domain([0, 170])
		// 			.range(['red', 'blue']);
		// var color1 = d3.scale.linear()
		// 			.domain([0, 170])
		// 			.range(['blue', 'red']);

		// var axis = d3.svg.axis()
		// 			.scale(widthscale);

		

		// var grad = canvas.append("defs").append("radialGradient").attr("id", "grad")
  //             .attr('cx', '50%').attr('cy', '50%').attr('r', '50%');
		// 		grad.append("stop").attr("offset", "0%").attr("stop-color", "lightblue").attr('stop-opacity', 1);
		// 		grad.append("stop").attr("offset", "100%").attr("stop-color", "white").attr('stop-opacity', 1);



		circles.transition()
						.duration(1500)
						.delay(1000)
						.attr("cx", function(d) {return d })
						.attr("cy", function(d) { return d })
						.style('fill', function(d) { return color1(d)})
						.each("end", function() { d3.select(this)
						.transition()
						.duration(1500)
						.delay(3000)
						.attr("cx", function(d) {return d * 3 })
						.attr("cy", function(d) { return d * 3})
						.style('fill', function(d) { return color(d); }); });


		// canvas.append('g').attr("transform", "translate(0, 600)").call(axis);

		