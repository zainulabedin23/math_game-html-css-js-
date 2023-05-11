// if we click start reset button
var playing=false;
var score;
var action;
var timeRemaining;
var correctAnswer;
document.getElementById("startreset").onclick=
function(){


// if we are playing 
if(playing==true){
//   reload page
location.reload();//reload page
}
else{

// if we are noot playing
// set score is zero
//change mode to playing
playing=true;
score=0;

document.getElementById("scoreValue").innerHTML=score;
// show countdown box;
document.getElementById("timeremaining").style.display="block";
// reduce time by 1sec
timeRemaining=60;
document.getElementById("timeremainingvalue").innerHTML=timeRemaining;
//hide gameover box;
hide("gameOver");

// timeleft?
//yes countinue
// no-gameover
// change button to reset
document.getElementById("startreset").innerHTML="reset game";
//start counter
startCountDown();
// generate new ques
generateQa();

}

}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
//check if we are playing
if(playing==true){
    if(this.innerHTML==correctAnswer){
        score++;
        document.getElementById("scoreValue").innerHTML=score;
        // hide wrong box
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        },1000);
        generateQa();
    }
    else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        },1000);

    }
}
}
}

// if we click on answer box
// check wether we are playing
// yes-answer=correct
// increase score by 1
// how correct box for 1 sec
// generate new q/a
// if answer wrong
// try again box;
//function
//start counter;
function startCountDown(){
    
   action= setInterval(function(){
    if(timeRemaining==0){
        //game over
        stopCountDown(); 
        show("gameOver");
        document.getElementById("gameOver").innerHTML="<p>Game Over! </p><p> Your Score is "+score+" .</p>";
      hide("timeremaining");
 hide("wrong");
 playing=false;
 document.getElementById("startreset").innerHTML="start game";

     }
     
    timeRemaining-=1;
    document.getElementById("timeremainingvalue").innerHTML=timeRemaining;
},1000);

}
//function stopcounter
function stopCountDown(){
clearInterval(action);}
//hide an element;
function hide(ID){
    document.getElementById(ID).style.display="none";
}
//show element;
function show(ID){
    document.getElementById(ID).style.display="block";
 
}
function generateQa(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
       correctAnswer=x*y;
       document.getElementById("question").innerHTML=x+"x"+y;
var correctPositon=1+Math.round(3*Math.random());
document.getElementById("box"+correctPositon).innerHTML=correctAnswer;
//fill one box with the correct answer
// fill other boxes with wrong answer
for(i=1;i<5;i++){
    var answers=[correctAnswer];
    if(i != correctPositon){
    var wrongAnswer;
    do{
        wrongAnswer =(1+Math.round(9*Math.random()))+(1+Math.round(9*Math.random()));
       
    }while(answers.indexOf(wrongAnswer)>-1);
    //wrong answer;
    document.getElementById("box"+i).innerHTML=wrongAnswer;
    answers.push(wrongAnswer);
    }
}
}