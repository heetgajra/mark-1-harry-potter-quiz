var readlineSync = require("readline-sync")
var score = 0
var userName = readlineSync.question("wizard wants to know your name ! ");
console.log("welcome " + userName + " to the quizz of heet's hell ! ")

var highScore = 0
function game(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase
     ()){
    console.log(" fantastic job ! you received a point ")
    score = score + 1 
    
  }else{
    console.log(" ooooops ! you lost a point ")
    score = score - 1 
  }
  console.log("your score is " + score);
  console.log("                ")
}


var questions =[{
  question: " In what house did the Sorting Hat almost put Harry ? ",
  answer: "slytherin"
}, {
  question: " What subject does Professor McGonagall teach? ",
  answer: "Transfiguration" 
}, {
  question: " What position does Harry play on the Quidditch team?",
  answer: "seeker"
} ,{
  question: "What is Fluffy?",
  answer: "dog"
},{
  question: "What dark wizard did Albus Dumbledore defeat in 1945?",
  answer: "grinderwarld"
},{
  question: "What is Tom Riddle's middle name?",
  answer: "Marvolo"
},{
  question: "How did Harry and Ron get to Hogwarts their second year?",
  answer: " flying car"
}
  ]

for (var i=0; i< questions.length; i++){
  var currentQuestion = questions[i]
  game(currentQuestion.question, currentQuestion.answer)
}
console.log(" you achieved a score of ", score)
console.log("_______________")
console.log("you made a high score! ", score)
console.log("_______________")