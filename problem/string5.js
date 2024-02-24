// ==== String Problem #5 ====
// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function Problem5(str){
    if(str.length===0){
       return [];
    }else {
        return JSON.stringify(str.join(' '))
    }
      
    

}

module.exports=Problem5;