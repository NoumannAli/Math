var playing = false;
var score;
var timeRemaining;
var correctAnswer;

var msg = document.querySelector('.msg');


document.getElementById('start-reset').onclick= function(){
		if(playing == true){
			location.reload(); // it will relaod the page
			msg.style.display = "block";
		}else{
			playing = true;
			msg.style.display = "none";
			score = 0;
			document.getElementById('start-reset').innerHTML = "Reset Game";
			show('time-ramaining');
			document.getElementById('score').innerHTML = "Score: "+ score;
			hide('game-over');	
			timeRemaining = 60;
			countDownTimer();

			genrateQA();			
		}
}

for(var i =1 ; i <5 ; i++){
document.getElementById("box"+i ).onclick = function(){
		
        if(playing == true){

		if(this.innerHTML == correctAnswer){
			score += 1;
			document.getElementById("score").innerHTML = "Score: "+score;
            genrateQA()
			show("correct");
			hide("wrong")
			setInterval(function(){
                hide("correct")
			},1000);
			
		}else{
			show("wrong");
			hide("correct")
			setInterval(function(){
                hide("wrong")
			},1000);
			score -= 1;
			document.getElementById("score").innerHTML = "Score: "+score;


		}

	}
}

}


// Functions

// countdown timer function

function countDownTimer(){
	action = setInterval(function(){
		timeRemaining -= 1;
		document.getElementById('time-countdown').innerHTML = timeRemaining;
		if (timeRemaining === 0){
			shutDownCounter();
			hide('time-ramaining');
			show('game-over');
			hide('correct');
			hide('wrong')
			playing = false;
			document.getElementById('start-reset').innerHTML = "Start Game"
			document.getElementById('game-over').innerHTML = "<p>Game Over</p> <p>Your Score is: " + score+ " </p><p>Press 'Start Game' to start the game!</p>"

			
		}
	},1000)
}

// Stop the counter Counter function

function shutDownCounter(){
	clearInterval(action);
}

// Hide object function

function hide(id){
	document.getElementById(id).style.display = "none";
}


// show object function


function show(id){
	document.getElementById(id).style.display = "block";
}


// Genrate QA function

function genrateQA(){
	
	var x = 1+ Math.floor(10*Math.random())
	var y = 1+ Math.floor(10*Math.random())
	var oprators = ["+","*"];
	var rand_num = Math.round(1*Math.random());
	rand_oprator = oprators[rand_num]
     switch(rand_oprator){
     
     	case "+" : correctAnswer = x + y;
     	document.getElementById('question-box').innerHTML = x + " + " + y; break;
     	case "*": correctAnswer = x * y;
     	document.getElementById('question-box').innerHTML = x + " x " + y; break;
     }
       var possition = 1+ Math.floor(3*Math.random())

     	document.getElementById('box' + possition).innerHTML = correctAnswer;

       var answers = [correctAnswer]
       
       for(var i = 1 ; i<5 ; i++){
       	if (i != possition){
       		do{
       		  var wrongAnswer = (1+ Math.floor(10*Math.random()))*(1+ Math.floor(10*Math.random()));
       		 


       		} while(answers.indexOf(wrongAnswer) > -1){
       			document.getElementById('box' + i).innerHTML = wrongAnswer;
       			answers.push(wrongAnswer);
       		}
       	}
       }
           
}






























