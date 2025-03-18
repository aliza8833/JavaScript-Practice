// Write a function to check whether the number is multiple of 3 , 5 or both.
// If number is multiple of 3 => Print Fizz
// If Number is Multiple of 5 => Print Buzz
// If number is multiple of Both 3 and 5 => Print FizzBuzz


var num = [];
var count = 1;
function fizzbuzz(){
if(count % 3 == 0  && count % 5 == 0){
  num.push( "FizzBuzz")
   count++ ;}
if(count % 5 == 0){
num.push(  "Buzz");
  count++;
}
if(count % 3 == 0){
  num.push( "Fizz");
  count++;
 }
else{
  num.push(count);
  count++;
}
 

 console.log(num);
 
}

