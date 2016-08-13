/* $(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  });
});

*/

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		console.log('Mouse down')
			playHadouken()
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show().animate(
        {'left': '300px'},
        500,
        function() {
          $('.hadouken').stop();
          $('.hadouken').hide();
          $('.hadouken').css('left', '-212px');
        }
      );

	// Ryu drops and fires hadouken
	//hadouken noise plays	
	})

	.mouseup(function() {
		console.log("Mouse up")
			$('.ryu-throwing').hide();
			$('.hadouken').hide();
			$('.ryu-ready').show();
	//Ryu returns to ready stance
	})

});

function playHadouken(){
	$('#playHadouken')[0].volume = 0.5;
	$('#playHadouken')[0].load();
	$('#playHadouken')[0].play();
};