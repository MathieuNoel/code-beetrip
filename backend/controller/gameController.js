const Game = require('../models/Game');

const GameController = {
  startGame: (request, response, next) => {        
    const { nameP1, nameP2, nbrPoint } = request.body
    let jeuP1 = [];
    let jeuP2 = [];
    for(let i = 0; i < nbrPoint; i++) {
      const result = Game.generate(request.body);
      if(result[0] > result[1] +2 )result[0] = result[1] +2
      if(result[1] > result[0] +2 )result[1] = result[0] +2      
      jeuP1.push(result[0]);
      jeuP2.push(result[1]);      
    }
    const RES = [{ ...jeuP1, nameP1},{...jeuP2, nameP2}, nbrPoint]
    
    console.log("RES", RES);            
    response.json(RES);
  }
};

module.exports = GameController;
//if( result[0] > result[1] +1 && result[1] < result[0] || (result[0] === 7 && result[1] === 6) || (result[0] === 6 && result[1] === 7)){
  // jeuP1.push(result[0]);
  // jeuP2.push(result[1]);
  // RES.push({ ...jeuP1, nameP1},{...jeuP2, nameP2}, nbr)
  // nbr = nbr - i 
  // i = 0;