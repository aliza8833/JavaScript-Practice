count = 99;
while(count>=0){
if (count == 0){
 var FirstLine = "No more bottles of beer on the wall, no more bottles of beer.";
 console.log(FirstLine);
 
 var SecondLine = "Go to the store and buy some more, 99 bottles of beer on the wall.";
  console.log(SecondLine);
 console.log("");
}

else{ 
var FirstLine = count + " bottles of beer on the wall, " + count + " bottles of beer.";
 console.log(FirstLine);
 
 var SecondLine = "Take one down and pass it around, "+ (count-1) + " bottles of beer on the wall.";
  console.log(SecondLine);
  console.log("");

}
 
 count--;

}