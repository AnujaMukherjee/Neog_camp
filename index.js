var readlineSync = require('readline-sync');
var userName = readlineSync.question('Give me your name ? ');
console.log("welcome"+" " +userName);
var userAnswerAge = readlineSync.question('what is my age   ? ');
//console.log("your age is "+" " +userAnswerAge);
var score = 0;
if(userAnswerAge === "24")
{
  console.log("you are right");
  score = score +1 ;
  console.log ("your score is" +" "+ score) ;
}
else 
{
 console.log("you are wrong");
 score = score - 1 ;
  console.log ("your score is" +" "+ score) ;
}
var userFevBook = readlineSync.question('What is my fev book ? ')
if(userFevBook === "magic of thinking big")
{
  console.log("you are right");
  score = score +1 ;
  console.log ("your score is" +" "+ score) ;
}
else 
{
 console.log("you are wrong");
 score = score - 1 ;
  console.log ("your score is" +" "+ score) ;
}

var userFevMovie = readlineSync.question('What is my fev Movie ? ')
if(userFevMovie === "gravity")
{
  console.log("you are right");
  score = score +1 ;
  console.log ("your score is" +" "+ score) ;
}
else 
{
 console.log("you are wrong");
 score = score - 1 ;
  console.log ("your score is" +" "+ score) ;
}

var userQualiFication = readlineSync.question('What is my Education Qualification ? ') ;
if(userQualiFication  === "B.tech")
{
  console.log("you are right");
  score = score +1 ;
  console.log ("your score is" +" "+ score) ;
}
else 
{
 console.log("you are wrong");
 score = score - 1 ;
  console.log ("your score is" +" "+ score) ;
}