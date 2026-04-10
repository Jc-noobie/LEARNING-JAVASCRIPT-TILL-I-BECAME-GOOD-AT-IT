
function generatePassword(length , lower, upper, number, symbol ) {

    let lowercase = "abcdefghijklmnopqrstuvwxyz" ;
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ; 
    let numbers = "12345678910" ; 
    let symbols = "!@#$%&_" ;


    let allowedChars  = "" ;
    let password = "" ;

    allowedChars += lower ? lowercase : "" ;
    allowedChars += upper ? uppercase : "" ;
    allowedChars += number ? numbers : "" ;
    allowedChars += symbol ? symbols : "" ;

    for(let i = 0 ; i < length ; i++) {
        let randomindex  = Math.floor(Math.random() * allowedChars.length ) ;
        password += allowedChars[randomindex] ;
    }

    return password ;
}

const passwordLength = 12;  
const includeLower = false ;
const includeUpper = true ;
const includeNumber = false ; 
const includeSymbol = false; 




const password = generatePassword(passwordLength, includeLower , includeUpper , includeNumber , includeSymbol) ;

console.log(password) ;
console.log("hello world") ;