$('#submitScore').on('click', function(e){
	var randNum = Math.random(); //this gets me random number between 0 and 1

	var randNumUpToFiveHund = randNum * 500;

	var roundUpRand = Math.floor(randNumUpToFiveHund);

	var data = {
		total_score: roundUpRand,
	}

	$.ajax({
		url: "/scores/create", 
		method: "POST",
		data: data, 
	}).done(function(response){
		alert("the response from the server is: " + response + ". If 200 then that's good. If 500 then there was something wrong.");
	});
});