var words = ["tdog", "jdog", "richie-rich", "heroku", "robbiechance", "sheripie", "anabanana", "tomcat", "stefierefie", "cheetah", "kingofjonstyle", "dontcallmeshirley"];

var randomIndex = Math.floor( Math.random() * words.length );

var randomWord = words[randomIndex];

var initialDisplay = "";
var guesses = [];

for (var i=0; i<randomWord.length; i++){
	initialDisplay += " _ ";
}

$('#display').text(initialDisplay);

$(document).keyup(function(e) {
	var keyPressed = e.key; //this is a letter

	if (randomWord.indexOf(keyPressed) >= 0){ 
		guesses.push(keyPressed);
		
		initialDisplay = "";

		
		//we guessed h
		//guesses = [h,r];

		//randomWord = heroku 

		for (var i=0; i<randomWord.length; i++){ 
			if (guesses.indexOf(randomWord[i]) >= 0){
				initialDisplay += randomWord[i];
			}else{
				initialDisplay += " _ ";
			}
		}

		$('#display').text(initialDisplay);

	}else{
		console.log('LOSER!!!')
	}

});

















