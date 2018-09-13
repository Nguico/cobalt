$(document).ready(function() {

     new WOW().init();

    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Home', 'Histoire', 'Créations', 'Arts'],
      loopBottom: true,
      sectionSelector: 'section'
    });

  int = -1;
  color_array = ['#22427C','black','#22427C','black'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  });

});

$("#container").mousemove(function(e) {
  parallaxIt(e, ".bleu", -100);
  parallaxIt(e, ".titre", 250);
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
