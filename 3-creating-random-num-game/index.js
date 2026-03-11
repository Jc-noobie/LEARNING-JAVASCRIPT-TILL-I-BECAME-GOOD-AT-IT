let number = document.getElementById("num") ;
let guess = document.getElementById('guess') ;
let btn = document.getElementById('submit') ;
let response = document.getElementById('answer-response') ;

let random = Math.floor((Math.random() * 10 )+ 1) ;
console.log(`Random number is ${random}`) ; 

function answerChecker() {
    if(guess.value == random) {
        return true ; 
    } else {
        return false ; 
    }
}

btn.addEventListener("click" ,() => {

    let result = answerChecker() ;
    if(result) {
        response.textContent = "✅" ;
    } else if (!result) {
        response.textContent = "❌" ;
    }
}) ;
