hu
// 1) Write a function to reverse a string in JavaScript.

// function app(str) {
//     let res = str.split("").reverse().join("");
//     console.log(res);
// }
// app("Hello World")

// 2) How would you check if a string is a palindrome?
// function app(str) {
//     let res=str.split("").reverse().join("");
//     //    this code is case-sensitive Because Dad and dad is different 
//      if(str==res)
//      {
//         console.log("This is Palindrome");
//      }
//      else{
//         console.log("This is Not Palindrome");
//      }
// }
// app("dad")

// 3) Write a function that returns the Fibonacci sequence up to a given number n.

//function app(n)
//{
 //let num1=0;
 //let num2=1;
 //let res;
//console.log(first)
 // for(let i=0;i<=n;i++)
 //{
   // sum=num1+num2;//1,2,3,5,8..
   // num1=num2;//1,1,2,3,5..
   // num2=sum;//1,2,3,5,8..
  // console.log(sum)
//}
//}
//app(5)

//4) find the largest number in an array?
//function app ()

//{
  const arr=[2,4,3,6]
//  console.log(Math.min(...arr))
  // let res=arr.sort((a,b)=>a+b)
  // console.log(res[arr.length-1])
//}
//app()

//5) Write a function to remove duplicates from an array.
//function app ()
//{
//const arr=[1,2,4,2,5,4,3,5];
//let sor=arr.sort((a,b)=>a-b)
//console.log(arr)
//const arr1=[]
 // console.log(...new Set(arr))
//for(let i=0;i<arr.length;i++)
//{
//if(arr[i]===arr[i+1]) 
//{
//console.log(arr[i])//arr1.push(arr[i])
//}
//}
//console.log(arr1)
//}
//app()

//6) How can you flatten a nested array in JavaScript?

//function app(arr)
//{
   //  Normal method 
  // const arr=[1,2,[3,4],[5,6],7,8];
 //  console.log(arr.flat(Infinity))
//Recursion method 
 // if(Array.isArray(arr)){
  // return arr.reduce((acc,val)=>Array.isArray(val)
   //               ?acc.concat(app(val)):acc.concat(val)
     //              ,[]);
      // } else{
       // return arr;
        // }
 // third method is tricky 
//  if(Array.isArray(arr))
  //  {
//   return arr.toString().split(",").map(Number)
// } else{
   //   return arr;
  //  }
//}
//console.log("Number : ", typeof(app(1,2,3,4)))
//console.log("Array : ",typeof(app([1,2,[3,4],[5,6],7,8])))
//console.log("Array : ",app([1,2,[3,4],[5,6],7,8]))

 // 7) Write a function to find the factorial of a number.
// function app(num)
 //{
  // this method is use recursion 
   //if(num===0||num===1)
    // {
    //   return 1;
   //  } else
    // {
    //   return num*app(num-1)
    // }

   //Logical method 
   // let res=1;
   //for(let i=1;i<=num;i++)
    // {
     //  console.log(res =res*i)
    // }
// }
//console.log(app(5))

// 8) How would you check if a string is a palindrome?
//function app(num)
//{
 // let org=num;
 // let res=0;
  //while(num>0)
   // {
   //   let a =num%10;
      //console.log(a);
      //num=parseInt(num/10);
     //console.log(num)
     // res=(res*10)+a
  /)  }
  //console.log(res)
  //if(org===res)
   // {
      //console.log("This is a Palindrome Number : ",res)
  //} else {
     // console.log("This is a not palindrome Number: ",res)
    //}
//}
//app(152)
// 9) Armstrong number

//function app(num)
//{
  //let org=num;
  //let res=0;
 // while(num>0)
   // {
      //let a=num%10;
      //num=parseInt(num/10);
     // res=res+(a*a*a);
   // }
  //console.log(res)
  //if(org===res)
   // {
    //  console.log("This number is a Armstrong ")
   // }
  //else {
   // console.log("This number is not Armstrong ")
 // }
//}
//app(153)