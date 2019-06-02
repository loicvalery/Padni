$(document).ready(function(){
	//get total of questions
	var $questionNumber = $('h2').length;
	console.log($questionNumber);
	//caching final score
	var $totalScore=0;

	$('li').click(function(){
		//caching variables
		var $parent = $(this).parent();
    	var $span = $(this).find('.fa');

    	//deactivate options on click
    	 $parent.find('li').off("click");
	
		//check for .correct class
			//if yes
			if($(this).hasClass('correct')){
				//add .correctAnswer class
				$(this).addClass('correctAnswer');
				//find next span and change icon
				$span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
				//reduce opacity of siblings
				$(this).siblings().addClass('fade');
				//show answer
				var $answerReveal= $parent.next('.answerReveal').show();
				var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
				var $toShowFalse = $answerReveal.find('.quizzAnswerF');
				$toShowCorrect.show();
				$toShowFalse.remove();
				//add 1 to total score
				$totalScore+=1;
				//console.log($totalScore);
			}else{
				//add .wrongAnswer class
				$(this).addClass('wrongAnswer').addClass('fade');
				//change icon
				$span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
				//reduce opacity of its siblings
				$(this).siblings().addClass('fade');
				//show wrong Message
				var $answerReveal= $parent.next('.answerReveal').show();
				var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
				var $toShowFalse = $answerReveal.find('.quizzAnswerF');
				$toShowCorrect.remove();
				$toShowFalse.show();
				//locate correct answer and highlight
				$parent.find('.correct').addClass('correctAnswer');
			};
	});//end click function

	//print Results
	function printResult(){
		var resultText = '<p>';
		if ($totalScore === $questionNumber){
			resultText+='You got '+ $totalScore+ ' out of '+$questionNumber+'! </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p>This is awesome!</p>');
			$('#halfImage').append('<img src="http://placehold.it/350x150" width="100%"><img>');
		}else if($totalScore>=3 && $totalScore < $questionNumber){
			resultText+='You got '+ $totalScore+ ' out of '+$questionNumber+'! </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p>So and so...better luck next time</p>');
			$('#halfImage').append('<img src="http://placehold.it/350x150" width="100%"><img>');
		}else if ($totalScore<3){
			resultText+='You got '+ $totalScore+ ' out of '+$questionNumber+' </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p>No..no...no...you have to try harder</p>');
			$('#halfImage').append('<img src="http://placehold.it/350x150" width="100%"><img>');
		}

	};//end function
	
	//final score
	$('ul').last().click(function(){
    //prevent further clicks on this
		$(this).off('click');
		//show result after last li is clicked
		var $height = $('.finalResult').height();
			printResult();
			$('.finalResult').show();
			$('html, body').animate({ 
		   scrollTop: $(document).height()-$height}, 
		   1400);	
	});

});//end dom ready


