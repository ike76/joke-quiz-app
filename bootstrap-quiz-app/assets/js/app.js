$(function(){

const jokes = [
	{
		questionText: "Why was 6 afraid of 7?",
		punchlines: [
			"Because 7 8 9.",
			"Because 6 is Arithmophobic.",
			"Because 7 was a registered sex offender.",
			"6 was not afraid, this fallacy is an Anthropomorphism."
		],
		imageURL: "https://i.kinja-img.com/gawker-media/image/upload/s--YfGuf0DR--/c_fill,fl_progressive,g_center,h_450,q_80,w_800/18hgjti706ptljpg.jpg",
		imageAlt: "a pile of numbers",
		guessIndex: undefined,
		correctIndex: '0',
		gotItRight: 'unanswered',
	},
	{
		questionText: "What did the fish say when he ran into a concrete wall?",
		punchlines: [
			"Nothing, as fish don't technically speak english.",
			"Shit!",
			"Dam!",
			"Fish are unable to run."
		],
		imageURL: "https://4.imimg.com/data4/NU/RW/MY-31441308/gold-fish-500x500.jpg",
		imageAlt: "a fish",
		guessIndex: undefined,
		correctIndex: '2',
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why was the blond fired from the M&M factory?",
		punchlines: [
			"For throwing away all the <strong>W's</strong>.",
			"M&Ms are manufactured by Mars, inc.",
			"She wasn't fired.  YOU'RE fired.",
			"She didn't really like candy.  It's bad for you."
		],
		imageURL: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/E219ABD4-0B69-4A59-442D46B4F955CE1C.jpg",
		imageAlt: "cartoon of M&Ms",
		guessIndex: undefined,
		correctIndex: '0',
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why did the turtle fall out of the tree?",
		punchlines: [
			"Turtles are unable to climb trees; this is a fallacy.",
			"Because the tree was suffering from Anthracnose.",
			"Because it was dead.",
			"All of the above."
		],
		imageURL: "https://img00.deviantart.net/3a74/i/2011/064/4/0/turtles_like_2_climb_trees_too_by_everyonesname-d1y433s.jpg",
		imageAlt: "a Turtle in a tree",
		guessIndex: undefined,
		correctIndex: '2',
		gotItRight: 'unanswered',
	},
	{
		questionText: "What did the duck say to the bartender?",
		punchlines: [
			"Who’s there?",
			"Put it on my bill.",
			"Again, as ducks are unable to speak, this fallacy is an Anthropomorphism.",
			"Mooooooo!"
		],
		imageURL: "https://i.ytimg.com/vi/LMDDgN3wk-k/hqdefault.jpg",
		imageAlt: "a duck in a bar",
		guessIndex: undefined,
		correctIndex: '1',
		gotItRight: 'unanswered',
	},
	{
		questionText: "A horse walks into a bar . . .",
		punchlines: [
			"Horses are inherently funny.",
			"Several patrons immediately get up and leave because they recognize the inherent danger of the situation.",
			"...and says ‘ouch.’",
			"... so the bartender says, “why the long face?”",
		],
		imageURL: "https://i.ytimg.com/vi/CUjVaaT60qY/hqdefault.jpg",
		imageAlt: "a horse in a bar",
		guessIndex: undefined,
		correctIndex: '3',
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why can’t dinosaurs clap?",
		punchlines: [
			"Because they’re dead.",
			"They can, this is incorrect.",
			"Clapping was not invented until the Cretaceous period.",
			"None of the above."
		],
		imageURL: "https://www.toyco.co.nz/products/550/schleich-tyrannosaurus-rex-1.jpg",
		imageAlt: "a dinosaur",
		guessIndex: undefined,
		correctIndex: '0',
		gotItRight: 'unanswered',
	},
	{
		questionText: "What is E.T. short for?",
		punchlines: [
			"Entertainment Tonight.",
			"Emma Thompson.",
			"Because he has little legs.",
			"Eric Trump.",
		],
		imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/26/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-11755-1503769107-7.png",
		imageAlt: "E.T. the Extra Terrestrial",
		guessIndex: undefined,
		correctIndex: '2',
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why couldn’t the pony sing?",
		punchlines: [
			"It was afraid.",
			"This quiz is boring. can't wait till its over.",
			"Because it was a little hoarse",
			"This fallacy is an Anthropomorphism."
		],
		imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/26/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-27723-1503769185-5.jpg",
		imageAlt: "a pony",
		guessIndex: undefined,
		correctIndex: '2',
		gotItRight: 'unanswered',
	},
	{
		questionText: "What did the buffalo dad say to his son as he left?",
		punchlines: [
			"Buffalo Wings refer to the town of Buffalo, NY.",
			"This fallacy is an Anthropomorphism.",
			"Ruff ruff.",
			"Bison",
		],
		imageURL: "https://media1.britannica.com/eb-media/04/187404-131-2839AF60.jpg",
		imageAlt: "Buffalo",
		guessIndex: undefined,
		correctIndex: '3',
		gotItRight: 'unanswered',
	},
];

const answerImages = {
	yes: ['https://media.giphy.com/media/y8Mz1yj13s3kI/giphy.gif', 'https://media.giphy.com/media/DpB9NBjny7jF1pd0yt2/giphy.gif', 'https://media.giphy.com/media/8j3CTd8YJtAv6/giphy.gif'],
	no: ['https://media.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.gif', 'https://media.giphy.com/media/GjR6RPcURgiL6/giphy.gif', 'https://media.giphy.com/media/5XPb0FvIqylqg/giphy.gif'],
	question: ['https://image.freepik.com/free-icon/white-question-mark-on-a-black-circular-background_318-35996.jpg'],
	yesIndex: 0,
	noIndex: 0,
};

// when page loads, do this stuff - ->
let jokeIndex = 0;
showStartPage();
// <-- when page loads, do that stuff

$('.start-button-div').on('click', ()=>{
	$('#start-container').hide();
	$('#end-container').hide();
	$('#joke-question-answer-container').show();

	loadJoke(jokeIndex);
});


// $('#start-button').click(); 

$('.punchline-form').submit(function(event){
	event.preventDefault();
	let guessIndex = $('input[name="punchline"]:checked').closest('.form-check').attr('punchline');

	checkAnswer(jokeIndex, guessIndex)

});

$('.button-div').on('click', '#next-btn', ()=>{
	goToNextJoke();
})

$('.try-again-button-div').on('click', ()=>{
	location.reload()
});

$('.button-div').on('click', '#finish-btn', ()=>{
	showEndPage();
})

function showStartPage(){
	jokeIndex = 0;
	updateCounter(jokeIndex, false);
	$('#start-container').show();
	$('#end-container').hide();
	$('#joke-question-answer-container').hide();
}

function showEndPage(){
	$('#start-container').hide();
	$('#end-container').show();
	$('#joke-question-answer-container').hide();
	let score = jokes.reduce((sum, each)=>{return sum += (each.gotItRight === 'yes') ? 1 : 0} ,0)
	$('.j-setup').text(`You got ${score} out of ${jokes.length} correct!`)
	updateCounter(jokeIndex);
	changeButton('Try Again?', 'primary', "try-again-btn", 0);
	clearBothSides();
}



function checkAnswer(jokeIndex, guessIndex){
	let joke = jokes[jokeIndex];
	if (joke.correctIndex === guessIndex) {
		joke.gotItRight = 'yes';
	} else {
		joke.gotItRight = 'no';
	}
	handleLeftImage(joke.gotItRight);
	handlePunchlines(guessIndex, joke.correctIndex);
	(jokeIndex < jokes.length - 1) ? changeButton('Next Joke ', joke.gotItRight === 'yes' ? 'success' : 'danger', 'next-btn') : changeButton('Finish Quiz ', 'success', 'finish-btn');
	
	updateCounter(jokeIndex)
}

function goToNextJoke(){
	jokeIndex += 1;
	loadJoke(jokeIndex)
}


function formatPL(string){
	return `<label class="form-check-label"><input class="form-check-input" type="radio" name="punchline"  required required="required">${string}</label>`}

function handleRightImage(i){
	let {imageURL, imageAlt} = jokes[i];

	$('.answer-picker-column').css("background-image", `url('${imageURL}')`);
}

function clearBothSides(){
	$('.answer-picker-column').css("background-image", '');
	$('.score-keeper-column').css("background-image", "https://i.pinimg.com/736x/10/1b/c9/101bc90182b546ecd2dee911c5e09491--d-film-d-glasses.jpg");
}

function handleLeftImage(c){
	let leftImageUrl = '';
	let textResponse = $('#yes-no-text');
	if(c==='question'){
		leftImageUrl = answerImages.question;
		textResponse.hide();
	}
	if(c==='yes'){
		leftImageUrl = answerImages.yes[answerImages.yesIndex % answerImages.yes.length];
		answerImages.yesIndex += 1; 
		textResponse.css('color', 'lightgreen');
		textResponse.text('YES!');
		textResponse.show();
	};
	if(c==='no'){
		leftImageUrl = answerImages.no[answerImages.noIndex % answerImages.no.length];
		answerImages.noIndex += 1; 
		textResponse.css('color', 'red');
		textResponse.text('NOPE!');
		textResponse.show();
	};
		$('.score-keeper-column').css("background-image", `url('${leftImageUrl}')`);
}
function updateCounter(i, spinningStar){
	const stars = {
		yes: `<i class="fa fa-star star correct"></i>`,
		no: `<i class="fa fa-close star wrong"></i>`,
		unanswered: `<i class="fa fa-star-o star unanswered"></i>`,
		current: `<i class="fa fa-star-o star unanswered fa-spin"></i>`,
	}
	$('.score-card').find('h6').empty();
	jokes.forEach((j, jokeIndex)=>{
		if(i===jokeIndex && spinningStar){
			// set current joke spinning star
			$('.score-card').find('h6').append(stars.current);
		} else {
			// grab html from stars object according to gotitright prop
			console.log(j.gotItRight)
			$('.score-card').find('h6').append(stars[j.gotItRight]);
		};
	});
	$('.question-number strong').text(i+1);
	$('.total-questions strong').text(jokes.length)
}
function handlePunchlines(guessIndex, correctIndex){
	$('.form-check-input').hide();
	// either way turn correct answer green
		$(`[punchline='${correctIndex}']`).addClass('correct-answer');

	// if guess was right give it a check
	if(guessIndex === correctIndex){
		$(`[punchline='${correctIndex}']`).append(`<span class="correct-response-text"><i class="fa fa-check correct"></i>CORRECT</span>`)
		}
	// if guess was wrong, also turn that wrong answer red and give an X
	if (guessIndex !== correctIndex) {
		$(`[punchline='${correctIndex}']`).append(`<span class="correct-response-text">  <i class="fa fa-arrow-left correct"></i></span>`)
		$(`[punchline='${guessIndex}']`).addClass('wrong-answer');
		$(`[punchline='${guessIndex}']`).append(`<span class="wrong-response-text"><i class="fa fa-remove wrong-answer-x"></i>WRONG </span>`)
	}
		$('.form-check').not(`[punchline='${guessIndex}']`).not(`[punchline='${correctIndex}']`).addClass('fade-out');

}


function changeButton(text, color, idName, divClass = 'submit-button-div'){
	let buttonHTML = `<button class="btn btn-${color} submit" id="${idName}"  type="submit">${text} <i class="fa fa-arrow-right"></i> </button>`
	$(`.${divClass}`).html(buttonHTML);
	console.log($('#button-div'))
}

function loadJoke(i){
	changeButton('Submit', 'primary', 'guess-btn')
	handleLeftImage('question');
	handleRightImage(i);
	updateCounter(i, true)
	const setup = jokes[i].questionText;
	$('.j-setup').html(setup) // puts joke question into setup div

	jokes[i].punchlines.forEach((punchline, i)=>{
		$(`[punchline='${i}']`).removeClass('wrong-answer').removeClass('correct-answer').removeClass('fade-out').html(formatPL(punchline));
	});
	$('.form-check-input').show();
	
}









})