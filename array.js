var namesArray = new Array(); // creates a new array

namesArray[0] = "asd";
namesArray[1] = "asd";
namesArray[2] = "asd";
namesArray[3] = "asd";
namesArray[4] = "asd";
namesArray[5] = "asd";
namesArray[6] = "asd";

console.log(namesArray);

var temp = [];
temp.push("asdasd");

console.log(temp);

temp.pop()

// array der kew concatenate kora jai

var a = "a";
var b = "b";

console.log(a + b);

// shift -> array er starting e pop kore
// unshit -> array er starting e push kore
// splice -> specific position theke element delete kore jai oi position e chai new element add kora jai
// specific -> position e element remove kroa jai. original array te kono change kore na

var temp_array = ["a", "b", "c", "d", "e"];

console.log(temp_array);

temp_array.splice(2, 1, "asd", "as");

console.log(temp_array);

console.log(temp_array.sort());
console.log(temp_array.reverse());

var nums = [1, 3, 0, 12, 3];

console.log(nums.sort((a, b) => b-a)); // for sorting numbers

