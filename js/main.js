//this is a basic js alert
alert('Hello World');

//to test if the code works
console.log("hello");
console.log(2+2);

//variables can be set to represent a string denoted by "" or numbers
var name = "Gough";
console.log(name);

//an array can consisted of different types of data such as strings and numbers
//an array is denoted by []
//the first item in an array is identified as 0
var myFriends = ["John", 8, 23, 34, 65];
var list = ["soccer", "fencing", "boxing"];
console.log(myFriends[0]);
console.log(myFriends, list);

//an object is denoted by {}
var car = {
	make: "Toyota",
	model: "Prius"
};
//dot notation and bracket notation
console.log(car.model);
console.log(car['make']);

//if statement: run according to given
if (5<3) {console.log("this is not true")} else{alert("five is not less than three")};

//innerHTML: change elements on html when clicked
function change(){
	document.getElementById('el').innerHTML = "Happy Birthday!"
}

//give feedback based on input
function addnumber(number1, othernumber){
	return number1 + 10 + othernumber;
};
console.log(addnumber(2,5));

//for loop: loop for a certain amount of time 
for (var i=2; i<=15; i++){console.log(i)} 

//loop while statement is satisfied
x = 6
while(x<10){
	console.log("On number" + x); x++
}



var names = ["John", "Zac","Mary", "Katie"];
console.log(names[3])