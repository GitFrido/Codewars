/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? 

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0

*/ 

function makeNegative(num) {
  if (num <= 0) {
    return num
    } else {
    return num * -1
    }
}
makeNegative(2); 


/* Your task is to make two functions, max and min (maximum and minimum in PHP)
 that take a(n) array/vector of integers list as input and outputs, respectively, 
 the largest and lowest number in that array/vector. */

// Solution 1 

list = [-52, 56, 30, 29, -54, 0, -110]

var min = function(list) {
  var min = list.sort(function(a, b) { 
  if (a > b) { 
    return 1; 
  } else {
    return -1; 
  }
})
return(min[0]); 
}

var max = function(list) {
  var max = list.sort(function(a, b) {
    if (a > b) { 
     return -1; 
    } else {
     return 1; 
    }
  })
return(max[0])
}

// Solution 2 

var min = function(list) {
  var min = list.sort((a, b) => a > b ? 1 : -1);  
  return(min[0]); 
}

var max = function(list) {
  var max = list.sort((a, b) => a > b ? -1 : 1); 
  return(max[0])
}