function hello(callback) {
    console.log("hello world") ;
    callback() ; 
}


function helloAgain() {
    console.log("what up boy") ;
}

hello(helloAgain) ;