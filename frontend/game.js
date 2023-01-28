const app = {
  baseUrl: 'http://localhost:5050',
  gameState: {},
  init: () => {
    app.bindElements();
  },
  bindElements: () => {
    app.outputs = {      
      formsubmit: document.getElementById('form').addEventListener('submit', app.callApi)
      
    };    
  },
  callApi: async (event) => {
    //on intercepte la validation du formulaire par le user
    event.preventDefault();
    const json = {};
    //on place les infos des inputs dans un object
    for (let i=0; i<5; i++) {
        const input = event.target[i];
        if (input.value) {
            json[input.id] = input.value;
        }
    }           
    try {
      //on envoie l'object stringifié au serveur en indiquant le bon Content-Type
      const response = await fetch(`${app.baseUrl}/`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST', 
        body: JSON.stringify(json)
      });
        const ArrayOfResult = await response.json();
        //on affiche le tableau des résultats reçue en réponse        
        app.createArray(ArrayOfResult);
    } catch(error) {
        console.error(error);
    }
  },
  createArray: (ArrayOfResult) => {
    console.log(ArrayOfResult);
    let TTP1 = 0;
    let TTP2 = 0;
    let res1 = ArrayOfResult[0];
    let nbr  = ArrayOfResult[2];
    let res2 = ArrayOfResult[1];
    let container = document.querySelector('.container');
    const table = document.createElement('table');
    container.appendChild(table);
    const column1 = document.createElement('td');
    table.appendChild(column1);
    const row1 = document.createElement('tr');
    column1.appendChild(row1);
    row1.textContent = '  ';
    const row2 = document.createElement('tr');
    column1.appendChild(row2);
    row2.textContent = res1[Object.keys(res1)[Object.keys(res1).length - 1]];
    const row3 = document.createElement('tr');
    column1.appendChild(row3);
    row3.textContent = res2[Object.keys(res2)[Object.keys(res2).length - 1]];
    for(let j = 0; j < nbr ; j++) {
      const column = document.createElement('td');
      table.appendChild(column);         
      const row0 = document.createElement('tr');
      column.appendChild(row0);
      row0.textContent = `jeu n° ${j +1} `;
      const row1 = document.createElement('tr');
      if(res1[Object.keys(res1)[j]] > res2[Object.keys(res2)[j]])TTP1++      
      row1.textContent = res1[Object.keys(res1)[j]];
      column.appendChild(row1);
      const row2 = document.createElement('tr');
      if(res1[Object.keys(res1)[j]] < res2[Object.keys(res2)[j]])TTP2++
      row2.textContent = res2[Object.keys(res2)[j]];
      column.appendChild(row2);
      if( TTP1 > TTP2 +1 && TTP1 >= 4 || TTP2 > TTP1 +1 && TTP2 >= 4 || (TTP1 === 7 && TTP2 === 6) || (TTP1 === 6 && TTP2 === 7) ){
        const columnTT = document.createElement('td');
        table.appendChild(columnTT);
        const rowTT0 = document.createElement('tr');
        columnTT.appendChild(rowTT0);
        rowTT0.textContent = `victoire`;
        const rowTT1 = document.createElement('tr');
        rowTT1.textContent = TTP1;
        TTP1 = 0;
        columnTT.appendChild(rowTT1);
        const rowTT2 = document.createElement('tr');
        rowTT2.textContent = TTP2;
        TTP2 = 0;
        columnTT.appendChild(rowTT2);
        nbr = nbr - j 
        j = 0;
        } else if( j == nbr -1) {
          if(TTP1 > TTP2){
            const columnTT = document.createElement('td');
            table.appendChild(columnTT);
            const rowTT0 = document.createElement('tr');
            columnTT.appendChild(rowTT0);
            rowTT0.textContent = `Current Game`;
            const rowTT1 = document.createElement('tr');
            rowTT1.textContent = `AV`;
            columnTT.appendChild(rowTT1);
            const rowTT2 = document.createElement('tr');
            rowTT2.textContent = `-`;
            columnTT.appendChild(rowTT2);
          }else if(TTP2 > TTP1) {
            const columnTT = document.createElement('td');
            table.appendChild(columnTT);
            const rowTT0 = document.createElement('tr');
            columnTT.appendChild(rowTT0);
            rowTT0.textContent = `Current Game`;
            const rowTT1 = document.createElement('tr');
            rowTT1.textContent = `-`;
            columnTT.appendChild(rowTT1);
            const rowTT2 = document.createElement('tr');
            rowTT2.textContent = `AV`;
            columnTT.appendChild(rowTT2);
          }
        }     
    }
  }
}
document.addEventListener('DOMContentLoaded', app.init);