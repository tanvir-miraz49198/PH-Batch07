// module 19 (loop)
/*
// video 2 
// while..

var num = 0;
while (num < 7) {
   console.log( "i am a good boy")

   num++;
}
*/
/* ans :-
i am a good boy
i am a good boy
i am a good boy
i am a good boy
i am a good boy
i am a good boy
i am a good boy
*/ 


// video 3
// while
/*
// even number..
var number = 2;
while (number <= 10) {

    console.log(number);

    number = number + 2;
}

/* ans : -
0
2
4
6
8
*/ 

/*
// odd number..
var number = 1;
while (number <= 10) {
    console.log(number);

    number = number + 2;

}

/* ans :-
1
3
5
7
9
*/ 

/*
// video 4
//  for loop
for (let i = 0; i <= 10; i++) {

    console.log(i)
}

/* ans :-
1
2
3
4
5
6
7
8
9
10
*/ 

/*
// even number..
for (let i = 0; i <= 10; i+=2) {
    
    console.log(i)
}

/* ans :-
0
2
4
6
8
10
*/ 

/*
// odd number..
for (let i = 1; i <= 10; i+=2) {
    
    console.log(i)
    
}

/* ans :-
1
3
5
7
9
*/ 



// video 5
// array loop
/*
var numbers = [10, 20, 30, 90, 120, 150]

for (let i = 0; i < numbers.length; i++) {

    const element = numbers[i];
    console.log(element)
}

/* ans :-
10
20
30
90
120
150
*/ 

/*
var friendNames = ["Tanvir", "sabit", "susan", "Susan", "aqib"]

for (let i = 0; i < friendNames.length; i++) {

    const element = friendNames[i];

    console.log(element)
}
*/
/*ans :-
Tanvir
sabit
susan
Susan
aqib
*/ 


// video 6
// break
/*
for(var i = 1; i < 10; i++){

    console.log(i)
    if (i > 5) {
        break;
    }
}

/* ans :-
1
2
3
4
5
6
*/ 
/*
var nums = [10,40,50,60,70,]
for(var i = 0; i < nums.length; i++){

var element = nums[i];

if (element == 60) {
    break;
}
console.log(element)
}
/* ans :-
10
40
50
*/  
/*

var friendNames = ["Tanvir", "sabit", "susan", "Susan", "aqib"]

for (let i = 0; i < friendNames.length; i++) {

    const element = friendNames[i];
if (element == "susan") {
    break;
}

    console.log(element)
}
/* ans :-
Tanvir
sabit
*/ 

/*

var  i = 0;
while(i < 10){
    console.log("ami valo achi")

    i++
    if (i > 4) {
        break;
    }
}

/*
ami valo achi
ami valo achi
ami valo achi
ami valo achi
ami valo achi
*/ 


// continue
/*
var points = [10, 15, 20, 25, 30, 35, 40, 45, 50, 56, 57, 60, 70, 44, 32];


for (let i = 0; i < points.length; i++) {

    const element = points[i];
    if (element > 50) {
        continue;
    }
    console.log(element)
}

/* ans :-
10
15
20
25
30
35
40
45
50
44
32

*/ 



/*
// video 7
// reverse
for(var i = 10; i >=1; i--){

  console.log(i)
}
/* ans :-
10
9
8
7
6
5
4
3
2
1
*/ 
/*
var i = 10;
while(i >= 1){
 console.log(i)

 i--;
   
}

/* ans :-
10
9
8
7
6
5
4
3
2
1
*/ 


