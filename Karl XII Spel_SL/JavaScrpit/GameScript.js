window.onload = function(){



var currentPlanet = new String;
var canvas = document.getElementById("QuizWindow");
var context = canvas.getContext("2d");

var quizbg = new Image();
var Question = new String;
var Option1 = new String;
var Option2 = new String;
var Option3 = new String;
var qnumber = 0;
var CorrectAnswer = 0;
var lock = false;
var textpos1=45;
var textpos2=145;
var textpos3=230;
var textpos4=325;
var mx=0;
var my=0;

var questions;
var answers;
var correctAnswers;

var rightanswers=0;
var wronganswers=0;
document.getElementById('quizButton1').style.visibility = 'hidden';
document.getElementById('quizButton2').style.visibility = 'hidden';
document.getElementById('quizButton3').style.visibility = 'hidden';

LoadImage = function(imageURL){
    document.getElementById('SolenButton').style.visibility = 'hidden';
    document.getElementById('MerkuriusButton').style.visibility = 'hidden';
    document.getElementById('VenusButton').style.visibility = 'hidden';
    document.getElementById('JordenButton').style.visibility = 'hidden';
    document.getElementById('ISSButton').style.visibility = 'hidden';
    document.getElementById('MarsButton').style.visibility = 'hidden';
    document.getElementById('JupiterButton').style.visibility = 'hidden';
    document.getElementById('SaturnusButton').style.visibility = 'hidden';
    document.getElementById('UranusButton').style.visibility = 'hidden';
    document.getElementById('NeptunusButton').style.visibility = 'hidden';
    document.getElementById('PlutoButton').style.visibility = 'hidden';
    document.body.style.backgroundImage = "url('"+imageURL+"')";
    //context.drawImage(quizbg, 0, 0);
    //quizbg.src = "Images/quizbg.png";
    //canvas.addEventListener('click',ProcessClick,false);
    //SetQuestions();
    document.getElementById('quizButton1').style.visibility = 'visible';
    document.getElementById('quizButton2').style.visibility = 'visible';
    document.getElementById('quizButton3').style.visibility = 'visible';
}
UnloadImage = function(){
    document.getElementById('SolenButton').style.visibility = 'visible';
    document.getElementById('MerkuriusButton').style.visibility = 'visible';
    document.getElementById('VenusButton').style.visibility = 'visible';
    document.getElementById('JordenButton').style.visibility = 'visible';
    document.getElementById('ISSButton').style.visibility = 'visible';
    document.getElementById('MarsButton').style.visibility = 'visible';
    document.getElementById('JupiterButton').style.visibility = 'visible';
    document.getElementById('SaturnusButton').style.visibility = 'visible';
    document.getElementById('UranusButton').style.visibility = 'visible';
    document.getElementById('NeptunusButton').style.visibility = 'visible';
    document.getElementById('PlutoButton').style.visibility = 'visible';

    document.getElementById("'"+currentPlanet+"'").style.visibility = 'hidden';
    document.getElementById('quizButton1').style.visibility = 'hidden';
    document.getElementById('quizButton2').style.visibility = 'hidden';
    document.getElementById('quizButton3').style.visibility = 'hidden';
    document.body.style.backgroundImage = "url('Images\Map2.png')";
}


// SetQuestions = function(){
//     Question=questions[qnumber];
//     CorrectAnswer=1+Math.floor(Math.random()*3);
//     if(CorrectAnswer==1){Option1=answers[qnumber][0];Option2=answers[qnumber][1];Option3=answers[qnumber][2];}
//     if(CorrectAnswer==2){Option1=answers[qnumber][2];Option2=answers[qnumber][0];Option3=answers[qnumber][1];}
//     if(CorrectAnswer==3){Option1=answers[qnumber][1];Option2=answers[qnumber][2];Option3=answers[qnumber][0];}
//     context.textBaseline = "middle";
// 	context.font = "24pt Calibri,Arial";
// 	context.fillText(Question,20,textpos1);
// 	context.font = "18pt Calibri,Arial";
// 	context.fillText(Option1,20,textpos2);
// 	context.fillText(Option2,20,textpos3);
// 	context.fillText(Option3,20,textpos4);
// }


// function ProcessClick(ev) {
// 	my=ev.y-canvas.offsetTop;
//     if(ev.y == undefined){
// 		my = ev.pageY - canvas.offsetTop;
// 	}
// 	if(lock){
// 		ResetQ();
// 	}//if lock
// 	else{
// 		if(my>110 && my<180){GetFeedback(1);}
// 		if(my>200 && my<270){GetFeedback(2);}
// 		if(my>290 && my<360){GetFeedback(3);}
// 	}//!lock
// }//ProcessClick

// GetFeedback = function(answer){
// 	if(answer==CorrectAnswer){
// 	  	context.drawImage(quizbg, 0,400,75,70,480,110+(90*(answer-1)),75,70);
// 		rightanswers++;
// 		//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// 	}
// 	else{
// 	    context.drawImage(quizbg, 75,400,75,70,480,110+(90*(answer-1)),75,70);
// 		wronganswers++;
// 	}
// 	lock=true;
// 	context.font = "14pt Calibri,Arial";
// 	context.fillText("Klicka igen för att fortsätta",20,380);
// }//get feedback

// ResetQ= function(){
// 	lock=false;
// 	context.clearRect(0,0,550,400);
// 	qnumber++;

// 	var pictureUrl = BackgroundPictures[picturecounter];
// 	document.body.style.backgroundImage = "url('"+pictureUrl+"')";
// 	picturecounter++;
	

// 	if(qnumber==Questions.length){EndQuiz();}
// 	else{
// 		context.drawImage(quizbg, 0, 0);
// 		SetQuestions();}
// }

// EndQuiz=function(){
// 	//document.getElementById('button1').style.visibility = 'visible';
// 	canvas.removeEventListener('click',ProcessClick,false);
// 	context.drawImage(quizbg, 0,0,550,90,0,0,550,400);
// 	context.font = "20pt Calibri,Arial";
// 	context.fillText("Du är klar med quizen!",20,100);
// 	context.font = "16pt Calibri,Arial";
// 	context.fillText("Rätta svar: "+String(rightanswers),20,200);
//     context.fillText("Fel svar: "+String(wronganswers),20,240);
//     UnloadImage();
// }




Mercury = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Merkurius.jpg";
    currentPlanet = "Mercury";
    LoadImage(image);
}
Venus = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Venus.jpg";
    currentPlanet = "Venus";
    LoadImage(image);
}
Earth = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Earth.jpg";
    currentPlanet = "Earth";
    LoadImage(image);
}
ISS = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/ISS.jpg";
    currentPlanet = "ISS";
    LoadImage(image);
}
Mars = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Mars.jpg";
    currentPlanet = "Mars";
    LoadImage(image);
}
Jupiter = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Jupiter.jpg";
    currentPlanet = "Jupiter";
    LoadImage(image);
}
Saturn = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Saturn.jpg";
    currentPlanet = "Saturn";
    LoadImage(image);
}

Uranus = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Uranus.jpg";
    currentPlanet = "Uranus";
    LoadImage(image);
}
Neptune = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Neptune.jpg";
    currentPlanet = "Neptune";
    LoadImage(image);
}
Pluto = function(){
    var questions = ["x", "y", "z"];
    var answers = [["x", "y", "z"], ["x", "y", "z"], ["x", "y", "z"]];
    var image = "Images/Planets/Pluto.jpg";
    currentPlanet = "Pluto";
    LoadImage(image);
}

Sun = function(){
    questions = ["Hur många gånger mer väger solen än Jorden?", "Hur varm är mitten av solen?", 
    "Ungefär hur många minuter tar det för solens ljus strålar att nå Jorden?"];

    answers = [["333,000 gånger mer än Jorden", "15,000 gånger mer än Jorden", 
    "100,000,000 gånger mer än Jorden"], 
    ["180,000 c°", "15,000,000 c°", "20,000 c°"],
     ["3", "15", "8"]];
    correctAnswers = ["333,000 gånger mer än Jorden", "15,000,000 c°", "8"];
    var image = "Images/Planets/Sun.jpg";
    currentPlanet = "Sun";
    LoadImage(image);
    SetupQuiz();
}

SetupQuiz = function(){
    var button1 = document.getElementById('quizButton1');
    var button2 = document.getElementById('quizButton2');
    var button3 = document.getElementById('quizButton3');
    var ans1 = answers[qnumber][0];
    var ans2 = answers[qnumber][1];
    var ans3 = answers[qnumber][2];
    button1.innerHTML = ans1;
    button2.innerHTML = ans2;
    button3.innerHTML = ans3;
    button1.value = ans1;
    button2.value = ans2;
    button3.value =ans3;


    context.clearRect(0,0, canvas.clientWidth, canvas.height);
    context.textBaseline = "middle";
	context.font = "24pt Calibri,Arial";
	context.fillText(questions[qnumber],20,50);
}



Click= function(id){
    //kolla om svaret var rätt
    var buttonValue = document.getElementById(id).value;

    if(buttonValue == correctAnswers[qnumber]){
        alert("du hade rätt" + buttonValue);
        rightanswers++;
    } else {
        alert("rätt svar är: " + correctAnswers[qnumber]);
        wronganswers++;
    }
    

    if(qnumber == 2){
        qnumber = 0;
        UnloadImage();
        //göm knappar, ta bort quizmaterial osv.
    }else{
        qnumber++;
        SetupQuiz();
        
    }



    
    

}
 }