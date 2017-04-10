
    var timer = setInterval(function() {

        myTimer()

    }, 1000);

        var seconds = 30;

    function myTimer() {

        document.getElementById(".timer-box").innerHTML = "0:" + seconds--; + "seconds";

    }

//sets up our score keeping information 
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
		var number = 20;
		var intervalId;

		function showScore (){
			$("#correct").text(correct);
			$("#incorrect").text(incorrect);
			$("#unanswered").text(unanswered);
}

//hides the questions until the start button is clicked
		$(".questions").hide();
		$(".result").hide();


		$(".start").on("click", showQuestions);
		$(".submit").on("click", showScore);

//showQuestions function shows the game section and hides the start button
function showQuestions () {
	$(".questions").show();
	$(".start").hide();
	run();
}
//showScore function: hides the game section and shows the result section.
function showScore () {
	$(".questions").hide();
	$(".result").show();
	showScore();
}

$(".submit").on("click", stop);
    $(".submit").on("click", checkAnswers);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the timer-box.
      $("#timer-box").text(number);

      //  Once number hits zero...
      if (number === 0) {
      	//  ...run the showScore function.
        showScore();
      }
    }


    //  The stop function
    function stop() {

      clearInterval(intervalId);
      showScore();
    }

    //this function checks the correct, incorrect and unanswered questions.
function checkAnswers(){
	
	function question1 (){
	    if ($('input[name="q1"]:checked').val() == "pepper-mustard"){
    	correct++;
	    }
	    else if ($('input[name="q1"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question1);
	}

	function question2 (){
	    if ($('input[name="q2"]:checked').val() == "shredded-wheat"){
    	correct++;
	    }
	    else if ($('input[name="q2"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question2);
	}

	function question2 (){
	    if ($('input[name="q2"]:checked').val() == "shredded-wheat"){
    	correct++;
	    }
	    else if ($('input[name="q2"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question2);
	}

	function question3 (){
	    if ($('input[name="q3"]:checked').val() == "cabbage"){
    	correct++;
	    }
	    else if ($('input[name="q3"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question3);
	}

	function question4 (){
	    if ($('input[name="q4"]:checked').val() == "fried-chicken"){
    	correct++;
	    }
	    else if ($('input[name="q4"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question4);
	}

	function question5 (){
	    if ($('input[name="q5"]:checked').val() == "ireland"){
    	correct++;
	    }
	    else if ($('input[name="q5"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question5);
	}

	function question6 (){
	    if ($('input[name="q6"]:checked').val() == "cheerioates"){
    	correct++;
	    }
	    else if ($('input[name="q6"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question6);
	}

	function question7 (){
	    if ($('input[name="q7"]:checked').val() == "quesadilla"){
    	correct++;
	    }
	    else if ($('input[name="q7"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question7);
	}

	function question8 (){
	    if ($('input[name="q8"]:checked').val() == "coca-cola"){
    	correct++;
	    }
	    else if ($('input[name="q8"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	console.log(question8);
	}

	question1();
	question2();
	question3();
	console.log("Correct answers: " + correct);
	console.log("Incorrect answers: "+ incorrect);
	console.log("Unanswered answers: " + unanswered);
	$("#correct").text(correct);
	$("#incorrect").text(incorrect);
	$("#unanswered").text(unanswered);
    




