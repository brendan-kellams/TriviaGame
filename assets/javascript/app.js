$(document).ready(function() {
	var index = 0;
	var timer = {
		time: 30,
		reset: function() {
			this.time = 30;
			$('#timerDisplay').html('<h2>' + this.time + ' seconds remaining</h2>');
		},
		start: function() {
			counter = setInterval(timer.count, 1000);
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
			timer.time--;
			console.log(timer.time);
			$('#timerDisplay').html(timer.time);

			if (timer.time >=0) {
				$('#timerDisplay').html('<h2>' + timer.time + ' seconds remaining</h2>');
			}
			else {
				index++;
				answerWrong();
				timer.reset();
				if (index < questions.length) {
					loadQuestion(index);
				}
				else {
					$('.choice').hide();
					score();
				}
			}
		} 
	};

	var trivia = {
		questions: ['Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centers around a boy named Link?',
					'What is the name of the fictional English archaeologist in the game "Tomb Raider"?',
					'How many square blocks is each game piece composed of in the game of "Tetris"?',
					'In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?',
					'What year was Final Fantasy VII released for the Playstation 1 for the American market?',
					'In the game "Mortal Kombat", what phrase is heard when Scorpion uses his spear?',
					'How many rows of aliens are there usually at the start of a "Space Invaders" game?',
					'What video game console has the highest number of video game console sales of all time?',
					'Super Mario needed to find six of which of these in a 1992 Game Boy platformer?',
					'Exactly how many buttons does the Intellivision controller have?'],

		q1: ['A. Chrono Trigger',
				'B. Earthbound',
				'C. The Legend of Zelda',
				'D. Final Fantasy'],

		q2: ['A. Sally McFadden',
				'B. Lara Croft',
				'C. Tifa Lockheart',
				'D. Kim Kardashian'],

		q3: ['A. 4',
				'B. 5',
				'C. 6',
				'D. Depends on level'],

		q4: ['A. Princess Peach',
				'B. Princess Zelda',
				'C. Princess Diana',
				'D. Princess Snooki'],
		
		q5: ['A. 1996',
				'B. 1997',
				'C. 1998',
				'D. 1999'],
		
		q6: ['A. "I Choose you Pikachu!"',
				'B. "Who\'s your daddy?"',
				'C. "You\'re mine now"',
				'D. "Get Over Here!"'],

		q7: ['A. 2',
				'B. 3',
				'C. 4',
				'D. 5'],

		q8: ['A. XBOX',
				'B. Sega Genesis',
				'C. Nintendo Entertainment System (NES)',
				'D. Playstation 2'],

		q9: ['A. Gold Mushrooms',
				'B. Gold Coins',
				'C. Gold Hearts',
				'D. Gold Diggers'],

		q10: ['A. 4',
				'B. 6',
				'C. 12',
				'D. 16'],
	}


	var correct = 0;
	var wrong = 0;

	var q1 = {
		question: 'Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centers around a boy named Link?',
		choices: ['A. Chrono Trigger',
					'B. Earthbound',
					'C. The Legend of Zelda',
					'D. Final Fantasy'],
		
		flags: [false, false, true, false],
		answer: 'C. The Legend of Zelda'
	};

	var q2 = {
		question: 'What is the name of the fictional English archaeologist in the game "Tomb Raider"?',
		choices: ['A. Sally McFadden',
					'B. Lara Croft',
					'C. Tifa Lockheart',
					'D. Kim Kardashian'],
		
		flags: [false, true, false, false],
		answer: 'B. Lara Croft'
	};

	var q3 = {
		question: 'How many square blocks is each game piece composed of in the game of "Tetris"?',
		choices: ['A. 4',
					'B. 5',
					'C. 6',
					'D. Depends on level'],
		
		flags: [true, false, false, false],
		answer: 'A. 4'
	};

	var q4 = {
		question: 'In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?',
		choices: ['A. Princess Peach',
					'B. Princess Zelda',
					'C. Princess Diana',
					'D. Princess Snooki'],
		
		flags: [true, false, false, false],
		answer: 'A. Princess Peach'
	};

	var q5 = {
		question: 'What year was Final Fantasy VII released for the Playstation 1 for the American market?',
		choices: ['A. 1996',
					'B. 1997',
					'C. 1998',
					'D. 1999'],
		
		flags: [false, true, false, false],
		answer: 'B. 1997'
	};

	var q6 = {
		question: 'In the game "Mortal Kombat", what phrase is heard when Scorpion uses his spear?',
		choices: ['A. "I Choose you Pikachu!"',
					'B. "Who\'s your daddy?"',
					'C. "You\'re mine now"',
					'D. "Get Over Here!"'],
		
		flags: [false, false, false, true],
		answer: 'D. "Get Over Here!"'
	};

	var q7 = {
		question: 'How many rows of aliens are there usually at the start of a "Space Invaders" game?',
		choices: ['A. 2',
					'B. 3',
					'C. 4',
					'D. 5'],
		 
		flags: [false, false, false, true],
		answer: 'D. 5'
	};

	var q8 = {
		question: 'What video game console has the highest number of video game console sales of all time?',
		choices: ['A. XBOX',
				'B. Sega Genesis',
				'C. Nintendo Entertainment System (NES)',
				'D. Playstation 2'],
		
		flags: [false, false, false, true],
		answer: 'D. Playstation 2'
	};

	var q9 = {
		question: 'Super Mario needed to find six of which of these in a 1992 Game Boy platformer?',
		choices: ['A. Gold Mushrooms',
					'B. Gold Coins',
					'C. Gold Hearts',
					'D. Gold Diggers'],
		
		flags: [false, true, false, false],
		answer: 'B. Gold Coins'
	};

	var q10 = {
		question: 'Exactly how many buttons does the Intellivision controller have?',
		choices: ['A. 4',
					'B. 6',
					'C. 12',
					'D. 16'],
		
		flags: [false, false, false, true],
		answer: 'D. 16'
	};

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	function loadQuestion(selection) {
		console.log(selection);
		timer.reset();

		$('#question').html("<h3>" + questionArray[selection].question + "</h3>");
		$('#buttonA').text(questionArray[selection].choices[0]).show();
		$('#buttonB').text(questionArray[selection].choices[1]).show();
		$('#buttonC').text(questionArray[selection].choices[2]).show();
		$('#buttonD').text(questionArray[selection].choices[3]).show();
	}

	function setup() {
		index = 0;
		$('#question').append('<button id="startButton">Start</button>');
		$('#startButton').on('click', function() {
			$(this).hide();
			timer.start();
			loadQuestion(index);
		});
	}

	function getAnswer() {

		$('.choice').on('click', function() {
			console.log('alert', index);
			index++;
			console.log('click', index);
			$('#question').text('');
			$('#buttonA').text('');
			$('#buttonB').text('');
			$('#buttonC').text('');
			$('#buttonD').text('');
			loadQuestion();
		});
	}

	function answerCorrect() {
		correct++;
		alert('Correct!');
		console.log("correct");
	}

	function answerWrong() {
		wrong++;
		alert('Incorrect!');
		console.log('wrong');
	}

	function score() {
		$('#question').empty();
		$('#question').append("<h1><p>You got " + correct + " correct</p></h1>");
		$('#question').append("<h1><p>AND...</p></h1>");
		$('#question').append("<h1><p>You got " + wrong + " incorrect</p></h1>");
		timer.stop();
		$('#timerDisplay').empty();
	}

	setup();

	$('.choice').on('click', function() {
		console.log($(this));

		if (this.id === 'buttonA') {
			var answerChosen = 'A';
		}
		else if (this.id === 'buttonB') {
			var answerChosen = 'B';
		}
		else if (this.id === 'buttonC') {
			var answerChosen = 'C';
		}
		else if (this.id === 'buttonD') {
			var answerChosen = 'D';
		}

		
		if ((answerChosen === 'A') && (questionArray[index].flags[0] === true)) {
			answerCorrect();
		}
		else if (answerChosen === 'A') {
			answerWrong();
		}
		
		if ((answerChosen === 'B') && (questionArray[index].flags[1] === true)) {
			answerCorrect();
		}
		else if (answerChosen === 'B') {
			answerWrong();
		}
		
		if ((answerChosen === 'C') && (questionArray[index].flags[2] === true)) {
			answerCorrect();
		}
		else if (answerChosen === 'C') {
			answerWrong();
		}
		
		if ((answerChosen === 'D') && (questionArray[index].flags[3] === true)) {
			answerCorrect();
		}
		else if (answerChosen === 'D') {
			answerWrong();
		}

		$('#question').text('');
		$('#buttonA').text('');
		$('#buttonB').text('');
		$('#buttonC').text('');
		$('#buttonD').text('');
		index++;

		if (index < questionArray.length) {
			loadQuestion(index);
		} else {
			$('.choice').hide();
			score();
		}
	});
});