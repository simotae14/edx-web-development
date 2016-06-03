// creo una funzione
function correctMethodName() {  
    return "Output Message";
}

/* 
invocazione corretta
// aggiungo un'invocazione alla funzione
var result = correctMethodName(3);

// stampo il risultato sul document
document.writeln(result);
// viene stampato il return della funzione
*/

/*
invocazione errata, di un metodo inesistente

var result = wrongMethodName(3);

// stampo il risultato sul document
document.writeln(result);

// ottieni a console
// script.js:19 Uncaught ReferenceError: wrongMethodName is not defined
*/

/*
CREO BLOCCO DI CODICE PER GESTIRE LE ECCEZIONI
*/
try{
    var result = wrongMethodName(3);
    // stampo il risultato sul document
    document.writeln(result);
}catch (error){
    //document.writeln("An error occurred");
    // do maggior formattazione all'errore
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>"); 
}