let player = 'x';
let seguirJugando= true;
let tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function winner(){
    //horizontales
    for(let i = 0; i < 3; i++){
        if(tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero [i][2]){
            return tablero[i][0];
        }
    }
    //vertical
    for(let i = 0; i < 3; i++){
        if(tablero[0][i] == tablero[1][i] && tablero[1][i] == tablero [2][i]){
            return tablero[i][0];
        }
    }
    // Diagonal de izquierda a derecha
	if( tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] ){
		return tablero[0][0];

	}

	// Diagonal de Derecha a Izquierda
	if(tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0] ){
		return tablero[0][2];
	}
}

function empate(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++) {
            if(tablero[i][j]== ""){
                return true;
            }
        }
    }
    return false;
}

function ingresar(){
    
     player = (player== 'x')? 'o':'x';
    
     let fila = prompt("Jugador " + player +" Ingresa el valor de la fila: ")
     let columna = prompt("Jugador " + player +" Ingresa el valor de la columna: ")
     if(tablero[fila][columna] == ""){
        tablero[fila][columna] = player;
        console.log(tablero);
        }
        else{
            console.log("¡¡no hagas trampa!!");
            ingresar()
        }
}



do{
    ingresar();
    if(winner()== "x" || winner()== "o"){
        console.log("ha ganado el jugador " + player); 
        seguirJugando = false;
    
    }
    else{
        if(empate()==true){
            console.log("continua jugando");
        }
        else{
            console.log("han empatado");
        }
        
    }
} while(seguirJugando == true);


console.log(winner());


