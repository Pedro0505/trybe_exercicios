function verificaPalindrome (string) { 

  const result = string.split("").reverse().join("")
  return result === string ? false : true
}
  
console.log(verificaPalindrome("Srara"))
