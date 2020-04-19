/*
Creating an object:

Write the code, one line for each action:
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/


user = {};
user.name = "John";
showKeys(user);
user.surname = "Smith";
showKeys(user);
user.name = "Pete";
showKeys(user);
delete user.name;
showKeys(user);

function showKeys(userName){
	for(key in userName){
		alert(key);
		alert(userName[key]);
	}
}