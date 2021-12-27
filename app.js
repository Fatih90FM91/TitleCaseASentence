// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".

// For this algorithm, you can use the split() method.

// titleCase("I'm a little tea pot")should return a string.
// titleCase("I'm a little tea pot")should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".



function titleCase(titleCase){

    let arr =[];
    let newArr=[];
    let thirdArr=[];

    arr=titleCase.split(" ");


 console.log( arr);

//  console.log(arr[0].toUpperCase());

 
//  console.log(arr[0].charAt(0).toUpperCase());

 for (let i = 0; i < arr.length; i++) {

    // thirdArr.push(arr[i]);
    
    for (let j = 0; j < arr[i].length; j++) {
        
        if(arr[i].charAt(j)==arr[i].charAt(0)){
        newArr=arr[i].charAt(0).toUpperCase().concat(arr[i].substr(1,arr[i].length-1).toLowerCase());

        thirdArr.push(newArr);

        console.log(newArr);
        }
      
    }
    
}


console.log( thirdArr);



  return titleCase;
}




titleCase("sHoRt AnD sToUt") ;


// arr[0].charAt(0).toUpperCase().concat(arr[])
// if(arr[j].charAt(j)===arr[0].charAt(0)){
//     newArr.push(arr[j].charAt(0).toUpperCase());
//     }else {
//         newArr.push(arr[j].charAt(j).toLowerCase());
//     }
        