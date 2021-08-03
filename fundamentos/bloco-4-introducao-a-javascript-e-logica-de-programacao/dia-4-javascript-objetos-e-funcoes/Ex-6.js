function verificaPalindrome (string) { 

  let resultado = string.split("").reverse().join("")
  
  if (string === resultado ) {
    return("True")
  }
  else {
    return ("False") 
    }
  }
  
  let resultadoFinal = verificaPalindrome("Srara")
  
  console.log (resultadoFinal)