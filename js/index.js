$(document).ready(function() {

    //activate wow.js
     new WOW().init();

    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
      loopBottom: true,
      sectionSelector: 'section'
    });

  //apply color to each section from array
  int = -1;
  color_array = ['#22427C','#c0392b','#9b59b6','#3498db','#f1c40f','#16a085'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  });

});

$("#container").mousemove(function(e) {
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "img", 200);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  //var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    //y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
