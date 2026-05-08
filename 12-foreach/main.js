let number = [1,2,3,4,5] ;


number.forEach((element) => {
    element = element * 2 ;
    console.log(element) ;
}) ;


function doubled( element,index,array) {
    array[index] = element * 2 ; 
}

function display(element) {
    console.log(element) ;
}