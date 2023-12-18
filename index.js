// let products = [
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 10000
//     },
//     {
//         name: "apple",
//         type: "fruit",
//         price: 5000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 100000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 8000
//     },
//     {
//         name: "banan",
//         type: "fruit",
//         price: 20000
//     },
//     {
//         name: "kuryatina",
//         type: "meat",
//         price: 45000
//     },
//     {
//         name: "sir",
//         type: "milk",
//         price: 16000
//     },
// ]

// let categories = [
//     {
//         name: "meat",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "milk",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
//     {
//         name: "fruit",
//         arr: [],
//         amount: 0,
//         total: 0
//     },
// ]

// let maxprice = {price: 0}
// let minprice = products[0]



// for(let prod of products) {
//     if(prod.price > maxprice.price) {
//         maxprice = prod
    
//     } 
//     if(prod.price < minprice.price)
//     minprice = prod

// }

// console.log(maxprice);
// console.log(minprice);


// let number = [0,1,2,3,4,5,6,7,8,9,10]




// let sort_number = number.reduce((a,b) => {
//     if(a > b) {
//      return a
//     } 
//     if(a < b) {
//         return b
//     }
// })
// console.log(sort_number);




let students = [
    {
        name: "Hasan",
        age: "2008-07-28",
        gender: 'm'
    },
    {
        name: "Alsafir",
        age: "2008-10-13",
        gender: 'm'
    },
    {
        name: "Allayor",
        age: "2008-06-24",
        gender: 'w'
    },
    {
        name: "Radmir",
        age: "2007-04-28",
        gender: 'w'
    },
    {
        name: "Jaxongir",
        age: "2006-09-03",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2007-11-27",
        gender: 'w'
    },
    {
        name: "Alibek",
        age: "2006-04-12",
        gender: 'm'
    },
    {
        name: "Bexruz",
        age: "2009-11-27",
        gender: 'w'
    }
    
]


let old = null
let young = null

let long_name = ``
let short_name = students[0].name


for(let student of students) {
    if(student.name.length > long_name.length) {
long_name = student.name
    }
}

for(let std of students) {
if(std.name.length < short_name.length)  {
    short_name = std.name
} 
}
console.log(`${long_name} Самое длинное имя из данного списка людей`);
console.log(`${short_name} Самое короткое имя из данного списка людей `);

let date = new Date()

for(let student of students) {
    let ages = new Date(student.age)
if(!old || ages > new Date(old.age)) {
    old = student
}

if(!young || ages < new Date(young.age)) {
    young = student
}
}

console.table(young);
console.table(old);




