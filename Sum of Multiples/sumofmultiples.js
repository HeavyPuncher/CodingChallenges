function sumMul(n,m){
    let currentNum = 0;
  //Declare a variable to be assigned to our sum of multiples 
    
    if(n <= 0 || m <= 0){
        return "INVALID";
      }
  //Checks if n or m is less than or equal to 0, if so then, "INVALID" is returned
    
    for(i = 1; n*i < m; i++){
        currentNum = currentNum + n*i;
    }
  //Loop while n multiplied by value of i is less than m
  //Reassign the current and add it to n*i until the desired the output is achieved
  
    return currentNum;
  //Return the variable that contains the sum of multiples outside the for loop
  //Returned outside for loop so that it doesn't break the loop
  }
