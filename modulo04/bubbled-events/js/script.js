/*
applico solo alla sezione + interna
var innerMostElement = document.getElementsByClassName('innermost')[0];

// sull'evento invoco una funzione handler
innerMostElement.onclick = handleClick;

function handleClick(event) {
    console.log(event.target.className);
    // stampa innermost
}
*/

// definisco la funzione handler per tutti gli elementi
// section
var section = document.getElementsByTagName('section');

//console.log("section ", section);
// quello che mi restituisce è una lista
// di section.classe

// li ciclo con un for 
for (var index = 0; index < section.length; index++) {
    // invoco l'handler del click su tutte le sezioni
    section[index].onclick = handleClick;
}

/*
function handleClick(event) {
    console.log(event.target.className);
}
*/

// rendiamo il console.log + descrittivo
function handleClick(event){
    console.log('current element: ' +
    this.className + '| target element: ' + event.target.className);
    
    // vogliamo stoppare la propagazione se il nome della classe è regular
    if (this.className == 'regular'){
        event.stopPropagation();
        console.log('event propagation stopped');
    }
}