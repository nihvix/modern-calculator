/* ====================
        VARIABLES
   ==================== */
var inputOperation;
var result;
var item;
var text = "";

/* ====================
     FUNCIONES
==================== */
/**
 * Función para añadir el texto del botón a la pantalla
 * @param {Event} event 
 */
function addText(event) {
     item = event.target;
     text += "" + item.innerText;
     console.log(text);
     inputOperation.placeholder = text;
}

function reset(){
     inputOperation.placeholder = 0;
     result.innerText=0;
}

/* ========================
     EVENTO PRINCIPAL
   ======================== */
function DOMLoaded(event) {
     inputOperation = document.getElementById('userInput');
     result = document.getElementById('result');

     //Añadimos el listener a los botones numéricos
     let digitButtons = document.getElementsByClassName('button');
     for (let btn of digitButtons) {
          btn.addEventListener('mousedown', addText);
     }

     //Listener para el botón de reset (AC)
     let acButton=document.getElementById('ac');
     acButton.addEventListener('mousedown', reset);

}
/* ===========================
        LLAMADA PRINCIPAL
   =========================== */
document.addEventListener('DOMContentLoaded', DOMLoaded);
