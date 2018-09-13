jQuery(document).ready(function() {

     new WOW().init();

    jQuery('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Accueil', 'Historique', 'Usages', 'Art', 'Van Gogh'],
      loopBottom: true,
      sectionSelector: 'section'
    });

  int = -1;
  color_array = ['#22427C','#22427C','#22427C','#22427C', '#22427C'];

  jQuery('section').each(function(){
    int++
    jQuery(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  });

});

jQuery("#container").mousemove(function(e) {
  parallaxIt(e, ".bleu", -100);
  parallaxIt(e, ".titre", 250);
});

function parallaxIt(e, target, movement) {
  var jQuerythis = jQuery("#container");
  var relX = e.pageX - jQuerythis.offset().left;

  TweenMax.to(target, 1, {
    x: (relX - jQuerythis.width() / 2) / jQuerythis.width() * movement,
  });
}
