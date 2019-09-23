window.onload = function(){


    var backgorundImg = []
    var imgCounter = 0;



changeImg() = function(){
    var pictureImg = backgorundImg[imgCounter];
    document.body.style.backgroundImage = "url('"+pictureImg+"')";
    imgCounter++;
}


}