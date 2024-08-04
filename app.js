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

/**
 * Función que borra toda la entrada (resetea la calculadora)
 */
function reset() {
     inputOperation.placeholder = 0;
     result.innerText = 0;
}

/**
 * Función que da al botón de borrado la funcionalidad de un backspace, para borrar
 * lo último que se haya escrito
 */
function backSpace() {
     let txt = inputOperation.placeholder;
     txt=txt.substring(0, txt.length-1);
     inputOperation.placeholder=txt;
}

/* ========================
     EVENTO PRINCIPAL
   ======================== */
function DOMLoaded() {
     inputOperation = document.getElementById('userInput');
     result = document.getElementById('result');

     //Añadimos el listener a los botones numéricos
     let digitButtons = document.getElementsByClassName('button');
     for (let btn of digitButtons) {
          btn.addEventListener('mousedown', addText);
     }

     //Listener para el botón de reset (AC)
     let acButton = document.getElementById('ac');
     acButton.addEventListener('mousedown', reset);

     //Evento de borrado
     let dltButton = document.getElementById('delete');
     dltButton.addEventListener('mousedown', backSpace);
}
/* ===========================
        LLAMADA PRINCIPAL
   =========================== */
document.addEventListener('DOMContentLoaded', DOMLoaded);
