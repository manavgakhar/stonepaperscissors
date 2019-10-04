var rock= document.getElementById("rock");
var paper= document.getElementById("paper");
var scissors= document.getElementById("scissors");

var player_score=document.getElementById("player");
var computer_score=document.getElementById("computer");

var left= document.getElementById("left");
var right=document.getElementById("right");

var all_text=document.getElementById("end");


values={'rock':1,'paper':2,'scissors':3};

keys=['rock','paper','scissors'];


rock.addEventListener('click',function(){
	var randomNumber = Math.floor(Math.random()*keys.length);
	var a='rock';
	var b= keys[randomNumber];
	game(a,b);
	score_disp();
	vs_disp(a,b);
});

paper.addEventListener('click',function(){
	var randomNumber = Math.floor(Math.random()*keys.length);
	var a='paper';
	var b= keys[randomNumber];
	game(a,b);
	score_disp();
	vs_disp(a,b);
});

scissors.addEventListener('click',function(){
	var randomNumber = Math.floor(Math.random()*keys.length);
	var a='scissors';
	var b= keys[randomNumber];
	game(a,b);
	score_disp();
	vs_disp(a,b);
});

var player=0;
var computer=0;


function game(a,b){
	if(player<3 && computer<3){
		var num1=values[a];
		var num2=values[b];
		if(num1===1 && num2===2){
			computer+=1;
		}
		else if(num1===1 && num2===3){
			player+=1;
		}
		else if(num1===2 && num2===1){
			player+=1;
		}
		else if(num1===3 && num2===1){
			computer+=1;
		}
		else if(num1===num2){
		}
		else if (num1===2 && num2===3){
			computer+=1;
		}
		else if(num1===3 && num2===2){
			player+=1;
		}
	}
	else{
		if(player>computer){
			all_text.innerText="MAN WON"
		}
		else if(computer>player){
			all_text.innerText="MACHINE WON"
		}
	}
	
}

function score_disp(){
	player_score.innerText=player;
	computer_score.innerText=computer;
}

function vs_disp(a,b){
		left.innerText=a;
		right.innerText=b;
}
	
