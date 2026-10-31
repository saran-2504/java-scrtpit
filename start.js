// console.log("welcome to my world buddy")
// var name = "samcurren"
// var email = "sam@12233@gmail.com"
// var number = 12345
// age = 24
// var ismarried = true


// console.log("welcome")
// console.log( typeof(age) )
// console.log( typeof(name) )
// console.log( typeof(email) )
// console.log( typeof(ismarried) )

// typeof command is used to check the data type(string ot number or bolean)

// var name = "samcurren"
// name = "saran"

// we can change and call the name



// console.log(`my name is ${name} and to you can contact me politelly by ${email} and if case any emergency u can contact me directly by using this ${number} and for your kind information my ${age} and iam is married`)

// by using the bactick(`)this we can call them whith out giving the full info.

// arrithmetic operators and assignment operators and increment and decrement operator and logical operator and tenary operator and comparision operator and bitwise operator and string operator and type of operator and conditional operator

// let a = 20
// let b = a++

// console.log(a,b)


// let z = 50
// let y = z--
// let m = ++z
// let x = z++
// let n = --z
// console.log(z,y,m,x,n)

// logical operators


// let a = 10
// let b = 3
// let c = a+b 

// if operator

// if (c>5){
//     console.log("This is the correct number!")
// }
// else{
//     console.log("This is not correct number!")
// }

// if else operator


// let a  = int(prompt("Enter the number"))
// if (a%2==0){
//     cosole.log("The number is divisible by !")
// }
// else{
//     console.log("The number is not divisible by !")
// }

// let age = 30
// if (age > 18){
//     console.log("You are not an adult")
// }
// else {
//     console.log("You are an adult")
// }

//  Ternary operator -- the code can executed in three lines

// let year = 2027

// let answer = year < 2025 ? "You are not placed" : "You are placed"

// console.log(answer)

// else-if operator


// let month = "april"

// if (month == "april"){
//     console.log("This saran brthday month !")
// }
// else if (month == "march"){
//     console.log("Thois saran dady birthday !")
// }
// else if ( month == "december"){
//     console.log("This is yugan birthday month")
// }

// for if-else and else-if we can use another operator is switch operator while using swtich we need to break keyword reason (if will read line by line )
// if data is invalid we can use default keyword

// let car = "honda"

// switch(car ){
//     case "honda":
//         console.log("This my fav car")
//         break
//     case "maruthi":
//         console.log("This not my fav car")
//         break
//     case "audi":
//         console.log("This is an ulitimate car")
//         break
//     default:
//         console.log("This is invalid data")
// }

    //  logicall operator
//  && and logical operator

// let a = 10
// let b = 20 
// let c = 10 

// console.log(10 < 20) && ( c == a ) --true
// console.log(20 < 10) && ( c == a ) -- false
// console.log(a == c) && (20 < 10 ) -- true
// console.log(a == b) && (c == a) -- false

// or || condition


// console.log(20 < 30) || (30 == 30) -- true
// console.log(30 < 20 ) || (30 == 30) -- false
// console.log(20 == 30 ) || (30 == 20) --false
// console.log(20 < 30 ) || (30 == 30 ) -- true


// ..................................! is used for nptt\ logical operator -- it reverse the bollen value ( true means false and false means true)

// console.log(! 20 == 30 )

// .................................arrays concept

// let car = ["maruthi", "audi", "bmw", "jeep"]

// console.log(car[3])
// console.log(car[2])

// .......................................for accesing the elememnts one by one for that we van use for loop

// let bike = ("hunter","mt-15","r1-5","yamaha","raoyalenfield")

// for(let i = 0; i < 5; i++ ){
//     console.log(bike[i])
// }

// ..............................................we can use .length insted of mentioning the Number

// let fruit = ["apple","orange","pineapple","mango","guva"]

// for(let i = 0; i < fruit.length; i++)
// {
//     console.log(fruit[i])
// }

// ......................................by using for of we can make it simpler 

// let fruit = ["apple","orange","pineapple","mango","guva"]
// for (let i of fruit){
//     console.log(i)
// }

// .....this the real time example for the insta coments

// let insta = [ ]

// for (let i = 0; i < n; i ++){

//     let box = prompt("Enter the conent ! ")
//     insta.push(box)
// }
// for(let i of insta){
//     console.log(i)
// }



// ..... to mention any relation we can use the objects...

// let fitness = {
//     steps:1000,
//     heigh:5.6,
//     weight:60
// }
// console.log(fitness)
// console.log(fitness.heigh)