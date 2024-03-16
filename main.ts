// Tutorial # 1 
// print your name 10 times

for(let i = 1; i <= 10; i++ ) {
    console.log("Haseeb Naeem");
}
console.log("loop has ended");


// Tutorial # 2 
// Calculate sum of first 100 natural numbers


let sum =0;
for(let i = 1; i <= 100; i++) {
    sum = sum+i
};
console.log("sum of first 100 natural numbers is", sum);



// Tutorial # 3

// while loop

let i = 1;
while(i <= 10) {
    console.log("Haseeb Naeem")
    i++
};

// Tutorial # 4


// do while loop

let i = 10;
do {
    console.log("Haseeb Naeem")
    i++
} while(i<=20);


// Tutorial # 5
let i: number = 1;
do {
    console.log(i)
    i++
}while(i <= 10);


// Tutorial # 6


// for in loop

let student = {
    name: "Haseeb",
    age: "28",
    class: "IT",
}
for(let i in student);
console.log(student);



// Tutorial # 7
// print all natural numbers from 1 to 100 then sort out even numbers from 1 to 100 and than odd numbers

let a;
for(let a = 1; a<= 100; a++) {
        console.log(a)
}

// for odd numbers

let a;
for(let a = 1; a<= 100; a++) {
    if(a % 2 !== 0) {
        console.log(a)
    }
}

// // for even numbers

let a;
for(let a = 1; a<= 100; a++) {
    if(a % 2 == 0) {
        console.log(a)
    }
}


// Tutorial # 8

// Print table of 5 upto 50 or print first 10 multiples of 5

let a;
for(let a =1; a<= 50; a++) {
    if(a % 5 == 0) {
        console.log(a)
    }
};


// Tutorial # 9

// Print table of 3 upto 30 or print first 10 multiple of 3

let a;
for(a = 1; a<= 30; a++) {
    if(a % 3 == 0) {
        console.log(a)
    }
};



