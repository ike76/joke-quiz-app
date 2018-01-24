$(function(){


const jokes = [
	{
		questionText: "Why was 6 afraid of 7 ?",
		punchlines: [
			"Because 7 8 9",
			"Because 6 is Arithmophobic",
			"Because 7 was a registered sex offender.",
			"6 was not afraid, this fallacy is an Anthropomorphism"
		],
		imageURL: "https://i.ytimg.com/vi/mq7dBtAvg64/hqdefault.jpg",
		imageAlt: "six and seven looking at eachother",
		guessIndex: undefined,
		correctIndex: 0,
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
		correctIndex: 2,
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why was the blond fired from the M&M factory?",
		punchlines: [
			"For throwing away all the <strong>W's</strong>",
			"M&Ms are manufactured by Mars, inc.",
			"She wasn't fired.  YOU'RE fired.",
			"She didn't really like candy.  It's bad for you."
		],
		imageURL: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/E219ABD4-0B69-4A59-442D46B4F955CE1C.jpg",
		imageAlt: "cartoon of M&Ms",
		guessIndex: undefined,
		correctIndex: 0,
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why did the turtle fall out of the tree?",
		punchlines: [
			"Turtles are unable to climb trees; this is a fallacy",
			"Because the tree was suffering from Anthracnose",
			"Because it was dead",
			"All of the above"
		],
		imageURL: "https://img00.deviantart.net/3a74/i/2011/064/4/0/turtles_like_2_climb_trees_too_by_everyonesname-d1y433s.jpg",
		imageAlt: "a Turtle in a tree",
		guessIndex: undefined,
		correctIndex: 2,
		gotItRight: 'unanswered',
	},
	{
		questionText: "What did the duck say to the bartender?",
		punchlines: [
			"Who’s there?",
			"Put it on my bill.",
			"Again, as ducks are unable to speak, this fallacy is an Anthropomorphism",
			"Mooooooo"
		],
		imageURL: "https://i.ytimg.com/vi/LMDDgN3wk-k/hqdefault.jpg",
		imageAlt: "a duck in a bar",
		guessIndex: undefined,
		correctIndex: 1,
		gotItRight: 'unanswered',
	},
	{
		questionText: "A horse walks into a bar . . .",
		punchlines: [
			"Horses are inherently funny.",
			"Several patrons immediately get up and leave because they recognize the inherent danger of the situation.",
			"...and says ‘ouch’",
			"The bartender says, “why the long face?”",
		],
		imageURL: "https://i.ytimg.com/vi/CUjVaaT60qY/hqdefault.jpg",
		imageAlt: "a horse in a bar",
		guessIndex: undefined,
		correctIndex: 3,
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why can’t dinosaurs clap?",
		punchlines: [
			"Because they’re dead",
			"They can, this is incorrect.",
			"Clapping was not invented until the Cretaceous period",
			"None of the above"
		],
		imageURL: "https://www.toyco.co.nz/products/550/schleich-tyrannosaurus-rex-1.jpg",
		imageAlt: "a dinosaur",
		guessIndex: undefined,
		correctIndex: 0,
		gotItRight: 'unanswered',
	},
	{
		questionText: "What is E.T. short for?",
		punchlines: [
			"Because he has little legs",
			"Entertainment Tonight",
			"Emma Thompson",
			"Eric Trump"
		],
		imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/26/13/asset/buzzfeed-prod-fastlane-03/sub-buzz-11755-1503769107-7.png",
		imageAlt: "E.T. the Extra Terrestrial",
		guessIndex: undefined,
		correctIndex: 0,
		gotItRight: 'unanswered',
	},
	{
		questionText: "Why couldn’t the pony sing?",
		punchlines: [
			"It was afraid",
			"This quiz is boring. can't wait till its over.",
			"Because it was a little hoarse",
			"this fallacy is an Anthropomorphism"
		],
		imageURL: "https://img.buzzfeed.com/buzzfeed-static/static/2017-08/26/13/asset/buzzfeed-prod-fastlane-01/sub-buzz-27723-1503769185-5.jpg",
		imageAlt: "a pony",
		guessIndex: undefined,
		correctIndex: 2,
		gotItRight: 'unanswered',
	},
	{
		questionText: "What did the buffalo dad say to his son as he left?",
		punchlines: [
			"Buffalo Wings refer to the town of Buffalo, NY.",
			"this fallacy is an Anthropomorphism",
			"Ruff ruff.",
			"Bison",
		],
		imageURL: "https://media1.britannica.com/eb-media/04/187404-131-2839AF60.jpg",
		imageAlt: "Buffalo",
		guessIndex: undefined,
		correctIndex: 3,
		gotItRight: 'unanswered',
	},
];

function insertQuestion(jokeIndex){ // puts the question/setup in the question slot
	const question = $('.question').find('.joke-setup')
	question.html(jokes[jokeIndex].questionText);
}

function createJHTML(jokeIndex, punchIndex){
	let jHTML = `
	<label for="choice${punchIndex}" >
		<div class="answer-block" ${ punchIndex < 1 ? 'tabindex="0"' : 'tabindex="-1"'}>
			<div>
				<input type="radio" name="punchline" value="${punchIndex}" id="choice${punchIndex}" required aria-labelledby="punchlines">
			</div>
			<div class="punchline">
				${jokes[jokeIndex].punchlines[punchIndex]}
			</div>
		</div> 
	</label><!-- end answer block -->
	`
	return jHTML;
}

function insertPunchline(jokeIndex, punchIndex){
	const jHTML = createJHTML(jokeIndex, punchIndex)
	$('.question').find('.punchlines').append(jHTML);
}
function insertAllPunchlines(jokeIndex){
	for (i=0; i< jokes[jokeIndex].punchlines.length; i++ ){
		insertPunchline(jokeIndex, i);
	}
}
function displayPicture(jokeIndex){
	let joke = jokes[jokeIndex];
	// let imageHTML = `
	// 	<img src="${joke.imageURL}" alt="${joke.imageAlt}">
	// `;
	// $('.joke-image').html(imageHTML);
	$('.joke-image').empty();
	$('.joke-image').css("background-image", `url(${joke.imageURL})`);
}

function displayGoButton(){
	const goButton = `<input type="submit" value="GO" class="go-button" aria-labelledby="punchlines">`
	$('.button-nav').html(goButton);
}
function removeGoButton(){
	$('.go-button').remove();
}
function insertNextButton(){
	$('.next-button-container').html(`
			<button class="next-button"><span>NEXT</span> <i class="fas fa-arrow-alt-circle-right"></i>
				</button>
		`)
}
function removeNextButton(){
	$('.next-button-container').empty()
}
function removeOldAnswers(){
	$('.punchlines').empty();
}
function removeBackgroundImage(){
	$('.joke-image').removeClass('correct').removeClass('wrong');
	$('.joke-image').css("background-image", '');
}
function setCheckBoxes(jokeIndex){
	let boxesHTMLArray = jokes.map((joke, thisIndex)=>{
		if (jokeIndex === thisIndex) {return `<i class="fas fa-spinner fa-pulse current "></i>` };
		if (joke.gotItRight === 'yes') {return `<i class="far fa-check-circle correct"></i>`};
		if (joke.gotItRight === 'no'){ return `<i class="far fa-times-circle wrong"></i>` };
		if (joke.gotItRight === 'unanswered'){ return `<i class="far fa-square unanswered"></i>`}
	})
	// console.log(JSON.stringify(boxesHTMLArray, 0, 2));
	$('.scorer').empty();
	boxesHTMLArray.forEach(joke=>{
		$('.scorer').append(joke)
	})

	// set question counter
}
function setQuestionCounter(jokeIndex){
	$('.question-counter').html(`question ${jokeIndex + 1} of ${jokes.length}`)
}
function checkAndUpdateAnswer(selectedIndex, thisJokeIndex){
	const thisJoke = jokes[thisJokeIndex];
	thisJoke.guessIndex = selectedIndex;
	const correctIndex = thisJoke.correctIndex;
	// update joke object with whether this guess was correct or not.
	if (selectedIndex == correctIndex){
		console.log('you were correct!')
		thisJoke.gotItRight = 'yes';
	} else {
		// console.log(`nope! you said ${selectedIndex} but answer was ${correctIndex}`)
		thisJoke.gotItRight = 'no';
	}
	setCheckBoxes();

};
function nextButton(){
	const nextButton = `<button class="next-button"><span>NEXT</span> <i class="fas fa-arrow-alt-circle-right"></i>
				</button>`;
	$('.next-button-container').html(nextButton)
}
function imageReplacer(correct, jokeIndex){
	$('.joke-image').css("background-image", '');
	let joke = jokes[jokeIndex];
	let setup = joke.questionText;
	let punchline = joke.punchlines[joke.correctIndex];
	if (correct === 'yes'){
		$('.joke-image').empty().addClass('correct');
		// text = 'YES!';
	} else if (correct === 'no') {
		$('.joke-image').empty().addClass('wrong');
		// text = 'NOPE';
	}
	$('.joke-image').html(`
			<div class='huge centered'><h2>${setup}</h2><h2>${punchline}</h2></div>
		`);
}
function highlightCorrectAnswer(selectedIndex){
	let selectedDiv = $(`#choice${selectedIndex}`).closest('.answer-block');
	let correctDiv = $(`#choice${jokes[thisJokeIndex].correctIndex}`).closest('.answer-block');
	if(jokes[thisJokeIndex].gotItRight === 'yes'){
		selectedDiv.addClass('hilight-correct')
		selectedDiv.find('.punchline').append('<span class="right-wrong correct">CORRECT!</span>')
	} else if (jokes[thisJokeIndex].gotItRight === 'no') {
		correctDiv.addClass('hilight-correct')
		selectedDiv.addClass('hilight-wrong')
		selectedDiv.find('.punchline').append('<span class="right-wrong wrong">WRONG</span>')
	}
		selectedDiv.closest('.punchlines').find('.answer-block').not('.hilight-correct').not('.hilight-wrong').addClass('fadeout')
}
function showFinalScorePage(){
	$('.test-questions-hider').hide();
	$('.start-hider').hide();
	$('.end-hider').show()

	let finalScore = jokes.reduce((sum, each)=>{
		if (each.gotItRight === 'yes') { 
			return sum + 1} else {
			return sum;
				}
	}, 0);
	let totalJokes = jokes.length;
	let percentageCorrect = finalScore / totalJokes * 100;
	$('#final-score').html(finalScore);
	$('#jokes-quantity-end').html(totalJokes);
	$('#percentage').html(percentageCorrect);
	if (percentageCorrect < 60) $('#end-greeting').html('Yikes.');
	
	setCheckBoxes()
}
function goToAnyJoke(jokeIndex){
	clearJoke();
	renderJoke(jokeIndex)
}

function clearJoke(){
	removeNextButton();
	removeOldAnswers();
	removeBackgroundImage();
}
function goToNextJoke(){
	clearJoke()
	thisJokeIndex += 1;
	if (thisJokeIndex < jokes.length){
		renderJoke(thisJokeIndex);
	} else {
		showFinalScorePage();
	}
}
function renderJoke(i){
	insertQuestion(i);
	insertAllPunchlines(i);
	displayGoButton()
	displayPicture(i);
	setQuestionCounter(i);
	setCheckBoxes(i)
}

// go button listener
$('.question-form').on('submit', function(event){
	event.preventDefault();
	const selectedIndex = $('input:checked').val();
	checkAndUpdateAnswer(selectedIndex, thisJokeIndex)
	imageReplacer(jokes[thisJokeIndex].gotItRight, thisJokeIndex); // drop picture, replace with audience background
	highlightCorrectAnswer(selectedIndex); // fadout others, hilight the one you chose
	removeGoButton();
	insertNextButton();
})
// next button listener
$('.next-button-container').on('click', function(){

	goToNextJoke();
})

function startQuiz(){
	$('.test-questions-hider').show();
	$('.start-hider').hide();
	$('.end-hider').hide()
	renderJoke(thisJokeIndex);
	// goToAnyJoke(5)
}


$('#start-quiz').on('click', ()=>{
	startQuiz()
})
$('#start-over').on('click', ()=>{
	jokes.forEach(joke=>{
		joke.guessIndex = undefined;
		joke.gotItRight = 'unanswered';
	});
	thisJokeIndex = 0
	startQuiz()
})


let thisJokeIndex = 0;
$('.test-questions-hider').hide();
$('.end-hider').hide()
$('.start-hider').show();
	// showFinalScorePage()
})

