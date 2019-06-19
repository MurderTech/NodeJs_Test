function getSquare(n){
  return n ** 2;
}

function getSquareRoot(n){
  return n ** (1/2);
}

function sumaVector(v){
  const matriz = v.split(',');
  let acum = 0;
  for (i=0;i<=matriz.length-1;i++){
      if (isNaN(matriz[i])){
          return 'Error';
      }else{
          acum+=parseInt(matriz[i]);
      }
  }
  return acum;
}

function genMatrix(m){
  let SIZE = m;
  let mat = [];
  let acum = 0;
  let row = '';
  let vTemp = '';
  let array = [];

  let resp = '';
  if (isNaN(SIZE)){
      return 'Error';
  }else{
      for (var i = 0; i < SIZE ; i++){
        mat.push([]);
        row = '';
        for (var j = 0; j < SIZE ; j++){
          var rand = Math.floor(Math.random()*10+0);
          if (i === j){acum += rand}
          mat[i].push(rand);
          row += '-- '+rand+' ';
        }
        vTemp = resp;
        if (vTemp == ''){
          resp = vTemp+(row.substring(2)); 
        }else{
          resp = vTemp+'<br>'+(row.substring(2)); 
        }
      }
      array.push(resp);
      array.push(acum);
      return array;
  }
}

function gatParVector(pv){
  const matriz = pv.split(',');
  let pares = 0;
  
  for(var x=0; x<matriz.length;x+=1){

    if (isNaN(matriz[x])){
        return 'Error';
    }else{
      let num = matriz[x];
      let comp = false;
      let pairs = 0;

      if(x>0){
        for(let y=0; y<x; y+=1){
          if (matriz[y]==num){
              comp = true;
              break;
          }
        }
      }
      if(comp == false){
        for(let z=0; z<matriz.length;z+=1){
          if (num == matriz[z]){
              pairs += 1;
          }
        }
        pares += Math.floor(pairs/2);
      }
    }
  }
  
  return pares;
}

module.exports = {
  getSquare,
  getSquareRoot,
  sumaVector,
  genMatrix,
  gatParVector
}