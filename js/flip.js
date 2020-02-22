var topCard = 1;
	var facingUp = true;
	var timer = 0;


	function flipCard(n) {
	    if (topCard === n) return;

	    // Replace the contents of the current back-face with the contents
	    // of the element that should rotate into view.
	    var curBackFace = $('.' + (facingUp ? 'face2' : 'face1'));
	    var nextContent = $('.store' + n).html(); 
	    var nextContent = $('.store li:nth-child(' + n + ')').html(); 
	    curBackFace.html(nextContent);

	    // Rotate the content
	    $('.card').toggleClass('flipped');
	    topCard = n;
	    facingUp = !facingUp;
	}


		var nr = 1;
		var flip_repeater = "";
		flip_repeater = window.setInterval(function(){	

		 	flipCard(nr);

		 	if(nr == 4)
		 		nr = 0;

		 		 	
		 	nr++;	
		}, 4000);
			

		$(".card").on("mouseover", function () {
		  	
			clearInterval(flip_repeater);
		
		});


		$(".card").on("mouseleave", function () {

			flip_repeater = window.setInterval(function(){	

			 	flipCard(nr);
			 	
			 	if(nr == 4)
			 		nr = 0;

			 	
			 	nr++;	
			}, 4000);

		});






	$(document).ready(function(){
	    // Add the appropriate content to the initial "front side"
	    var frontFace = $('.face1');
	    var frontContent = $('.store li:first-child').html(); 
	    frontFace.html(frontContent);

	  

	    


      	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		if(is_chrome)
			$('.container>.card').addClass('cubicTransition');
		 
		

	});
