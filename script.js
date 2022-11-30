// // Question for Anonymous & IIFE Functions:

// //Q - Print odd numbers in an array
// //Anonymous  : 

// var arr = [12,13,14,15,17,19,21]
// var result =[];
// var odd = function(arr){
//      for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//            result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(odd(arr));

    // function (array){
    //               for(var i = 0 ; i< array.length ; i++){
    //                     if(array[i]%2!==0){
    //                        console.log(array[i])
    //                     } 
    //                }
    //             }

    // ( function odd(arr){
    //     var result =[];
    //           for(var i=0;i<arr.length;i++){
    //               if(arr[i]%2!=0){
    //                  result.push(arr[i]);
    //               }
    //           }
    //         console.log (result);
    //       }
    //      )([12,13,14,15,17,19])


// //IIFE :    

//    (function(array){
//              for(var i = 0 ; i< array.length ; i++){
//                         if(array[i]%2!=0){
//                            console.log(array[i])
//                         } 
//                    }
//              })([1,2,3,4])

// //Q - Convert all the strings to title caps in a string array  
// //Anonymous :   

    function (str) {
                                str = str.toLowerCase().split(' ');
                                for (var i = 0; i < str.length; i++) {
                                  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                                } 
                                return str.join(' ');
                              }

// //IIFE :

//     (function (str) {
//                                 str = str.toLowerCase().split(' ');
//                                 for (var i = 0; i < str.length; i++) {
//                                   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//                                 } 
//                                 return str.join(' ');
//                               })("MUDRA IS MY NAME");

// //Q - Sum of all numbers in an array 
// //Anonymous  :  

//     function(array){
//                   var sum = 0;
//                   for(var i = 0 ; i< array.length ; i++){
//                      sum = sum + array[i];
//                    }
//                    return sum;
//                 }

// //IIFE :   

//     (function(array){
//              var sum = 0;
//                   for(var i = 0 ; i< array.length ; i++){
//                      sum = sum + array[i];
//                    }
//                    return sum;
//              })([1,2,3,4])

// //Q - Return all the prime numbers in an array
// //Anonymous :

//     function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   }
// //IIFE :
//                     (  
//                    function(numArray){
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   })([1,2,3,4])

// //Q - Return all the palindromes in an array
// //Anonymous :

//     function (arr, n)
//     {
//         for (let i = 0; i < n; i++)
//         {
//             let ans = isPalindrome(arr[i]);
//             if (ans == false)
//                 return false;
//         }
//         return true;
//     }
    
// //IIFE : 

//     (function (arr, n)
//         {
//             for (let i = 0; i < n; i++)
//             {
//                 let ans = isPalindrome(arr[i]);
//                 if (ans == false)
//                     return false;
//             }
//             return true;
//         })([1,2,3] , 3)

// //Q.Remove duplicates from an Array
// //Anonymous :

//     function(array){
//                         let dup = [...new Set(array)];
//                         console.log(dup);
//                       }

// //IIFE :    

//     (function(array){
//                         let dup = [...new Set(array)];
//                         console.log(dup);
//                        })([1,1,2,3,4])

// //Q.Rotate an array by K times
// //Anonymous :

//     function(array , k){
//                           k = k % a.length;
//                             if(k < 0){
//                               k += a.length;
//                             }

//                             reverse(a, 0, a.length - k - 1);
//                             reverse(a, a.length - k, a.length - 1);
//                             reverse(a, 0, a.length - 1);
//                           }
                          
// //IIFE :   

//     (function(array , k){
//                           k = k % a.length;
//                             if(k < 0){
//                               k += a.length;
//                             }

//                             reverse(a, 0, a.length - k - 1);
//                             reverse(a, a.length - k, a.length - 1);
//                             reverse(a, 0, a.length - 1);
//                           })([1,2,3,4] , 2)
                       
// // Question for Arrow Functions:

// //Q)Print odd numbers in an Array
// //Arrow Function :

// var odd = (arr)=>{
//     var result =[];
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]%2!=0){
//                result.push(arr[i]);
//             }
//         }
//         return result;
// }
// console.log(odd([12,13,14,15,17,19,21,23,24]))

//     oddNumbers = (array) => {
//     for(var i = 0 ; i< array.length ; i++){
//          if(array[i]%2!=0){
//             console.log(array[i])
//          } 
//     }
//          }

// //Q)Convert all the strings to title caps in a string array
// //Arrow Function : 

//     titleCase = (str) => {
//                             str = str.toLowerCase().split(' ');
//                             for (var i = 0; i < str.length; i++) {
//                               str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//                             } 
//                             return str.join(' ');
//                           }    

// //Q)Sum of all numbers in an array 
// //Arrow Function :     

//     sum = (array)=>{
//                                        var sum = 0;
//                                             for(var i = 0 ; i< array.length ; i++){
//                                                sum = sum + array[i];
//                                              }
//                                              return sum;
//                                              }    
            
// //Q)Return all the prime numbers in an array
// //Arrow Function :
    
//        primeNumber = (numArray) => {
//                       numArray = numArray.filter((number) => {
//                         for (var i = 2; i <= Math.sqrt(number); i++) {
//                           if (number % i === 0) return false;
//                         }
//                         return true;
//                       });
//                       console.log(numArray);
//                   }  
                  
// //Q)  Return all the palindromes in an array
// //Arrow Function: 

//     Palindrome = (arr, n) =>
//         {
//             // Traversing each element of the array
//             // and check if it is palindrome or not
//             for (let i = 0; i < n; i++)
//             {
//                 let ans = isPalindrome(arr[i]);
//                 if (ans == false)
//                     return false;
//             }
//             return true;
//         }                    