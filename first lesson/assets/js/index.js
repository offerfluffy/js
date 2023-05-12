// Password checker on if else in cycle pro

// const password = "name12345";
// let userAnswer;
// function askPassword() {
//   userAnswer = prompt('Enter your password');
//   if (userAnswer == password) {
//     alert("You entered!");
//     return true;
//   } else if (userAnswer === null) {
//     alert("Canceled.");
//     return true;
//   } else {
//     alert("Wrong password. Try again.");
//     return false;
//   }
// }
// while (!askPassword()) {
// }

// Squares

// let userNumber;
// userNumber = +prompt('Enter your number:');
// alert(userNumber ** 2 );

// Month checker on switch in cycle

// let userAnswer;
// userAnswer = prompt('Enter month name:');
// switch (userAnswer) {
//   case ('December'):
//   case ('January'):
//   case ('February'): {
//     alert("Winter");
//     break;
//   }
//   case ('March'):
//   case ('April'):
//   case ('May'): {
//     alert("Spring");
//     break;
//   }
//   case ('June'):
//   case ('July'):
//   case ('August'): {
//     alert("Summer");
//     break;
//   }
//   case ('September'):
//   case ('October'):
//   case ('November'): {
//     alert("Autumn");
//     break;
//   }
//   default: {
//     alert("Unknown season")
//   }
// }

// Sale

// let userAnswer = +prompt("What is your amount of purchases ?");

// const saleCounter = function(){

// if (userAnswer >= 1500) {
//   let discount = userAnswer * 0.1;
//   let totalPrice= userAnswer - discount
//   alert(totalPrice);
// } else if (userAnswer >= 500) {
//   let discount = userAnswer * 0.05;
//   let totalPrice= userAnswer - discount
//   alert(totalPrice);
// } else {
//   alert (userAnswer)
// }
// }
// saleCounter();

// Counter of price

// const pizza = 120;
// const burger = 100;
// const cola = 20;
// const water = 10;

// let whatBuy = prompt("What do you want to buy (Pizza/Burger/Cola/Water) ?")
// let howMany = +prompt("How many ?")

// const counterOfPrice = function(){

// switch (whatBuy){
//   case 'Pizza':{
//     alert(pizza * howMany);
//     break;
//   }
//   case 'Burger':{
//     alert(burger * howMany);
//     break;
//   }
//   case 'Cola':{
//     alert(cola * howMany);
//     break;
//   }
//   case 'Water':{
//     alert(water * howMany);
//     break;
//   }
//   default:{
//     alert("You didn't choise anything")
//   }
// }
// }
// counterOfPrice();

// const checkBiggerNumber = function(number1,number2){
//   if(number1 < number2){
//     return number2
//   } else {
//     return number1
//   }
// }

// const checkCountNumber = function(number){
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let num = 0;
// while (num <= 10) {
//   console.log(num);
//   num+=2;
// }

// let password = "name12345";
// let attempts = 5;

// while (attempts > 0) {
//   let userInput = prompt("Введіть пароль:");
//   if (userInput === password) {
//     alert("Вітаю! Ви ввели правильний пароль.");
//     break;
//   } else {
//     attempts--;
//     alert(`Неправильний пароль.`);
//   }
// }
// if (attempts === 0) {
//   alert("На жаль, у вас закінчилися спроби. Спробуйте знову пізніше.");
// }

// let numbers = 30;
// while (numbers > 0){
//   console.log(numbers);
//   numbers--;
// }

// for (let num = 30; num >0 ; num --){
//   console.log(num)
// }

// let num = 30;
// do{
//   console.log(num);
//   num--;
// } while (num > 0)

// let sum = 0;
// let i = 0;
// while (i <= 100) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// const human = {
//   height: 174,
//   weight: 64,
//   eyes: 'green',
// }

// function User(firstName, lastName, gender, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.age = age;

//   this.fullName = function() {
//     return this.firstName + ' ' + this.lastName;
//   }

//   this.speak = function() {
//     return("Hello, my name is " + this.fullName);
//   }
// }

// let user = new User('Олег','Шелудченко','чоловік',40);

// const user1 = {
//   firstName: "Alice",
//   lastName: "Smith",
//   age: 30,
//   gender: "female"
// };

// const user2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   gender: "male"
// };

// function greetUser(user) {
//   const { firstName, lastName, age, gender } = user;

//   const greeting = `Hello, ${firstName} ${lastName}. Your age is ${age} and you are ${gender}!`;

//   return greeting
// }

// console.log(greetUser(user1));

// // 1

// const arr1 = [
//   1,2,3
// ]
// arr1.push(4,5,6);
// arr1.unshift(-3,-2,-1);

// console.log(arr1);

// //2

// const arr2 = [
//   100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10
// ]

// let i = 0;
// while (i < 2){
//   arr2.pop()
//   arr2.shift()
//   i++;
// }

// console.log(arr2);

// //3

// const arr3 = [
//   1, 2, 3, 4, 5
// ]

// arr3.splice(1,2)

// console.log(arr3)

// //4

// const arr4 = [
//   1, 2, 3, 4, 5
// ]

// const deletedArr4 = arr4.splice(1,3)

// console.log(deletedArr4)

// //5

// const arr5 = [
//   1, 2, 3, 4, 5
// ]

// arr5.splice(3,0,'a','b','c' )

// console.log(arr5)

// //6

// const arr6 = [
//   1, 2, 3, 4, 5
// ]

// arr6.splice(1,0,'a','b',)
// arr6.splice(6,0,'c')
// arr6.splice(8,0,'e')

// console.log(arr6)

// const array = [
//   10,20,30,40,50,60
// ]

// const arrSlice1 = array.slice(0,3)
// const arrSlice2 = array.slice(4)

// console.log(arrSlice1)
// console.log(arrSlice2)

// const array1 = [
//   1,2,3
// ]

// const array2 = [
//   4,5,6
// ]

// const arrConcat = array1.concat(array2)

// console.log(arrConcat)

// const array3 = [
//   5,8,44,32,14,1,3
// ]

// const arrSort = array3.sort(function(a,b){
//   return a - b ;
// });

// // const arrSort = array3.sort(function(a,b){
// //   return b - a ;
// // });

// console.log(arrSort)

// const array4 = [
//   2,5,8,7,9
// ]

// // for (let i = 0; i < array4.length; i++){
// //   console.log(`Елемент ${array4[i]} має індекс ${i}`);
// // }

// array4.forEach(function(element, index) {
//   console.log(`Елемент ${element} має індекс ${index}`);
// });

// const array5 = [
//   10,9,8,7,6,5
// ]

// const arrMap = array5.map(function(element, index) {
//   return element + index;
// });

// console.log(arrMap);

// function MyArray() {
//   this.length = 0;
// }

// function MyArrayProto() {

//   this.push = function (newElem) {
//     this[this.length] = newElem;
//     this.length++;
//     return this.length;
//   };

//   this.pop = function () {
//     if (this.length > 0) {
//       const lastItem = this[this.length - 1];
//       delete this[this.length - 1];
//       this.length--;
//       return lastItem;
//     }
//     return undefined;
//   };

//   this.shift = function () {
//     if (this.length > 0) {
//       const firstItem = this[0];
//       for (let i = 0; i < this.length - 1; i++) {
//         this[i] = this[i + 1];
//       }
//       delete this[this.length - 1];
//       this.length--;
//       return firstItem;
//     }
//     return undefined;
//   };

//   this.unshift = function (newElem) {
//     for (let i = this.length - 1; i >= 0; i--) {
//       this[i + 1] = this[i];
//     }
//     this[0] = newElem;
//     this.length++;
//     return this.length;
//   };

//   this.forEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   };

//   this.map = function(callback) {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       newArray.push(callback(this[i], i, this));
//     }
//     return newArray;
//   };

//   this.filter = function(callback) {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         newArray.push(this[i]);
//       }
//     }
//     return newArray;
//   };
// }

// MyArray.isMyArray = function(obj) {
//   return obj instanceof MyArray;
// };

// MyArray.prototype = new MyArrayProto();

// const myArr1 = new MyArray();

// function Ladder(maxSteps){
//   this.currentStep = 0;
//   this.maxSteps = maxSteps;
// }

// const ladderProto = {
//   up: function(){
//     if(this.maxSteps > this.currentStep){
//       this.currentStep++ ;
//     }
//     return this.currentStep;
//   },
//   down: function(){
//     if(this.currentStep > 0){
//       this.currentStep-- ;
//       return this.currentStep;
//     };
//     throw new RangeError("Can't go below 0");
//   },
//   showStep: function(){
//     return this.currentStep;
//   }
// }

// Ladder.prototype = ladderProto;

// try{
//   ladder1.down();
// } catch (err){
//   console.log(err.message);
// }

// ladder1 = new Ladder(6);

// function capitalizeWords(str) {
//   const words = str.split(' ');

//   const capitalizeWords = words.map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   })

//   return capitalizeWords.join(" ");
// }

// const num = [500,123,546];
// const num2 = [200,3123,2143254];

// const num3 = [...num, ...num2]

// console.log(num3)

// function parametersReturn (...args) {
//   let count = 0;

//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] === 'string') {
//       count++;
//     }
//   }

//   return count;
// }

// function countStrings(...args) {
//   return args.filter(arg => typeof arg === 'string').length;
// }

// function createAdder(num1){
//   let i = num1
//   return num2 => i += num2;
// }

// const createAdder1 = n => m => n += m;

// const adder = createAdder(10);
// console.log(adder(30));
// console.log(adder(20));
// console.log(adder(40));

// function calc(operator) {
//   return function (...num) {
//     if (num.length === 0) {
//       throw new Error ("No arguments provided");
//     } else if (num.every((num) => typeof num === 'number')) {
//       if (operator.trim() === "+") {
//         const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0 );
//         return sum;
//       } else if (operator.trim() === "-") {
//         return num.reduce((accumulator, currentValue) => accumulator - currentValue);
//       } else if (operator.trim() === "*") {
//         return num.reduce((accumulator, currentValue) => accumulator * currentValue, 1 );
//       } else if (operator.trim() === "/") {
//         return num.reduce((accumulator, currentValue) => accumulator / currentValue);
//       } else {
//         throw new Error ("Not an operator");
//       }
//     } else {
//       throw new Error ("Not a number");
//     }
//   };
// }

// try{
//   calc()
// } catch(err){
//   console.log(err.meassge)
// }

// // console.log(calc("+")(1, 2, 3));
// // console.log(calc("-")(10, 2, 3));
// // console.log(calc("*")(2, 2, 3));
// // console.log(calc("/")(12, 2, 3));

// function factorial(num) {
//   if (num < 0) {
//     throw new Error ("factorial of a negative number");
//   } else if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// try{
//   factorial()
// } catch(err){
//   console.log(err.meassge)
// }

// function generateParentheses(num) {
//   if (num < 0) {
//     throw new Error("Too less");
//   } else if (num === 0) {
//     return "";
//   } else {
//     return "(" + generateParentheses(num-1) + ")";
//   }
// }

// try{
//   generateParentheses()
// } catch(err){
//   console.log(err.meassge)
// }

// console.log(generateParentheses(4));

// class Worker {
//   constructor(name, surname, age, experience) {
//     this._name = name;
//     this._surname = surname;
//     this._age = age;
//     this._experience = experience;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     if (typeof newName !== "string") {
//       throw new TypeError("Invalid data");
//     }
//     this._name = newName;
//   }

//   get surnname() {
//     return this._surname;
//   }

//   set surname(newSurname) {
//     if (typeof newSurname !== "string") {
//       throw new TypeError("Invalid data");
//     }
//     this._surname = newSurname;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(newAge) {
//     if (typeof newAge !== "number") {
//       throw new TypeError("Invalid data");
//     }

//     this._age = newAge;
//   }

//   get experience() {
//     return this._experience;
//   }

//   set experience(newExpirience) {
//     if (typeof newExpirience !== "number") {
//       throw new TypeError("Invalid data");
//     }

//     this._experience = newExpirience;
//   }

//   get fullName() {
//     return `${this._name} ${this._surname}`;
//   }

//   isAdult() {
//     this.age >= 18 ? true : false;
//   }
// }

// const w1 = new Worker("Oleg", "Sheludchenko", 39, 8);

// class Order {
//   constructor(buyer, adress,status, products){
//     this.buyer = buyer;
//     this.adress = adress;
//     this.status = status;
//     this.product = products
//   }

//   print(){
//     return `${this.fullName} ordered ${this.product} to ${this.adress}. Status: ${this.status}`
//   }
// }

// const or1 = new Order (, "Zaopizhzhya", true, ["Shirt", "Jeans"])

// class User {
//   constructor(nickname, age) {
//     this._nickname = nickname;
//     this._age = age;
//     this._isBanned = false
//   }

//   get nickname() {
//     return this._nickname;
//   }

//   set nickname(newNickname) {
//     if (typeof newNickname !== "string") {
//       throw new TypeError("Invalid data");
//     }
//     this._nickname = newNickname;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(newAge) {
//     if (typeof newAge !== "number") {
//       throw new TypeError("Invalid data");
//     }

//     this._age = newAge;
//   }

//   static isUser(user){
//     return user instanceof User;
//   }

//   createMessage(message) {
//     console.log(message);
//   }
// }

// class Moderator extends User {
//   constructor(nickname, age, password) {
//     super(nickname, age);
//     this.password = password;
//   }

//   deleteMessage(message) {
//     console.log(`${message} deleted`);
//   }
// }

// class Admin extends Moderator {
//   constructor(nickname, age, password) {
//     super(nickname, age, password);
//   }

//   static isAdmin(user){
//     return user instanceof Admin;
//   }

//   ban(user) {
//     if (!User.isUser(user)){
//       throw new TypeError("Invalid data");
//     }
//     if (user._isBanned){
//       throw new Error(`${user} is alredy banned`);
//     }
//     if (User.isAdmin(user)){
//       throw new Error(`${user} is Admin`);
//     }
//     user._isBanned = true
//   }
//   unban(user){
//     if (!User.isUser(user)){
//       throw new TypeError("Invalid data");
//     }
//     if (!user._isBanned){
//       throw new Error(`${user} isn't banned`);
//     }
//     user._isBanned = false
//   }
// }

// const u1 = new User("Oleh", 39);
// const u2 = new Moderator("Dima", 29, 123 );
// const u3 = new Admin("Igor", 29, 123 );
// const u4 = new Admin("Egor", 29, 123 );

// class Figure {
//   constructor(name){
//     this.name = name;
//   }

//   getArea(){
//   }

// }

// class Circle extends Figure{
//   constructor(r){
//     super('circle');
//     this.r = r;
//   }

//   getArea(){
//     return Math.pow(this.r, 2) * Math.PI ;
//   }
// }

// const circle = new Circle (4)

// console.log(circle.getArea())

// class Animal {
//   #name;
//   #type;
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(newName) {
//     if (typeof newName !== "string") {
//       throw new TypeError("Invalid data");
//     }
//     this.#name = newName;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (typeof newType !== "string") {
//       throw new TypeError("Invalid data");
//     }
//     this.#type = newType;
//   }

//   eat(food) {
//     return `${this.#name} eats ${food}`;
//   }

//   move() {
//     return `${this.#name} moves`;
//   }

//   sleep() {
//     return `${this.#name} sleeps`;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name, "dog");
//   }

//   bark() {
//     return `${this.name} is barking`;
//   }

//   static isDog(animal) {
//     return animal instanceof Dog;
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name, "cat");
//   }

//   meow() {
//     return `${this.name} is meowing`;
//   }

//   static isCat(animal) {
//     return animal instanceof Cat;
//   }
// }

// class Hamster extends Animal {
//   constructor(name) {
//     super(name, "hamster");
//   }

//   bite() {
//     return `${this.name} is biting`;
//   }

//   static isHamster(animal) {
//     return animal instanceof Hamster;
//   }
// }

// class Trainer {
//   trainEat(animal) {
//     animal.eat();
//   }

//   trainMove(animal) {
//     animal.move();
//   }

//   trainSleep(animal) {
//     animal.sleep();
//   }

//   trainTricks(animal) {
//     if (Dog.isDog(animal)) {
//       return animal.bark();
//     }
//     if (Cat.isCat(animal)) {
//       return animal.meow();
//     }
//     if (Hamster.isHamster(animal)) {
//       return animal.bite();
//     } throw new Error ("Don't see such animal");
//   }
// }

// function multiplyNumbers(...numbers) {
//   let result = 1;
//   for (const number of numbers) {
//     result *= number;
//   }
//   return result;
// }

// const names1 = new Set(['Test', 'User', 'Anton']);
// const names2 = new Set(['Anna', 'User', 'Anton']);

// const uniqueNames = [...new Set([...names1, ...names2])];

// // for (const name of names1) {
// //   if (!names2.has(name)) {
// //     uniqueNames.add(name);
// //   }
// // }

// // for (const name of names2) {
// //   if (!names1.has(name)) {
// //     uniqueNames.add(name);
// //   }
// // }

// console.log(uniqueNames);

// // 1

// function sumNumbers(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return `${sumNumbers(num - 1)} + ${num}`;
// }

// // console.log(sumNumbers(4));

// // 2

// const client = {
//   id: 1223,
//   firstName: "Oleg",
//   lastName: "Sheludchenko",
//   gender: "Male",
//   numberOfCard: 7745325342,
//   balance: 10000,
//   levelOfCard: "pro",
// };

// const contactData = {
//   cardLevel: new Map([
//     ["basic", { discount: 0, cashback: 0, creditLimit: 5000 }],
//     ["pro", { discount: 10, cashback: 5, creditLimit: 10000 }],
//     ["gold", { discount: 20, cashback: 10, creditLimit: 50000 }],
//   ]),
// };

// function getClientData(client) {
//   const cardLevelData = contactData.cardLevel.get(client.levelOfCard);
//   const cardDetails = `
//     DiscountL: ${cardLevelData.discount}
//     Cashback: ${cardLevelData.cashback}
//     Credit Limit: ${cardLevelData.creditLimit}
//     `;
//   return `
//     ID: ${client.id}
//     Name: ${client.firstName} ${client.lastName}
//     Gender: ${client.gender}
//     Number of card: ${client.numberOfCard}
//     Balance : ${client.balance}
//     Card Details: ${cardDetails}
//     `;
// }

// // console.log(getClientData(client));

// // 3

// const arrNum = [
//   -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//   20,
// ];

// function pairedNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// // console.log(pairedNumbers(arrNum))

// function oddNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       console.log(arr[i]);
//     }
//   }
// }

// // console.log(oddNumbers(arrNum))

// function negativeNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log(arr[i]);
//     }
//   }
// }

// // console.log(negativeNumbers(arrNum))

// function zeroNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// // console.log(zeroNumbers(arrNum))

// // 4

// class Book {
//   #autor;
//   #name;
//   #year;
//   #publisher;

//   constructor(autor, name, year, publisher) {
//     this.autor = autor;
//     this.name = name;
//     this.year = year;
//     this.publisher = publisher;
//   }

//   get autor() {
//     return this.#autor;
//   }

//   get name() {
//     return this.#name;
//   }

//   get year() {
//     return this.#year;
//   }

//   get publisher() {
//     return this.#publisher;
//   }

//   set autor(newAutor) {
//     if (typeof newAutor != "string") {
//       throw new Error("Invalid Data");
//     }

//     this.#autor = newAutor;
//   }

//   set name(newName) {
//     if (typeof newName != "string") {
//       throw new Error("Invalid Data");
//     }

//     this.#name = newName;
//   }

//   set year(newYear) {
//     if (typeof newYear != "number") {
//       throw new Error("Invalid Data");
//     }

//     this.#year = newYear;
//   }

//   set publisher(newPublisher) {
//     if (typeof newPublisher != "string") {
//       throw new Error("Invalid Data");
//     }

//     this.#publisher = newPublisher;
//   }

//   static isBook(book) {
//     return book instanceof Book;
//   }

//   read() {
//     return `You are reading "${this.#name}" book`;
//   }
// }

// class Ebook extends Book {
//   #format;
//   #eNumber;

//   constructor(autor, name, year, publisher, format, eNumber) {
//     super(autor, name, year, publisher);
//     this.format = format;
//     this.eNumber = eNumber;
//   }

//   get format() {
//     return this.#format;
//   }

//     get eNumber() {
//     return this.#eNumber;
//     }

//     set format(newFormat) {
//     if (typeof newFormat != "string") {
//         throw new Error("Invalid Data");
//     }

//     this.#format = newFormat;
//     }

//     static isEbook(book) {
//     return book instanceof Ebook;
//     }

//     set eNumber(newENumber) {
//     if (typeof newENumber != "number") {
//         throw new Error("Invalid Data");
//     }

//     this.#eNumber = newENumber;
//     }
// }

// const b1 = new Book("George Luckas", "Star Wars", 1975, "Disney");

// const b2 = new Ebook(
//     "George Luckas",
//     "Star Wars",
//     1975,
//     "Disney",
//     "Ebook",
//     121
// );

// // 5

// function showFizzBuzzNum (...num){
//     let string = "";
//     for(let i = 0; i < num.length; i++){
//         if(num[i] % 3 === 0 && num[i] % 5 === 0){
//             string += 'fizzbuzz';
//         } else if(num[i] % 3 === 0){
//             string += 'fizz';
//         } else if(num[i] % 5 === 0){
//             string += 'buzz';
//         } else {
//             string += num[i].toString();
//         }
//         string += " ";
//     }
//     console.log(string.trim())
// }

// // console.log(showFizzBuzzNum(1, 6, 10, 12, 13, 15, 16, 17));

// // 6

// const serverResponse = {
//     data: {
//         data: [
//             {
//                 id: 0,
//                 name: 'John',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 1,
//                 name: 'Jane',
//                 lastName: 'Doe'
//             },
//             {
//                 id: 2,
//                 name: 'Admin',
//                 lastName: 'Tiranovich'
//             },
//             {
//                 id: 3,
//                 name: 'User',
//                 lastName: 'Undefinovich'
//             },
//         ]
//     }
// }

// const { data: { data: users } } = serverResponse;

// const { data: { data: [, user2, user3] } } = serverResponse;

// function countPositivesSumNegatives(input) {
//   if (input == null || input.length == 0)
//   return [];

//   let count = 0;
//   let sum = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       count++;
//     }
//     if (input[i] < 0) {
//       sum += input[i];
//     }
//   }

//   return [count, sum];
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// function abbrevName(name){
//   let arrLetter = []
//   for (let i = 0; i < name.split(" ").length; i ++){
//     arrLetter.push(name.split(" ")[i][0])
//   }
//   return arrLetter.join(".").toUpperCase()
// }

// console.log(abbrevName("Sam Harris"))

// function boolToWord( bool ){
//   return bool ? "Yes" : "No";
// }

// console.log(boolToWord(true))

// const btn = document.getElementById("btn");
// const text = document.getElementById("display");

// let clickCount = 0;

// function btnHandler() {
//     text.textContent = `Ви настискали на кнопку: ${++clickCount} разів`;
//     text.className = 'test'
// }

// btn.addEventListener("click", btnHandler);

// const btn = document.getElementById("btn");
// const img = document.querySelector("#img");

// const imgTitle = document.createAttribute('title');
// img.setAttributeNode(imgTitle);


// const animals = [
//     {
//     src: "./assets/images/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//     alt: "nature",
//     },
//     {
//     src: "./assets/images/images.jfif",
//     alt: "cat",
//     }
// ];

// let currentAnimal = 0;

// btn.addEventListener("click", (e) => {
//     currentAnimal = currentAnimal === 1 ? 0 : 1;

//     imgTitle.value = animals[currentAnimal].alt;

//     img.setAttribute("src", animals[currentAnimal].src);
//     img.setAttribute("alt", animals[currentAnimal].alt);
// });

// const newElement = document.createElement('p');
// const divPWrapper = document.getElementById('p-wrapper')

// // newElement.setAttribute('class', 'newElement')
// newElement.classList.add('newElement')

// newElement.textContent = 'Generated by JS'

// divPWrapper.append(newElement)


// const newElement = document.createElement('button');

// newElement.setAttribute('id', 'newBtn')
// newElement.textContent = 'X'

// divPWrapper.append(newElement)

// newElement.addEventListener('click', (e) => {
//     // newElement.remove()
//     e.target.remove()
// })

// const btnAdd = document.querySelector('#btn-add');

// btnAdd.addEventListener('click', (e) => {
//     const toDoList = document.querySelector('.to-do-list');
//     const newLi = document.createElement('li');
//     const newSpan = document.createElement('span');
//     const newBtn = document.createElement('button');

//     newLi.setAttribute('class', 'to-do-list-item');
//     newSpan.setAttribute('class', 'to-do-list-item-text');
//     newBtn.classList.add('to-do-list-item-btn');
//     newBtn.id = 'btn-delete'

//     const userText = prompt('What is your task ?');

//     newSpan.textContent = userText;
//     newBtn.textContent = 'Delete';

//     newSpan.append(newBtn);
//     newLi.append(newSpan); 
//     toDoList.append(newLi);
// });

// const btnDelete = document.querySelector('#btn-delete')

// btnDelete.addEventListener('click', (e) => {
//     newLi.remove()
// })

const btnAdd = document.querySelector('#btn-add');
const toDoList = document.querySelector('.to-do-list');

btnAdd.addEventListener('click', (e) => {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newLi.setAttribute('class', 'to-do-list-item');
    newSpan.setAttribute('class', 'to-do-list-item-text');
    newBtn.classList.add('to-do-list-item-btn');

    const userText = prompt('What is your task ?');

    newSpan.textContent = userText;
    newBtn.textContent = 'Delete';

    newSpan.append(newBtn);
    newLi.append(newSpan);
    toDoList.append(newLi);

    newBtn.addEventListener('click', () => {
        newLi.remove();
    });
});