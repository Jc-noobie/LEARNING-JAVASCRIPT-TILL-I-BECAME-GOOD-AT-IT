let array = [
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 
    [1,2,3,4,5,6,7,8,9,10] , 

] ;

function checkArray(array) {
    for(let i = 0 ; i < 9 ; i++) {
        for(let j = 0; j < 9; j++) {
            if(array[i][j] === 0 ) {
                return false ; 
            }
        }
    }
    return true ; 
}
const result = checkArray(array) ;

console.log(result) ;
