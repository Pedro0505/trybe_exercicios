let movimentoPeca = "rei"; 

switch (movimentoPeca.toLowerCase()) {
  case "peão":
    console.log ("Peão se move em uma casa na horizontal sempre em frente");
    break;

  case "bispo":
    console.log ("Bispo se move na diagonal apenas em casas disponíveis ");
    break;

  case "cavalo":
    console.log ("Cavalo se move em L para qualquer lado podem passar por cima de outras peças");
    break;
  
  case "torre":
    console.log ("Se move na horizontal e na vertical por todas as casas disponíveis");
    break;

  case "rainha" :
    console.log ("Se move em diagonal, vertical e horizontal");
    break;
  
  case "rei":
    console.log ("Se move em uma casa para todos os lados disponíveis")
    break;
  
  default :
    console.log ("Error 404");
  }




  
 
