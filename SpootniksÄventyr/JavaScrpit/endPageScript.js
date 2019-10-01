window.onload = function(){

    

    Credit = function(){
        window.location="Credit.html";
    }

    SpelaIgen = function(){
        window.location="Intro.html"
    }

    SetPoints = function(){
        var yourpoints = localStorage.getItem('yourpoints');
        document.getElementById('antalpoäng').innerHTML = yourpoints;
        if(yourpoints < 10){
            document.getElementById('feedback').innerHTML = "Bra kämpat! Tyvärr räckte poängen inte riktigt till en vinst i tipsrundan. Du kanske vill spela om spelet för att försöka igen?";
        }
        else if(yourpoints >10 && yourpoints < 20){
            document.getElementById('feedback').innerHTML = "Bra jobbat! Du kan en hel del om rymdhistoria ändå. Dock finns det fortfarande saker kvar att lära, du kanske vill spela igen och se hur det går?";
        }
        else if(yourpoints > 20 && yourpoints < 33){
            document.getElementById('feedback').innerHTML = "Bra jobbat, nästan där! Snart är du en riktig expert på rymdhistoria. Du kanske vill spela en gång till för att sätta de sista poängen?";
        }
        else if(yourpoints == 33){
            document.getElementById('feedback').innerHTML = "Superbra jobbat, ni vann tipsrundan! Du är ett riktigt proffs på människans historia med rymden!";
        }

    }

    SetPoints();

}