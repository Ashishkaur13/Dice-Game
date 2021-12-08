alert("HI, Welcome to the dice game! Decide you are player 1 or 2 and let the game begin!")

var RandomNumber1 = Math.floor(Math.random() * 6 ) + 1 ;

var DiceNumber = "dice" + RandomNumber1 + ".png"; //dice1.png - dice6.png

var ImageSource = "images/" + DiceNumber;

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src", ImageSource);  //1st number is randomised

var RandomNumber2 = Math.floor(Math.random() * 6 ) + 1;  //1-6 

var Imagesource2 = "images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",Imagesource2);


if (RandomNumber1 > RandomNumber2) 
{
document.querySelector("h1").innerHTML = "🚩 Player 1 wins" ;
}
else if (RandomNumber1 < RandomNumber2) 
{
document.querySelector("h1").innerHTML = "Player 2 wins🚩" ;
}
else if (RandomNumber1 = RandomNumber2) 
{
document.querySelector("h1").innerHTML = "Its a Draw!" ;
}
