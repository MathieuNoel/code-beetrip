
const Game = {
  generate: ({levelP1, levelP2}) => {
    const result = [];
    let resultP1 = 0;
    let resultP2 = 0;
    let win = false
    while (win !== true){
      const lvlP1 = Math.floor(Math.random() * (levelP1 +1) * 100)
      const lvlP2 = Math.floor(Math.random() * (levelP2 +1) * 100)   
      if(lvlP1 < lvlP2){
        if( resultP2 <= resultP1 )resultP2++;
        if( resultP2 >= resultP1 && resultP1 <= resultP2 -1 || (resultP1 === 6 && resultP2 === 6)){
          resultP2++
          if(resultP1 >= 4){
            result.push(resultP1, resultP2)
            win = true;
            return result
          }
        };
      } else if(lvlP1 > lvlP2){
        if( resultP1 <= resultP2 )resultP1++;
        if( resultP1 >= resultP2 && resultP2 <= resultP1 -1 || (resultP1 === 6 && resultP2 === 6)){
          resultP1++
          if(resultP1 >= 4){
            result.push(resultP1, resultP2)
            win = true;
            return result
          }
        };
      }
    }
  },
}
module.exports = Game;