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