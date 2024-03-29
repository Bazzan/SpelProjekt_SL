window.onload = function(){



var currentPlanet = new String;
var canvas = document.getElementById("QuizWindow");
var context = canvas.getContext("2d");

// var quizbg = new Image();
// var Question = new String;
// var Option1 = new String;
// var Option2 = new String;
// var Option3 = new String;
var qnumber = 0;
// var CorrectAnswer = 0;
// var lock = false;
// var textpos1=45;
// var textpos2=145;
// var textpos3=230;
// var textpos4=325;
// var mx=0;
// var my=0;

var questions;
var answers;
var correctAnswers;

var rightanswers=0;
var wronganswers=0;
var visitedPlanets=0;

document.getElementById('quizButton1').style.visibility = 'hidden';
document.getElementById('quizButton2').style.visibility = 'hidden';
document.getElementById('quizButton3').style.visibility = 'hidden';

LoadImage = function(imageURL){
    // document.getElementById('SolenButton').style.visibility = 'hidden';
    // document.getElementById('MerkuriusButton').style.visibility = 'hidden';
    // document.getElementById('VenusButton').style.visibility = 'hidden';
    // document.getElementById('JordenButton').style.visibility = 'hidden';
    // document.getElementById('ISSButton').style.visibility = 'hidden';
    // document.getElementById('MarsButton').style.visibility = 'hidden';
    // document.getElementById('JupiterButton').style.visibility = 'hidden';
    // document.getElementById('SaturnusButton').style.visibility = 'hidden';
    // document.getElementById('UranusButton').style.visibility = 'hidden';
    // document.getElementById('NeptunusButton').style.visibility = 'hidden';
    // document.getElementById('PlutoButton').style.visibility = 'hidden';
    document.getElementById("buttons").style.visibility = 'hidden';
    canvas.style.backgroundImage = "url('"+imageURL+"')";
    
    document.getElementById('quizButton1').style.visibility = 'visible';
    document.getElementById('quizButton2').style.visibility = 'visible';
    document.getElementById('quizButton3').style.visibility = 'visible';
}
UnloadImage = function(){
    // document.getElementById('SolenButton').style.visibility = 'visible';
    // document.getElementById('MerkuriusButton').style.visibility = 'visible';
    // document.getElementById('VenusButton').style.visibility = 'visible';
    // document.getElementById('JordenButton').style.visibility = 'visible';
    // document.getElementById('ISSButton').style.visibility = 'visible';
    // document.getElementById('MarsButton').style.visibility = 'visible';
    // document.getElementById('JupiterButton').style.visibility = 'visible';
    // document.getElementById('SaturnusButton').style.visibility = 'visible';
    // document.getElementById('UranusButton').style.visibility = 'visible';
    // document.getElementById('NeptunusButton').style.visibility = 'visible';
    // document.getElementById('PlutoButton').style.visibility = 'visible';

    document.getElementById("buttons").style.visibility = 'visible';

    //document.getElementById(currentPlanet).style.visibility = 'hidden';
    var lastPlanet = document.getElementById(currentPlanet);
    lastPlanet.parentNode.removeChild(lastPlanet);

    document.getElementById('quizButton1').style.visibility = 'hidden';
    document.getElementById('quizButton2').style.visibility = 'hidden';
    document.getElementById('quizButton3').style.visibility = 'hidden';
    canvas.style.backgroundImage = "url('Images/MapNy.png')";
    //context.clearRect(0, 0, canvas.width, canvas.height)
    document.getElementById('frågetext').style.visibility = 'hidden';
}

MouseOver = function(id){
    if(id == "SolenButton"){
        document.getElementById('SolenInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Solen är vårt solsystems stjärna som alla planeter ligger i omlopp kring, vars ljus och värme gör det möjligt för liv att finnas på jorden.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "MerkuriusButton"){
        document.getElementById('MerkuriusInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Merkurius är solsystemets första och minsta planet, en liten stenig planet vars yta liknar vår månes. Det är rätt svårt att se den med blotta ögat men ändå har människan kunnat observera den i över 3400 år!";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "VenusButton"){
        document.getElementById('VenusInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Venus är solsystemets andra planet från solen. Den är nästan lika stor som Jorden och ligger såpass nära att den går att se ganska lätt med blotta ögat.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "JordenButton"){
        document.getElementById('JordenInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Jorden är den tredje planeten i solsystemet och oss människors planet, den enda planeten i solsystemet där liv finns, så vitt vi vet. Jordens mycket speciella förutsättningar gjorde det möjligt för liv att utvecklas här.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "ISSButton"){
        document.getElementById('ISSInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "ISS (International Space Station) är en rymdstation som ligger i omlopp runt Jorden. Häruppe bor det ständigt 3-6 astronauter från hela Jorden. De flyter runt tyngdlösa i stationen och forskar på alla möjliga saker kring astronomi, meteorologi och människans vistelse i rymden.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "MarsButton"){
        document.getElementById('MarsInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Mars, den röda planeten, är den fjärde planeten i solsystemet. Mars atmosfär och klimat är förvisso inte så likt Jordens men det är mindre extremt än de andra planeternas, vilket gör att vi människor tror att det är möjligt att snart kunna skicka en människa till Mars.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "JupiterButton"){
        document.getElementById('JupiterInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Jupiter är den femte och största planeten i solsystemet. Jupiter är en såkallad gasjätte, en planet som består av gaser. Det är okänt om Jupiter har en fast kärna inuti eller består till 100% av gas.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "SaturnusButton"){
        document.getElementById('SaturnusInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Saturnus är den sjätte planeten i solsystemet. Den förknippas ofta med sina karaktäristiska ringar. Dock är Saturnus inte den enda planeten med ringar, Jupiter har också ringar men de är rätt tunna och svårare att se.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "UranusButton"){
        document.getElementById('UranusInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Uranus är den sjunde planeten i solsystemet. Den är en av de fyra jätteplaneterna, Jupiter, Saturnus, Uranus och Neptunus. Uranus är en kall planet som lutar 98° (Jorden lutar 23,5°), så den 'rullar' fram genom rymden!";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "NeptunusButton"){
        document.getElementById('NeptunusInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Neptunus är den åttonde planeten i solsystemet. Likt Uranus är den väldigt kall och stormig och består av gaser, men den utstrålar värme inifrån vilket gör den lite varmare än Uranus. På Neptunus kan vinden blåsa över 2000 kilometer i timmen!";
        document.getElementById('planettext').style.visibility = 'visible';
    }
    else if(id == "PlutoButton"){
        document.getElementById('PlutoInfo').style.visibility = 'visible';
        document.getElementById('planettext').innerHTML = "Pluto räknas egentligen inte längre som en av solsystemets planeter, sedan den 2006 blev omklassifierad till en dvärgplanet av typen 'plutoid'. Den är väldigt kall och liten, bara 0,2% av Jordens volym. När Pluto är som längst bort ligger den hela 7.38 miljarer kilometer från solen.";
        document.getElementById('planettext').style.visibility = 'visible';
    }
}

MouseOut = function(id){
    if(id == "SolenButton"){
        document.getElementById('SolenInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "MerkuriusButton"){
        document.getElementById('MerkuriusInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "VenusButton"){
        document.getElementById('VenusInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "JordenButton"){
        document.getElementById('JordenInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "ISSButton"){
        document.getElementById('ISSInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "MarsButton"){
        document.getElementById('MarsInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "JupiterButton"){
        document.getElementById('JupiterInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "SaturnusButton"){
        document.getElementById('SaturnusInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "UranusButton"){
        document.getElementById('UranusInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "NeptunusButton"){
        document.getElementById('NeptunusInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }
    else if(id == "PlutoButton"){
        document.getElementById('PlutoInfo').style.visibility = 'hidden';
        document.getElementById('planettext').style.visibility = 'hidden';
    }

}

Mercury = function(){
     questions = ["Antikens greker trodde Merkurius var två planeter, då den syntes på morgonen och på kvällen. De kallade dessa således för Apollon och Hermes. Men vem kom på att Apollon och Hermes var samma planet?", 
    "Varifrån har Merkurius fått sitt namn?",
     "Hur lång tid tar det för Merkurius att göra ett omlopp kring solen?"];
     answers = [["Pythagoras.", "Galileo Galilei.", "Albert Einstein."], 
    ["Från den romerska guden av handel och köpmän", "Från grundämnet kvicksilvers engelska namn",
     "Från en superhjälte i Marvels serietidningar"],
     ["88 dagar", "12 dagar", "123 dagar"]];
    correctAnswers = ["Pythagoras.", "Från den romerska guden av handel och köpmän", "88 dagar"];
    var image = "Images/Planets/Merkurius.png";
    currentPlanet = "MerkuriusButton";
    LoadImage(image);
    SetupQuiz();
}
Venus = function(){
     questions = [" Hur många månar har Venus?",
     "Venus har ett annat smeknamn på flertalet språk. Vilket?", 
     "Hur varmt är det på Venus?"];
     answers = [["0 st. ", "1 st.", "2 st."],
     ["Polstjärnan.", "Morgonstjärnan / Aftonstjärnan.", "Nordstjärnan."], 
     ["+30 grader.", "+200 grader.", "+450 grader."]];
     correctAnswers = ["0 st.", "Morgonstjärnan / Aftonstjärnan.", "+450 grader."];
    var image = "Images/Planets/Venus.jpg";
    currentPlanet = "VenusButton";
    LoadImage(image);
    SetupQuiz();
}
Earth = function(){
     questions = ["Vilket var det första djuret i rymden?",
     "Vilket år lämnade de första människorna jordens atmosfär?", 
     "Vilket århundrade accepterades uppfattningen att jorden snurrar runt solen?"];
     answers = [["Apa.", "Råtta.", "Hund."],
     ["1951.", "1956.", "1961."], 
     ["År 1500-1600.", "År 1700-1800.", "År 1800-1900."]];
    correctAnswers = ["Hund.", "1961.", "År 1500-1600."];
    var image = "Images/Planets/Earth.jpg";
    currentPlanet = "JordenButton";
    LoadImage(image);
    SetupQuiz();
}
ISS = function(){
     questions = ["När skickades Internationella Rymdstationen upp i omlopp?", 
    "Hur många astronauter bor på stationen samtidigt?",
     "2006 åkte den förste svensken i rymden till ISS. Vad hette han?"];
     answers = [["1945.", "1969.", "1998."],
     ["3-6.", "10-15.", "25-30."],
      ["Christer Fuglesang.", "Malin Persson.", "Mikael Persbrandt."]];
    correctAnswers = ["1998.", "3-6.", "Christer Fuglesang."];
    var image = "Images/Planets/ISS.jpg";
    currentPlanet = "ISSButton";
    LoadImage(image);
    SetupQuiz();
}
Mars = function(){
     questions = ["Varifrån kommer Mars karaktäristiska röda färg?",
     "2012 landade en liten rymdsond på Mars, med uppgift att leta efter livstecken. Vad heter den?", 
     "Mars har två små månar i omlopp. Vad heter månarna?"];
     answers = [["Den uppstår för att ljuset bryts på ett speciellt sätt på Mars yta",
     "Den beror på att Mars yta är täckt av järnoxid, alltså rost", 
     "Mars atmosfär är täckt av gaser som ger illusionen av en röd färg"],
     ["Explorer", "Curiosity", "Wanderer"], 
     ["Phobos och Deimos", "Cordelia och Ophelia", "Piff och Puff"]];
    correctAnswers = ["Den beror på att Mars yta är täckt av järnoxid, alltså rost", "Curiosity", "Phobos och Deimos"];
    var image = "Images/Planets/Mars.png";
    currentPlanet = "MarsButton";
    LoadImage(image);
    SetupQuiz();
}
Jupiter = function(){
     questions = ["Vad består Jupiter av?",
      "När man ser på Jupiter kan man se en stor cirkel på planeten. Vad kallas denna cirkel?", 
      "Jupiter har besökts ett flertal gånger av rymdsonder genom historien. Men hur många?"];
     answers = [["Gas", "Is", "Kvicksand"], 
     ["Stora röda fläcken", "Jupiters öga", "Stormringen"], 
     ["3 st.", "5 st.", "9 st."]];
    correctAnswers = ["Gas", "Stora röda fläcken", "9 st."];
    var image = "Images/Planets/Jupiter.jpg";
    currentPlanet = "JupiterButton";
    LoadImage(image);
    SetupQuiz();
}
Saturn = function(){
     questions = ["Vad består Saturnus ringar av?", 
     "Hur många månar har Saturnus?",
      "1980 och 1981 anlände två rymdsonder till Saturnus för att undersöka och samla material till forskning. Vad hette de två sonderna?"];
     answers = [["Is och kometfragment.", "Sand och metallpartiklar.", "Gaser."],
      ["12 st.", "62 st.", "43 st."],
       ["Voyager 1 och Voyager 2.", "Opportunity och Discovery.", "New Horizons och Adventurer."]];
    correctAnswers = ["Is och kometfragment.", "62.", "Voyager 1 och Voyager 2."];
    var image = "Images/Planets/Saturn.jpg";
    currentPlanet = "SaturnusButton";
    LoadImage(image);
    SetupQuiz();
}

Uranus = function(){
     questions = ["Vilket årtionde upptäcktes Uranus?",
      "Uranus har den kallaste atmosfären av alla planeter i solsystemet. Vad är medeltemperaturen i dess atmosfär?", 
      "Uranus har en lutning på ungefär 98°, jämfört med Jordens 23,4°. Det ger ganska märkliga dygn och årstider, ett dygn varierar mellan 17 timmar till 42 jordår. Hur lång är vintern på Uranus?"];
     answers = [["år 1580.", "år 1680.", "år 1780."],
      ["-122 c°.", "-2000 c°.", "-224 c°."],
       ["3 jordår.", "129 jordår.", "42 jordår."]];
    correctAnswers = ["år 1780.", "-224 c°", "42 jordår"];
    var image = "Images/Planets/Uranus.jpg";
    currentPlanet = "UranusButton";
    LoadImage(image);
    SetupQuiz();
}
Neptune = function(){
     questions = ["Varför är Neptunus blå?",
      "Hur många månar har Neptunus?",
       "Vilket årtionde upptäcktes Neptunus?"];
     answers = [["Den består av vatten.", "Den består av gaser, som gör den blå.", 
     "Den får inget solljus och blir blå pga detta."],
      ["1.", "6.", "14."],
       ["1900.", "1870.", "1840."]];
    correctAnswers = ["Den består av gaser, som gör den blå.", "14", "1840."];
    var image = "Images/Planets/Neptune.jpg";
    currentPlanet = "NeptunusButton";
    LoadImage(image);
    
    SetupQuiz();

}
Pluto = function(){
    questions = ["När upptäcktes Pluto?",
      "Varifrån har Pluto fått sitt namn?",
       "Pluto är egentligen inte en planet som de andra i solsystemet. Vad är Pluto egentligen för sorts himlakropp?"];
    answers = [["1845", "1930", "1671"], 
     ["Från Musse Piggs hundkompis.", "Från den romerska guden för underjorden.", "Pluto är radioaktiv så namnet togs från det radioaktiva ämnet plutonium."],
      ["En asteroid.", "En dvärgplanet.", "En måne."]];
    correctAnswers = ["1930.", "Från den romerska guden för underjorden.", "En dvärgplanet."];
    var image = "Images/Planets/Pluto.jpg";
    currentPlanet = "PlutoButton";
    LoadImage(image);
    SetupQuiz();

}

Sun = function(){
    questions = ["Hur många gånger mer väger solen än Jorden?", "Hur varm är mitten av solen?", 
    "Ungefär hur många minuter tar det för solens ljusstrålar att nå Jorden?"];

    answers = [["333,000 gånger mer än Jorden.", "15,000 gånger mer än Jorden.", 
    "100,000,000 gånger mer än Jorden."], 
    ["180,000 c°.", "15,000,000 c°.", "20,000 c°."],
     ["3.", "15.", "8."]];
    correctAnswers = ["333,000 gånger mer än Jorden.", "15,000,000 c°.", "8."];
    var image = "Images/Planets/Sun.jpg";
    currentPlanet = "SolenButton";
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

    document.getElementById('frågetext').innerHTML = questions[qnumber];
    document.getElementById('frågetext').style.visibility = 'visible';

}



Click= function(id){
    //kolla om svaret var rätt
    var buttonValue = document.getElementById(id).value;

    if(buttonValue == correctAnswers[qnumber]){
        alert("Du hade rätt!");
        rightanswers++;
        document.getElementById('points').innerHTML = rightanswers;
    } else {
        alert("Du hade fel, rätt svar är: " + correctAnswers[qnumber]);
        wronganswers++;
    }
    

    if(qnumber == 2){
        qnumber = 0;
        UnloadImage();
        //göm knappar, ta bort quizmaterial osv.
        visitedPlanets++;
        if(visitedPlanets==11){
            LoadEndPage();
        }
    }else{
        qnumber++;
        SetupQuiz();       
    }
}

LoadEndPage = function(){
    localStorage.setItem('yourpoints',rightanswers.toString());
    window.location ="SlutSida.html";
}
}