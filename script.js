let arr = ['a','b','c','d'];
// getting array
console.log(arr);
// getting array length
console.log(arr.length);

// getting the index of each element using iteration (for in loop)
// for in loop gives us the index of an element. 
for(let elements in arr){
	console.log(elements);
}

// for of loop gives the element of the index.
for(let items of arr){
	console.log(items);
}

// forEach with arrow fun
let arr1 = ['h','a','r','s','h','i','t'];
arr1.forEach((element, index, array )=>{
	console.log(element,index);
})
// map method
let arr2 = [25,36,49,64,81];
arr2.map((items)=> {
	console.log(Math.sqrt(items));
})

// map and filter
let arr3 = [2,3,4,6,8];
console.log(arr3);
let AfterSquare = arr3.map((items)=> {
	return items*2;
})
console.log(AfterSquare)
let AfterFilter = AfterSquare.filter((curElem)=> {
	return curElem < 10;
})
console.log(AfterFilter);


// in case of var >> we can declare and initialize the variable one or more time, it will not give any type error
var name = 'harshit';
var name = 'verma';
name = "NewName";
console.log(name);

// in case of let
// let name = 'harshit';
// let name = 'verma'; // it will give an error because name variable has been declared already.
// name = "NewName";
// console.log(name);


let arrNew = [10,20,30,40,50];
const Name = (arg1, ...arg2 ) => {  // ...arg2 is a rest Operator
	console.log(arg1);
	console.log(arg2[0]);
	console.log(arg2[1]);
	console.log(arg2[2]);
	console.log(arg2[3]);
	console.log(arg2[4]);
}

Name('Harshit', ...arrNew);   // ...arrNew  is a spread Operator



console.log("reducer");
let newarray = [2,4,6,8,10];
let storeD = newarray.reduce((accum, currElem)=>{
	// debugger;
	return accum + currElem;
})
console.log(storeD);




const Register = () => {
	console.log("Register")
}

const sendEmail = () => {
	setTimeout(()=>{
		console.log(" sendEmail")
	}, 3000)
	
}

const login = () => {
	console.log("login")
}

const getUserData = () => {
	console.log("getUserData");
}

const displayUserData = () => {
	console.log("displayUserData");
}

Register();
// setInterval(()=>{
// 	sendEmail();
// }, 2000)
login();
getUserData();
displayUserData();



let IndexArr = ["a","b", "c", "d"];
console.log(IndexArr.indexOf('a'));
console.log(IndexArr.length);
console.log(IndexArr.push("e"));
console.log(IndexArr.reverse())
console.log(IndexArr.includes('a'));

let IndexArr1 = ["b","a", "d", "c"];
console.log(IndexArr1);
console.log(IndexArr1.sort());



let ArrList = [
	{
		id: 1,
		letter : 'h'
	},
	{
		id: 2,
		letter : 'a'
	},
	{
		id: 3,
		letter : 'r'
	},
	{
		id: 4,
		letter : 's'
	},
	{
		id: 5,
		letter : 'h'
	},
	{
		id: 6,
		letter : 'i'
	},
	{
		id: 6,
		letter : 't'
	},
	{
		id: 6,
		letter : 'v'
	}
]

let storeData = ArrList.filter((items)=>{
	return items.letter == 'h';
}).map((items)=>{
	return items
})
console.log(storeData);

let storeData2 = ArrList.filter((items)=>{
	return (items.letter == 'h' && items.id == 5 );
}).map((items)=>{
	return items
})
console.log(storeData2);

let storeData3 = ArrList.filter((items)=>{
	return items.letter == 'h' ;
}).reduce((accum, items)=>{
	debugger;
	return accum + items.id;
})
console.log(storeData3);