let firstname = "joedcarlime donaire" ;

console.log(firstname.charAt(4)) ;
console.log(firstname.indexOf("e")) ;
console.log(firstname.lastIndexOf("e")) ;
console.log(firstname.length) ;

let trimmed = firstname.trim() ;
console.log(trimmed) ;

console.log(firstname.toUpperCase())
console.log(firstname.toLowerCase())
// console.log(firstname.repeat(10)) ;

let startsWith = firstname.startsWith("o") ;
console.log(startsWith) ;

let endsWith = firstname.endsWith(" ") ;
console.log(endsWith) ;

console.log(firstname.includes("d")) ;

let replace = firstname.replaceAll(' ', "-") ;
console.log(replace) ;

let pad = firstname.padStart(20, "0") ;
console.log(pad) ;

let padend = firstname.padEnd(20, "2") ;
console.log(padend) ;