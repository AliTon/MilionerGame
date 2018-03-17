var questions = [
                {   
                    question: "Erb e stexcvel hayoc grer@",
                    variantA: "501",
                    variantB: "401",
                    variantC: "361",
                    variantD: "1",
                    currectAnswer: "401"
                },
                {
                    question: "Exishe...?",
                    variantA: "Charenc",
                    variantB: "Abovyan",
                    variantC: "Duryan",
                    variantD: "Sevak",
                    currectAnswer: "Charenc"
                },
                {   
                    question: "Fransiayi mayraqaxaq@?",
                    variantA: "Fransia",
                    variantB: "Paris",
                    variantC: "Venecia",
                    variantD: "Moskva",
                    currectAnswer: "Paris"
                },
                {   
                    question: "4rd kargi aryun?",
                    variantA: "AB",
                    variantB: "O",
                    variantC: "JK",
                    variantD: "AD",
                    currectAnswer: "AB"
                },
                {   
                    question: "ov es brat?",
                    variantA: "patasxanchisht ",
                    variantB: "du es ",
                    variantC: "na e ",
                    variantD: "esim ov e ",
                    currectAnswer: "patasxanchisht "
                },
                {   
                    question: "?????????? ?????? ?????? ? ?????",
                    variantA: "varA",
                    variantB: "??????",
                    variantC: "varC",
                    variantD: "varD",
                    currectAnswer: "??????"
                },
                {
                    question:"?????????? gggaggaggagg ? ?????",
                    variantA: "vaaaarA",
                    variantB: "vaaaarB",
                    variantC: "Patasxan",
                    variantD: "vaaaarD",
                    currectAnswer: "Patasxan"
                },


];

let interval,
    timerinterval,
    count = 0,
    randomChoseElement = questions[Math.floor(Math.random() * questions.length)];

function startTimer(){
    let timerElement = document.getElementById("timer");
    timerElement.innerHTML = time;
    timerinterval = setInterval(function (){
        time--;
        timerElement.innerHTML = time;
    },1000);
    time = 30;
};

 function restartGame(){ 
    var forma = document.getElementById('myForm');
    forma.parentNode.removeChild(forma);
    var btn = document.createElement("BUTTON");
    btn.setAttribute('id','restartgame');
    btn.addEventListener("click", function(){
        location.reload()
    });
    
    
    var restartBtn = document.createTextNode("Play again");
    btn.appendChild(restartBtn);
    document.body.appendChild(btn);
    document.getElementById("result").innerHTML = `you have ${count} successful answer ${6 - count } wrong `;}
             
function getElement(){
    if(randomChoseElement){
    document.getElementById("questionLine").innerHTML = randomChoseElement.question;
    document.getElementById("select1").innerHTML = randomChoseElement.variantA;
    document.getElementById("select2").innerHTML = randomChoseElement.variantB;
    document.getElementById("select3").innerHTML = randomChoseElement.variantC;
    document.getElementById("select4").innerHTML = randomChoseElement.variantD;} 
};

function playBtn() {
    myRan();
    nextQueston();
    var buttonElement = document.getElementById('buttonElement');
    buttonElement.parentNode.removeChild(buttonElement);
   };

function nextQueston(){
    clearInterval(timerinterval);
    time = 30;
    startTimer();
    myRan();
    getElement(randomChoseElement);
    interval = setTimeout(function newanswer(){ nextQueston() }, 30000)
   };

function myRan(){
     randomChoseElement = questions[Math.floor(Math.random() * questions.length)];
    if(questions.length > 0){
         for(var i = 0, max = questions.length; i < max; i++){
           if( randomChoseElement === questions[i] ){
               questions.splice(i, 1)
           };
       };
         return randomChoseElement;
   } else restartGame();
};

function answer(index){
    clearTimeout(interval);
    clearInterval(timerinterval);
    
    switch(index){
        case 1:
            if(randomChoseElement.variantA === randomChoseElement.currectAnswer)
            { count+=1 ;
        console.log(count);
            };
            break;
        case 2:
            if(randomChoseElement.variantB === randomChoseElement.currectAnswer)
           { count+=1 ;  
        console.log(count);
           };
            break;
        case 3:
            if(randomChoseElement.variantC === randomChoseElement.currectAnswer)
            { count+=1 ; 
         console.log(count);
            };
      break;
        case 4:
            if(randomChoseElement.variantD === randomChoseElement.currectAnswer)
            { count+=1 ; 
        console.log(count);
            } ;
        };
    nextQueston();
};