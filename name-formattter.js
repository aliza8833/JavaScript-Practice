// Capitalize the first letter of the name

Name = prompt("whats your name?");

alert("Hello " + Name.slice(0,1).toUpperCase()+ Name.slice(1,Name.length).toLowerCase());
