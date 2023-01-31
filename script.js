'use strict'
const arr = [1,2,3,4,5];

const items =[
    
    {name: 'book', price: 100},
    {name: 'chair', price: 10},
    {name: 'computer', price: 50},
    {name: 'bike', price: 1000},
    {name: 'phone', price: 30},
    {name: 'keyboard', price: 500},
    {name: 'album', price: 120},
];

let a=6;

//map method
const multiplyarr = arr.map(item => item*2);
const price = items.map( item => item.price *2);
console.log(multiplyarr);
console.log(arr);

console.log(price);
console.log(arr);

/*
console.log(items.map( () => 4 *items.price))
console.log(price);*/

//filter
const filteredItem = items.filter(item => item.price > 100);

console.log(filteredItem);

//find metthod
const findItem = items.find(look => look.price ===120 );
console.log(findItem);

//foreach method
const forEach = items.forEach(lael =>console.log(lael.price));

// console.log(forEach);

//some method
const someThing = items.some(item => item.price === 100);
console.log(someThing);

//every method
const everyThing = items.every(item => item.price === 100);
console.log(everyThing);

//reduce mehthod
const reduce = arr.reduce((currentTotal ,  item)=>{return item + currentTotal},0);

console.log(reduce);

//slice method
const slice = arr.slice(0,3);
console.log(arr);
console.log(slice);


//include method problems
const include = items.includes('book');
console.log(include);

//concat....to combine
const c =[1,2,3,4];
const b=[5,6,7,8];
const d= c.concat(b);
console.log(d);

//splice
const e =arr.splice(1,0,5);
console.log(e)
console.log(arr);


const array =[2,1,60,8];
array.sort();
console.log(array[2]);


