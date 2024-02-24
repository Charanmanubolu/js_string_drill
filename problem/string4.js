
// ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}


function problem4(obj){
    let name = Object.values(obj)
    return name.join(' ').toLocaleLowerCase();

}

module.exports = problem4