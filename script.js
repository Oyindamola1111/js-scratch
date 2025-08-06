
                      // BUILD A PASSENGER COUNTER APP 

// let saveEl = document.getElementById("save-el")
// let plus = document.getElementById("counting")
// let count = 0

// function increment() {
//     count=count+1
//     plus.textContent=count
// }

// function save() {
//     let dashCount = count + " - "
//    saveEl.textContent=saveEl.textContent+dashCount
//    plus.textContent=0
//    count = 0
// }



// THROW A NEW PARAGRAPH EROR ON A PURCHASE BUTTON WHEN CLICKED

// let shoe = document.getElementById("error")
// function buyError() {
//     shoe.innerText="please something went wrong, try again"
//     shoe.style.color="red"
// }



                        // BUILD A CALCULATOR

// let num1 =8
// let num2 = 2
// let total = document.getElementById("sum-el")

// document.getElementById("num1-el").textContent=num1
// document.getElementById("num2-el").textContent=num2 

// function Addition() {
//     let adding =num1+num2
// total.textContent="Sum: " + adding

// }


// function subtract() {
//     let adding =num1-num2
// total.textContent="Sum: " + adding

// }

// function divide(){
//     let adding=num1/num2 
//     total.textContent="sum:" +adding
// }

// function multiply() {
//     let adding=num1*num2
//     total.textContent="sum: "+ adding
// }


// BUILD A BLACKJACK GAME

//random number between 2-11
// let firstCard=4
// let secondCard=8
// let total= firstCard+secondCard
// console.log(total);

// if (total< 21) {
//     console.log("you have earned a new card");
// }else if (total === 21) {
//     console.log("yeeaaahhh!!! you Won");
// }else if(total > 21) {
//  console.log("Sorry you lost!");
// }


// let age=21 
// if (age < 21) {
//     console.log("you can not enter the club");
// }else{
//     console.log("Welcome!");
// }




// PROJECT TO CHECK IF AGE 100 IS ELIGIBLE FOR KINGS CARD


// let input=document.getElementById('box');
// let appear=document.getElementById('para');

// function ageRange() {

// const age = parseInt(input.value);

// if (isNaN(age)) {
//   appear.textContent = "enter a valid number";
// }else if (age === 100) {
//    appear.textContent = "Here is your birthday card from the king 😎";
//    appear.style.color="green"
// } else if(age<100){
//    appear.textContent="you are not eligible"
//    appear.style.color="red"
// }else if(age>100){
//    appear.textContent="you have gotten a card already"
// }
// }



// let firstCard= 10
// let secondCard=11
// let cardArray =[firstCard,secondCard]
// let sum = firstCard+secondCard
// let hasBlackJack=false
// let isAlive = true
// let message = ""
// let appear= document.getElementById("display")
// let show=document.getElementById("again")
// let sumEl=document.getElementById("sum-el")
// let cardEl=document.getElementById("card-el")

// function start() {
//     render()
// }


// function render() {
//     cardEl.textContent="Card: " + cardArray[0]+ " " +cardArray[1] 
//     sumEl.textContent="sum: "+ sum
//    if (sum <= 20) {
//  message = "do you want to draw a new card"
 
// }else if (sum === 21) {
//  message = "wohoo! you have got a blackjack"
 
//  hasBlackJack=true
// }else{
//     message="you are out of the game"
//     isAlive=false 
// }

// appear.textContent=message
// show.textContent=message
// }

// function start() {
//     let card=6
//     sum +=card
//     cardArray.push(card)
//     console.log(cardArray);
    
// }

// let experience = ["sail cohort 5","no other experience"]
// console.log(experience[1]);
// console.log(experience[0]);


// let education = ["uni ilorin","barachel model college"]
// console.log(education[1]);
// console.log(education[0]);


          // ARRAYS
// let licenses= ["none for now", "goin for one soon"]
// let skill=["football", "tenis","coding"]
// console.log(skill[2]);
// console.log(skill[1]);
// console.log(skill[0]);

// let myself = ["sanusi oyindamola", 30, true]
// let newMessage="same here"
// myself.pop()
// console.log(myself);

// const experience = [
//     "software developer",
//     "real estate",
//     "business man", 
//     "courier","vendor"]
// const education= [
//     "unilorin",
//     "barachel",
//     "hebron"]
// const licenses = [
//     "github",
//     "solo dev",
//     "aquatic hero",
//     "savings"]
// const skills = [
//     "good communication skills",
//     "work under pressure",
//     "good impression"]
//     console.log(skills[1]);
//     console.log(skills[0]);
//     console.log(skills[2]);

// const yourself = ["damola",30,true]
// const messages = [
//     "hey,how are you",
//     "im great, thank you",
//     "all good"
// ]
//     const newmessages = "same here"
//     messages.push(newmessages)
//     console.log(messages);

//     messages.pop()
//     console.log(messages);


// FOR LOOP
// for (let count = 10;count < 101;count+= 10) {
//     console.log(count);   
// }
    

// LOOPS AND ARRAYS

// let chat = ["who are we","joy is coming",800,"now you see me",false,"what if",true,"long life"]
// for(let i = 0;i < chat.length; i+= 1) {
//     console.log(chat[i]); 
// }
//  let cards = [7,3,9]
//  for(let i = 0; i < cards.length; i += 1) {
//     console.log(cards[i]);
//  }

//  let sentence = ["Hello","my","name","is","dami","yoyo"]
//  let greetingEl= document.getElementById("greeting-el")
//  for(let i = 0; i < sentence.length; i += 1) {
//    greetingEl.textContent += sentence[i] + " "
//    console.log(greetingEl); 
//  }


// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     }else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
//  console.log(fastestRace);

// let player1Time=100
// let player2Time=200
// let total = player1Time + player2Time

// function getAllPlayers() {
//    return total
// }

// let totaltime=getAllPlayers()
// console.log(totaltime );

// function getRandomCard() {
//    return 5
// }
// getRandomCard()
// console.log(getRandomCard());



                      // MATH. RANDOM
// let randomNumber = Math.random()*6
// console.log(randomNumber);


                      //MATH.FLOOR
// let floored = Math.floor(4.85623)  
// console.log(floored);


//to modify expression so that we get a range from 1-6
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber);

// function rollDice() {
//     let cal = Math.floor(Math.random()*6)+ 1
//     return cal 
// }
// console.log(rollDice());


// function getRandomCard() {
   
//     let randomCard = Math.floor(Math.random()*13) + 1
//     return randomCard
// }
// console.log(getRandomCard());


           // IF STATEMENT
           
           // THE LOGICAL AND OPERATOR

let isAman = false
let notAman= false

if(isAman === false && notAman === false){
       solution()
        
}

function solution() {
    console.log("showing the solution");
};


// THE LOGICAL OR OPERATOR

// let likeDocumentaries = true
// let likeStartUps = false

// if(likeDocumentaries === true || likeStartUps === false) {
//    recommendMovies()
// };

// function recommendMovies() {
//     console.log("hey, check out this new film");  
// };


                        //  OBJECT

// let airbnb= {
//     name:"house master",
//     age:50,
//     isAman:true,
//     many:["carribean", "sholno"]
// }

// console.log(airbnb.age);
// console.log(airbnb.many);
// console.log(airbnb);

// let player={
//     name:"per",
//     chips:234
// }

// let playerEl=document.getElementById("player-el")
// playerEl.textContent=player


//  RECAP

// const myAge= 200
// const humanDogRatio=8
// const myDog=myAge*humanDogRatio
// console.log(myDog);

// let bonusPoint=50
// console.log(bonusPoint);

//  bonusPoint=bonusPoint+50
//  console.log(bonusPoint);

//  bonusPoint=bonusPoint-75
//  console.log(bonusPoint);

//  bonusPoint=bonusPoint+45
//  console.log(bonusPoint);
 
// function number() {
//     console.log(42);  
// };
// number()

// function lapTime() {
//     let lap1=20
//     let lap2=10
//     let lap3=12
//     let lap4=2
//     console.log(lap1+lap2+lap3+lap4); 
// };
// lapTime()

// let count = 0
// let counting = document.getElementById("add")

// function increment() {
//     count=count+1
//     counting.innerText=count
// };
// increment()

// function decrement() {
//     count= count-1
//     counting.innerText=count
// };

// let name = "this is the main jinx"
// let message="hello"
// let myMessage = message + " "+ name
// console.log(myMessage);

// let name= "sanusi oyindamola"
// let greeting="how are you doing today"
// myGreetings=name + " " + greeting
// console.log(myGreetings);

// let welcomeEl = document.getElementById("welcome-el")
// let name="joy omano"
// let greetings= "wlecome to the club"
// welcomeEl.innerText=name + " " + greetings

// let welcomeEl = document.getElementById("welcome-el")
// let firstName = "SANUSI";
// let lastName = "OYINDAMOLA"
// let myName = firstName + " " + lastName
// welcomeEl.innerText=myName

// let name = document.getElementById("greeting")
// let showing = document.getElementById("show")


//    function callName() {
//     let allNames="sanusi oyindamola iyanu"
//     name.innerText=allNames
//     showing.innerText=`welcome: ${name.innerText}`
//    };
//    callName()

//    let myError = document.getElementById("error")
//    function seeError() {
//     myError.innerText="something went wrong, please try again"
//    };
 
// let count = 0
// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent
// document.getElementById("num2-el").textContent
// let result= document.getElementById("showresult")
//  let counting = document.getElementById("count-el")


// function addition() {
//     let outcome = num1+ num2
//     result.textContent=outcome
// }

// function subtraction() {
//     outcome=num1-num2
//     result.textContent = outcome
// }

// function multiply() {
//     outcome = num1 * num2
//     result.textContent = outcome
// }

// function division() {
//     outcome = num1 / num2
//     result.textContent=outcome
// }


// function increment() {
//     count = count + 1
//     counting.innerText=count
// };

// let firstCard= 9
// let secondCard= 5
// let display= document.getElementById("show")
// let sum = firstCard + secondCard

// function comeAlive() {
//     display.textContent=`the total sum of your cards is: ${sum}`
//     if (sum < 2) {
//        alert(
//         "sorry number too low 😒"
//        )
//     } else if (sum === 11) {
//         alert("wow you won !!!!!! 😂")
//     }else if (sum > 11) {
//        alert("you lost with your full chest 🤥")
//     }
// };
// comeAlive()

let age = 71

if (age < 21) {
   console.log(" sorry you are too young and cannot go into the club");
} else if (age >20) {
   console.log("you are eligible to enter the club");
}else{
    console.log("error");
    
}







   







 

 



 
                  



 






















