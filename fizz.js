/* Fizz Buzz Application*/
/* done by Pavan Kumar Kodali*/

$(document).ready(function(){

//enter a input to begin
                    var enterdigit = prompt('Please enter a Number');
//convert string to number
        var digit = +enterdigit;
        
        //function goes here
        
        function fizzbuzz() {
            for(x=1; x<=digit; x++) {
   if( (x%5==0) && (x%3==0)) {
document.write("Fizz Buzz")
   }
       else if(x%3==0) {
document.write("Fizz")    
       }
       else if(x%5==0) {
document.write("Buzz") 
       }
       else {
document.write(" " + x + " ")    
       }
   
        }
        };
    if(isNaN(digit)){
    prompt("Please enter number");
    }
    else if(digit %1 !==0) {
    prompt("please enter a whole number");
    }
    else {
    fizzbuzz();
    }
    
    $("#list").append(fizzbuzz());
    $(document).on('click', '#reset', function(){
    $("#list").empty();
    })
        
});