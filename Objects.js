/*
Creating an object:

Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/


let user = {};
user.name = "John";
showKeys(user);
user.surname = "Smith";
showKeys(user);
user.name = "Pete";
showKeys(user);
delete user.name;
showKeys(user);

function showKeys(userName){
	for(let key in userName){
		alert(key + ": " + userName[key]);
	}
}

/*
Checking for emptiness:

Write the function isEmpty(obj) which returns true if the object 
has no properties, false otherwise.
*/

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj){
	//if the parameter is not an object, do not proceed
	if (typeof(obj) != "object") return undefined;
	if (numberOfKeys(obj) == 0) return true;
	return false;
}

function numberOfKeys(obj){
	//if the parameter is not an object, do not proceed
	if (typeof(obj) != "object") return undefined;
	let keysNo = 0;
	for (let key in obj){
		keysNo++;
	}
	return keysNo;
}

/*
Summing values from keys

We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
*/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

alert("The sum of salaries is: R$ " + sumSalaries(salaries));

function sumSalaries(obj){
	//if the parameter is not an object, do not proceed
	if (typeof(obj) != "object") return undefined;
	let sum = 0;
	for (let key in obj){
		sum += obj[key];
	}
	return sum;
}

/*
Doubling values from numeric properties

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

showKeys(menu);
multiplyNumeric(menu);
showKeys(menu);

function multiplyNumeric(obj){
	//if the parameter is not an object, do not proceed, but indicate that there was a mistake
	if (typeof(obj) != "object") return undefined
	for (let key in obj){
		if (typeof(obj[key]) == "number") obj[key] *= 2;
	}
}

/*
Using 'this' in object literal

Here the function makeUser returns an object.
What is the result of accessing its ref? Why?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?

*/

let userTested = makeUserTested();
alert('This, in this case, doesn\'t work: ' + userTested.ref.name);
userTested = makeUserThatWorks();
alert('This, in this case, works: ' + userTested.ref().name);

function makeUserTested(){
	return{
		name: 'John',
		ref: this
	};
};

//it shows nothing. There is an error, because makeUserTested 
//is defined as a function, not a method with the dot notation.
//Corrections:

function makeUserThatWorks(){
	return{
		name:'John',
		ref: function(){
			return this;
		}
	};
};

/*
Create a calculator

importance: 5
Create an object calculator with three methods:
read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
	value1: 0,
	value2: 0,

	read: function(){
		value1 = parseInt(prompt("Value 1: ","0"));
		value2 = parseInt(prompt("Value 2: ","0"));
	},
	
	sum: function(){
		return value1 + value2;
	},

	mul: function(){
		return value1 * value2;
	}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*
Chaining

importance: 2
There’s a ladder object that allows to go up and down:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1


Modify the code of up, down and showStep to make the calls chainable, like this:
ladder.up().up().down().showStep(); // 1

Such approach is widely used across JavaScript libraries.
*/

let ladder = {
	step: 0,
	up() {
	  this.step++;
	  return this;
	},
	down() {
	  this.step--;
	  return this;
	},
	showStep: function() { // shows the current step
	  alert( this.step );
	  return this;
	}
  };

  ladder.up().up().down().showStep();

/*
Create new Calculator

importance: 5
Create a constructor function Calculator that creates objects with 3 methods:
read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/  

function NewCalculator(){
	this.value1 = 0;
	this.value2 = 0;
	this.read = function(){
		value1 = Number(prompt("Value 1: ","0"));
		value2 = Number(prompt("Value 2: ","0"));
	},
	this.sum = function(){
		return value1 + value2;
	},

	this.mul = function(){
		return value1 * value2;
	}
}

let newCalc = new NewCalculator();
newCalc.read();
alert("Sum= " + newCalc.sum() );
alert("Mul= " + newCalc.mul() );

/*
Create new Accumulator

importance: 5
Create a constructor function Accumulator(startingValue).
Object that it creates should:
Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.
Here’s the demo of the code:
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
*/

function Accumulator(startingValue){
	this.currentValue = Number(startingValue);
	this.read = function(){
		newNumber = Number(prompt("What value would you like to add to current value?","0"));
		this.currentValue += newNumber;
	};
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.currentValue); // shows the sum of these values