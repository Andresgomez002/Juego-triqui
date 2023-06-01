let player = "x";
let seguirjugando = true;
let tablero = [["", "", ""],
               ["", "", ""],
               ["", "", ""]]
    function winner(){
        //horizontales
    for(let i = 0; i < 3; i++){
        if(tablero[i][0] == tablero [i][1] && tablero [i][1] == tablero [i][0]){
            return tablero[i][0];
        }
    }
        //verticales
    for(let i = 0; i < 3; i++){
        if(tablero[0][i] == tablero [1][i] && tablero[1][i] == tablero [2][i])
        return  tablero[0][i];
    }

        //diagonal izquierda a derecha
        if(tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero [2][2]){
            return tablero [0][0];

        }
        //diagonal derecha a izquierda
        if(tablero[0][2] == tablero [1][1] && tablero[1][1] == tablero[2][0]){
            return tablero[0][2];
        }
    }

     function empate(){
         for(let i = 0; i < 3; i++ ){
             for(let j = 0; j < 3; j++){
                 if(tablero [i][j] == ""){
                     return true;
                 }
             }
         }
         return false;
     }

     function ingresar(){
        player = (player == "x") ? "o" : "x";
        let fila = prompt("Jugador " + player +" Ingresa el valor de la fila: ")
        let columna = prompt("Jugador " + player +" Ingresa el valor de la columna: ")
        tablero[fila][columna] = player;
        console.log(tablero);

     }
     function trampa(){
        if(ingresar() == "x" && ingresar() == "o"){
            console.log("no seas tramposo");
            seguirjugando = false;
        }
     }
     
     trampa()

     do{
    ingresar();
  
   
    if(winner() == "x" || winner() == "o"  ){
        console.log("El jugador" + player +  "ha ganado");
        seguirjugando = false;
    } else {
        if(empate() == true){
            console.log("continua jugando");
        }else{
            console.log("el juego ha quedado en empate");
        }

    }
    
}while(seguirjugando == true);
console.log(winner());
    

    