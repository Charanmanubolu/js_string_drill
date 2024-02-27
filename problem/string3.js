

// ==== String Problem #3 ====
// Given a string in the format of "20/1/2021", print the month in which the date is present in.

function problem3(string){
    let date = new Date(string)
    let month = date.getMonth();
    let monthName= [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
      ];
      return monthName[month];

      
}

module.exports= problem3;