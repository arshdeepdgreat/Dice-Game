var random1=(Math.floor(Math.random()* 6) ) + 1;
var random2=Math.floor(Math.random() * 6) + 1;
var sr1="images/Dice"+random1+".png";
var sr2="images/Dice"+random2+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src" , sr1);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src" , sr2);