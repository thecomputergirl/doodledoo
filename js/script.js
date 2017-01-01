src="//d3js.org/d3.v4.min.js"

var line = d3.line()
    .curve(d3.curveBasis);

var svg = d3.select("svg")
    .call(d3.drag()
        .container(function() { return this; })
        .subject(function() { var p = [d3.event.x, d3.event.y]; return [p, p]; })
        .on("start", dragstarted));

function dragstarted() {
  var d = d3.event.subject,
      active = svg.append("path").datum(d),
      x0 = d3.event.x,
      y0 = d3.event.y;

  d3.event.on("drag", function() {
    var x1 = d3.event.x,
        y1 = d3.event.y,
        dx = x1 - x0,
        dy = y1 - y0;

    if (dx * dx + dy * dy > 25) d.push([x0 = x1, y0 = y1]);
    else d[d.length - 1] = [x1, y1];
    active.attr("d", line);
  });
}

   function setImage(e) {
       var clicksourse = e.target.id;

       switch (clicksourse) {

           case "TNOne":
               document.getElementById("MainImage").style.background = "url(http://www.zenimax.com/jpn/fallout3/images/avators/80x80falloutav-vb.gif)";
               break;
           case "TNTwo":
               document.getElementById("MainImage").style.background = "url(http://www.libpng.org/pub/png/img_png/linux_logo_sample.png)";
               break;
       }


   }
   window.onload = function () {

       document.getElementById("TNOne").addEventListener("click", function (e) {
           setImage(e);
       }, false);
       document.getElementById("TNTwo").addEventListener("click", function (e) {
           setImage(e);
       }, false);

   }

