var structure = {
    input: ".form-control",
    dollar: "#dollar",
    euro: "#euro",
    sterling: "#sterling"
}
var myInput, inputFuunction, elemnt ;
myInput = document.querySelector(structure.input) ;
 inputFuunction = function(){
    elemnt = myInput.value ;
    // dollar value
    document.querySelector(structure.dollar).innerHTML = elemnt / 16.7 
    // Math.floor(elemnt / 18.71);
    // euro value
    document.querySelector(structure.euro).innerHTML = elemnt / 18.71;
    // sterling value
    document.querySelector(structure.sterling).innerHTML = elemnt / 21.11;
}

myInput.addEventListener("keyup" , inputFuunction);