const people = [
	{name: 'Wes', year: 1988},
	{name: 'Kait', year: 1986},
	{name: 'Irv', year: 1970},
	{name: 'Lux', year: 2015}
];

const comments = [
	{text: 'Love this!', id:523423},
	{text: 'Super good', id:122578},
	{text: 'You are the best', id:654835},
	{text: 'Ramen is my fav food ever', id:457963},
	{text: 'Nice Nice Nice!', id:998564}
];

//...prototype some() // is at least one person 19?

// const isAdult = people.some(function(person) {
// 	const curentYear = (new Date()).getFullYear();
// 	if(curentYear - person.year >= 19) {
// 		return true;
// 	}
// });
// .............shorthand........
const isAdult = people.some(person => 
	((new Date).getFullYear()) - person.year >= 19);//return true
													//because there are at least one
													//object gretest than 19

//...prototype every() // is everyone 19?
const allAdult = people.every(person => 
	((new Date).getFullYear()) - person.year >= 19);// return false because not
													//everyone are gretest than 19

// prototpe find() is like filter() but return just the one you are 
//looking for

// const comment = comments.find(function(comment) {
// 	if(comment.id === 654835) {
// 		return true;
// 	}
// });

//.........shorthand........
const comment = comments.find(comment => comment.id === 654835);


// prototype findIndex()......
const index = comments.findIndex(comment => comment.id === 654835);
const newArray = [
	...comments.slice(0, index),// delete element 'index', and return 
	...comments.slice(index + 1)//newArray without that element
];
console.log(newArray);

