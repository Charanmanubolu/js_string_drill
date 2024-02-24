
// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.



function Problem2(str){
    let regExpOFIpv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
  if(!regExpOFIpv4.test(str)) {
    return [];
  }
  let result =str.split('.').map(Number);
  return result;
  
}


module.exports=Problem2
