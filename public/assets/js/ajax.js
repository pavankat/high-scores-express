var computerChoices = ["r", "p", "s"];

function computerChooses(arr){
	var randomComputerChoiceIndex = Math.floor(Math.random() * arr.length);

	return arr[randomComputerChoiceIndex];
}

var score = 0;
var turns = 15;

$('#score').text(score);
$('#turns').text(turns);

$('.choice').on('click', function(){
	var randomComputerChoice = computerChooses(computerChoices);

	var yourChoice = $(this).data('choice');

	if (yourChoice == randomComputerChoice){
		score = score + 10;
		$('#status').text('you tied!');
	}else if(yourChoice == 'r' && randomComputerChoice == 's'){
		score = score + 30;
		$('#status').text('you won!');
	}else if(yourChoice == 'p' && randomComputerChoice == 'r'){
		score = score + 30;
		$('#status').text('you won!');
	}else if(yourChoice == 's' && randomComputerChoice == 'p'){
		score = score + 30;
		$('#status').text('you won!');
	}else{
		score = score - 30;
		$('#status').text("You lost! You're a loser!")
	}

	turns--;
	$('#turns').text(turns);
	$('#score').text(score);

	if (turns == 0){
		var data = {
			total_score: score,
		}

		$.ajax({
			url: "/scores/create", 
			method: "POST",
			data: data, 
		}).done(function(response){
			window.location = "/scores"
		});
	}
});
