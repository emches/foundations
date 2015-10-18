$(document).ready(function(){

    var answer = Math.floor(Math.random() * 100) + 1 ;
	var guess_count = 10;
	var guesses = [];
	var hots = [];
	var colds = [];


    $('#submit').on('click', function (){
    	var guess = $('#my_input').val();

        if (isNaN(parseInt(guess)))  {
           throw alert("Please enter a valid number");
        }
      
        guess_count-=1;

	    if (guess < answer){
	    	msg = "TOO LOW, YOU ARE!";
	    	new_img = "img/yoda_low.jpg";
	    } else if( guess > answer){
	    	msg = "TOO HIGH, YOU ARE!";
	        new_img = "img/yoda_high.jpg";
	      } else {
	      	msg = "YOU GOT IT";
	        new_img = "img/stormtroopers.gif";
	        $(this).hide();
	        $('#hint').hide()
	        }
	    
	    if (guess_count == 0){
	    	msg = "OUT OF GUESSES, YOU ARE!";
	    	$(this).hide();
	    } else {
	      if (guesses.length > 0 && guess != answer){
	        if (guesses.indexOf(guess)>=0){
	      	  msg+=" (AND A PREVIOUS GUESS, THIS WAS )";
	        } else {
                 if ( Math.abs(answer - guess) < Math.abs(answer - guesses[guesses.length -1]) ){
                   msg+=" ( BUT WARMER! )";
                   hots.push(guess);
                 } else { 
                 	msg+= " ( AND COLDER! )";
                   colds.push(guess);
                   }
	          }
	      }
	    }
          
        $('#banner').text(msg);
        $('#guess_count').text(guess_count);
        $('#hot').text(hots);
        $('#cold').text(colds);
	    $("#main_pic").attr("src", new_img)
	    guesses.push(guess);
  
     });


 	$('#reset').on('click', function (){
       guess_count = 10
       guesses = []
       answer  = Math.floor(Math.random() * 100) + 1 ;
       $('#submit').show();
       $('#hint').show()
       $('#guess_count').text(guess_count);
       $('#banner').text("GUESS... OR GUESS NOT... THERE IS NO TRY");
       $('#main_pic').attr("src", "img/yoda.ico");
       $('#my_input').val('');
       $('#hot').text('');
       $('#cold').text('');
       hots = [];
	   colds = [];
    });

    $('#hint').on('click', function (){
       $('#banner').text("THIS IS THE NUMBER YOU'RE LOOKING FOR: " + answer);
       $('#main_pic').attr("src", "img/move_along.gif");
       $('#my_input').val('');
    });

});


