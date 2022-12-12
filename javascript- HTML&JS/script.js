
// -- start of draw triangle code -  DO NOT EDIT  -------------------------------------------------//-----------------


//create canvas
var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
 
// the triangle
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();
 
// the shape outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();
 
// the shape fill color
context.fillStyle = "#FFCC00";
context.fill();

// -- end of draw triangle code - DO NOT EDIT -------------------------------//----------------------------------------------------






//--------------------------------------------YOUR JAVASCRIPT GOES HERE--------------------------------------------------------//

//Declare and set score variable to 0
let score = 0;

//Prompt user to input user name, Store preferred user name
let firstName = prompt("Please enter your name");

//Display welcome message along with user name
if (firstName != null) {
	alert("Welcome " + firstName);

	//ask user to enter the 3 values for each triangle side
	alert("Please enter 3 values for each triangle side.");
}

// alert user to enter a valid name
else {
	alert("Warning: Please Enter a valid name!");
};

//If the user clicks calculate triangle button
function calcTriangle() {
	//Declare local variable answer, assign answer the value of ss1 + ss2
	let answer = ss1 + ss2;
	// If answer equals to ls1 alert and display to page that triangle is right angled
	if(answer==ls1){
		document.getElementById("output").innerHTML="Yes I am  a right angled triangle";
		alert("Yes I am a right angled triangle")
	}

	//  else, alert and display to page that triangle is not right angled
	else{
		document.getElementById("output").innerHTML="No I am not a right angled triangle";
		alert("No I am not a right angled triangle")
	}
}

// if user click on the button with id name calc it will run this function.
document.getElementById("calc").addEventListener("click",
function() {

	let p1 = document.getElementById("ss1").value;
	let p2 = document.getElementById("ss2").value;
	let p3 = document.getElementById("ls1").value;

	ss1=p1*p1;
	ss2=p2*p2;
	ls1=p3*p3;

	//call calcTriangle function
	calcTriangle(p1, p2, p3)

});

//if the user clicks the play quiz button, call the playQuiz function
document.getElementById("quiz").addEventListener("click",
function playQuiz() {

	// Call q1 and q2 function
	q1();
	q2();

	
})

function playQuiz(){

	let tries = 0;
};



function q1() {
	// Declare a variable called q1tries and set it to 0
	let q1tries = 0;

	//Declare variable called q1answer and prompt user for answer
	let q1answer = prompt("What is 23785 to the nearest thousand?");

	//Check if q1answer is equal to 24000, alert user if correct
	if(q1answer == 24000){
		alert("correct!");
		//Add 1 to score
		score++;
		//alert user of current score
		alert("Your current score is " + score);
		
	}

	else{

		//While q1tries is less than 1 and answer is not equal to 24000
		while(q1tries < 1 && q1answer != 24000) {
			//Prompt user to try again
			q1answer = prompt("please try again");
			//Add 1 to q1tries
			q1tries++;
		
			//if q1answer is equal to 24000
			if(q1answer == 24000) {
				//Alert user if correct
				alert("correct");
				//Add 1 to score
				score++;
				//alert user of current score
				alert("Your current score is " + score);
				
			}

			else{
				//Alert user that they have had two attempts and move onto next question
				alert("you have had two attemps, please move onto next question");
				//Alert user of current score
				alert("Your current score is " + score);
			
			};
		
		};
	};

};


function q2() {
	//Declare a variable called q2tries and set it to 0
	let q2tries = 0;
	// Declare variable called q2answer and prompt user for answer
	let q2answer = prompt("What is 40% of £50?");

	//Check if q2answer is equal to £20
	if(q2answer == "£20"){
		//Alert user if correct
		alert("correct!");
		//Add 1 to score
		score++;
		//Alert user of current score
		alert("Your current score is " + score);
		
	}

	else{

		//While q2tries is less than 1 and answer is not equal to £20
		while(q2tries < 1 && q2answer != "£20") {
			//Prompt user to try again
			q2answer = prompt("please try again");
			//Add 1 to q2tries
			q2tries++;
		
			//if q2answer is equal to £20
			if(q2answer == "£20") {
				//Alert user if correct
				alert("correct");
				//Add 1 to score
				score++;
				//Alert user of current score
				alert("Your current score is " + score);
		
			}

			else{
				//Alert user that they have had two attempts
				alert("you have had two attempts");
				//Alert user of current score
				alert("Your current score is " + score);
			}

		
		}
		
	};

	// alert/display to page the users name and quiz score
	alert(firstName + " your score is " + score);
};



//--------------------------------------------YOUR JAVASCRIPT ENDS HERE--------------------------------------------------------//
