JavaScript
Assignment 4

1.	Write a chained if / else-if statement to fill in the following conditions

val  < 5  =>  Tiny
val  < 10  =>  Small
val  < 15  =>  Medium
val  < 20  => Large
val  >= 20  => Huge 

```js
let val = 20
if (val < 5) {
    console.log("Tiny");
}
else if (val < 10) {
    console.log("small");
     
}
else if (val < 15) {
    console.log("medium");
    
}
else if (val < 20) {
    console.log("Large");
    
}
else  {
    console.log("Huge");
    
}
```
Huge

2.	Use the switch case and create an application with the following roles.

admin => gets full access
subAdmin => gets access to create and delete courses
testPrep => gets access to create and delete tests
user => gets access to consume contents
```js
let Application = "admin"
switch (Application) {
    case "admin":
        console.log("gets full access");
        break;
        case "subAdmin":
            console.log("gets access to create and delete courses");
            break;
            case "testprep":
            console.log("gets access to create and delete tests");
            break;
            case "user":
                console.log("gets access to consume contents");
                break;
             
            default :
            console.log("wrong choice");
            
            break;
             }
```

gets full access


3. Take users age and tell the user if he is eligible for voting .

```js
 let age  = 10
if (age >= 18)  {
  console.log("you are eligible for voting");
}
 else {
  console.log("you are not eligible for voting");
  
 }
 ```
you are not eligible for voting

4. You need to have 75% attendance to write the exam .Take the total number of classes and the number of attendance from the student and tell him if we can write the exam.

 ```js
    let  t = prompt ("total number of working days")
    let  a = prompt ("number of days attended")
     if ( ((a/t)*100) >=75) {
      alert("yes"  )
     }
      else{ alert("no")
      }
```

5. check if someone has normal temperature. Normal temperature is 98.6

   98.1 => normal temp


   98.7 => not normal

   
   97.9 => not normal

```js
   let  temp = prompt ("Enter the temperature") 
  if (temp> 98 && temp <=98.6 ) {
    alert("normal");
  }
else  {
  alert("not normal");
}
```