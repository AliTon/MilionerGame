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


],
 harcer = [
                {   
                    question: "Vor@ karoio anunneric che?",
                    variantA: "marlencho",
                    variantB: "juju",
                    variantC: "moxes",
                    variantD: "Karapet",
                    currectAnswer: "Karapet"
                },
                {
                    question: "varos varos,me hrashq...?",
                    variantA: "Tuz",
                    variantB: "kuz",
                    variantC: "ghar",
                    variantD: "kilki",
                    currectAnswer: "Tuz"
                },
                {   
                    question: "73483+382548325478 = ???",
                    variantA: "Fransia",
                    variantB: "6666677777",
                    variantC: "Venecia",
                    variantD: "Moskva",
                    currectAnswer: "6666677777"
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


var MyGame = function(questions){
    this.questions = questions;
    this.interval;
    this.timerinterval;
    this.count = 0;
    this.time = 30;
    this.randomChoseElement = this.questions[Math.floor(Math.random() * this.questions.length)];
    
        this.nextQuestion = () => {
           clearInterval(this.timerinterval);
        this.time = 30;
        this.startTimer();
        this.myRan();
        this.getElement(this.randomChoseElement);
        this.interval = setTimeout( () => { this.nextQueston() }, 30000)
   };
    
    this.playBtn = () => {
        this.myRan();
        this.nextQuestion();
        var buttonElement = document.getElementById('buttonElement');
        buttonElement.parentNode.removeChild(buttonElement);
   };
    
 
    
    
    this.myRan = () => {
         this.randomChoseElement = this.questions[Math.floor(Math.random() * this.questions.length)];
    if(this.questions.length > 0){
         for(var i = 0, max = this.questions.length; i < max; i++){
           if( this.randomChoseElement === this.questions[i] ){
                              console.log(this.questions);

               this.questions.splice(i, 1);
           };
       };
         return this.randomChoseElement;
   } else this.restartGame();
    };
    
   
    this.getElement = () => {
                if(this.randomChoseElement){
        document.getElementById("questionLine").innerHTML = this.randomChoseElement.question;
        document.getElementById("select1").innerHTML = this.randomChoseElement.variantA;
        document.getElementById("select2").innerHTML = this.randomChoseElement.variantB;
        document.getElementById("select3").innerHTML = this.randomChoseElement.variantC;
        document.getElementById("select4").innerHTML = this.randomChoseElement.variantD;} 
    };
    
    this.restartGame = () => {
 
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
            document.getElementById("result").innerHTML = `you have ${this.count} successful answer ${6 - this.count } wrong `;
    };

    this.startTimer = () => {
                    let timerElement = document.getElementById("timer");
            timerElement.innerHTML = this.time;
            this.timerinterval = setInterval(function (){
                this.time--;
                timerElement.innerHTML = this.time;
            },1000);
            time = 30;
    };
    
    this.answer = (index) => {
        clearTimeout(this.interval);
        clearInterval(this.timerinterval);

        switch(index){
            case 1:
                if(this.randomChoseElement.variantA === this.randomChoseElement.currectAnswer)
                { this.count+=1 ;
            console.log(this.count);
                };
                break;
            case 2:
                if(this.randomChoseElement.variantB === this.randomChoseElement.currectAnswer)
               { this.count+=1 ;  
            console.log(this.count);
               };
                break;
            case 3:
                if(this.randomChoseElement.variantC === this.randomChoseElement.currectAnswer)
                { this.count+=1 ; 
             console.log(this.count);
                };
          break;
            case 4:
                if(this.randomChoseElement.variantD === this.randomChoseElement.currectAnswer)
                { this.count+=1 ; 
            console.log(this.count);
                } ;
            };
        this.nextQuestion();
        }
    
    };


let initGame = () => {
   let game = new MyGame(harcer);
   game.playBtn(); 
    
    var btn1 = document.getElementById("select1");
        btn1.addEventListener("click", function(){
            game.answer(1)});
    
    var btn2 = document.getElementById("select2");
        btn2.addEventListener("click", function(){
            game.answer(2)});
    
    var btn3= document.getElementById("select3");
        btn3.addEventListener("click", function(){
            game.answer(3)});
    
   var btn4 = document.getElementById("select4");
        btn4.addEventListener("click", function(){
            game.answer(4)});
    
};
