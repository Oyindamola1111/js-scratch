
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


let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    }else{
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
 console.log(fastestRace);























