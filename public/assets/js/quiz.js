var questions = [
	{
		question: "What's Robbie Chance's favorite vacation spot?",
		answers: ["Gettysburg", "Pittsburgh", "Rothensburgh", "his couch"],
		correctAnswer: 3
	},
	{
		question: "What sport did Richie Rich play when he grew up?",
		answers: ["football", "fencing", "ballet", "basketball"],
		correctAnswer: 3
	},
	{
		question: "What did Sheri Pie do before the bootcamp?",
		answers: ["teacher", "hunter", "gatherer", "graphic designer"],
		correctAnswer: 3
	}
]

var currentQuestionIndex = 0;
var currentQuestion;
var time = 7*1000;
var timer;
$('#time').text(time/1000);

function countDown(){
	timer = setInterval(function(){
		time -= 1000;
		$('#time').text(time/1000);

		if (time == 0){
			time = 7 * 1000;
			$('#time').text(time/1000);

			currentQuestionIndex++;

			if (currentQuestionIndex <= questions.length - 1){
				loadQuestion();
			}else{
				clearInterval(timer);
				alert('put a fork in it');
				$("#container").empty();
				$("#container").html("<p>Finito!</p>");
			}
		}
	}, 1 * 1000);
}

countDown();

function loadQuestion(){

	currentQuestion = questions[currentQuestionIndex];

	$('#displayQuestion').html("");

	var question = $('<div>').text(currentQuestion.question);
	$('#displayQuestion').append(question);

	for (var i=0; i<currentQuestion.answers.length; i++){
		var answerButton = $("<button>").attr('class', 'answer').attr('data-key', i).text(currentQuestion.answers[i]);
		$('#displayQuestion').append(answerButton);
	}
}

loadQuestion();

$(document).on('click', '.answer', function(){
	if ($(this).data('key') == currentQuestion.correctAnswer){
		alert('winner winner winner!!');
	}else{
		alert('you are a weiner weiner weiner');
	}

	currentQuestionIndex++;

	if (currentQuestionIndex <= questions.length - 1){
		loadQuestion();
		time = 1000 * 7;
		$('#time').text(time/1000);
	}else{
		alert('put a fork in it');
		clearInterval(timer);
		$("#container").empty();
		$("#container").html("<p>Finito!</p>");
	}
})















