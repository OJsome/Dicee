    //create a variable to store the random figure
var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//give the variables more friends to play with..
var imageSourceName1 = "images/dice"+randomNumber+".png";
var imageSourceName2 = "images/dice"+randomNumber2+".png";


//Choose random images by editing the src in the img tag using qeuerySelector
document.querySelector(".img1").src = imageSourceName1;
document.querySelector(".img2").src = imageSourceName2;

if(randomNumber > randomNumber2){
    document.querySelector(".heading").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector(".heading").innerHTML = "Draw!";
}



