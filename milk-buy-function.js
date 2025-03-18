
//Write the function to instruct the robot to buy you milk and return the change

function getMilk( money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
   
   bottles =Math.floor(money / 1.5);
   console.log("  get me " + bottles + "  bottles of milk")
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(5);