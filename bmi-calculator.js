// Write the function to calculate the BMI 

// BMI = Weight / height^2
// Write your height and weight this will tell you wether you are under weight, normal weight or Over Weight.

function bmiCalculator(weight,height){
    bmi =  Math.floor(weight / height ** 2);
     var interpretation;
     if (bmi <18.5){
     interpretation = "your bmi is " + bmi + "  and you are underweight";
     }
     if (bmi >= 18.5 && bmi < 24.9){
      interpretation = "your bmi is " + bmi + " and you have normal weight";
     }
     else {
      interpretation = "your bmi is  " + bmi + " you are overweight";
     }
     return interpretation;
    }
    var bmi = bmiCalculator(65, 1.8);
    console.log(bmi);  
    
    /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
    bmi should equal 20 when it's rounded to the nearest whole number.*/