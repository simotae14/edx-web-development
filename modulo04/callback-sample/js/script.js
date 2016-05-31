/*
creo una funzione che salvi entrambi
i valori della form nei cookie

che prende in input tre parametri:
 - una key
 - una value per il cookie
 - è un qualcoa che vogliamo accada quando abbiamo finito
*/
function saveToCookie(key, value, onCompletion){
   // assembliamo il cookie semplicemente concatenando la key, value
   var cookieValue = key + ',' + value;
   
   // ora assegniamo al cookie del document
   document.cookie += cookieValue;
   
   // ed invoco la terza funzione
   onCompletion(cookieValue);    
}

function saveTextValue(){
    // recupero il valore immesso
    var textValue = document.getElementsByName('position')[0].value;
    // come ultimo parametro gli passo una funzione da eseguire
    saveToCookie('Position', textValue, showTextSuccess);
}

function showTextSuccess(result){
    // faccio un alert con il contenuto di result
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
    
}

function saveRadioValue(){
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    
    // creo un for per ciclare tutti i valori
    for (var index = 0; index < radioOptions.length; index++) {
        // controlliamo se l'elemento è checkato
        if(radioOptions[index].checked) {
            // assegno a radioValue il valore dell'elemento
            radioValue = radioOptions[index].value;
            break;
        }
    }
    // invochiamo ora il saveToCookie
    saveToCookie('Department', radioValue, function (result) {
       window.alert("You did it! You saved [" + result + "]"); 
    });
}
