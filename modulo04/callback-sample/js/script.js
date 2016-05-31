/*
creo una funzione che salvi entrambi
i valori della form nei cookie

che prende in input tre parametri:
 - una key
 - una value per il cookie
 - è un qualcoa che vogliamo accada quando abbiamo finito
*/
function saveToCookie(){
   // assembliamo il cookie semplicemente concatenando la key, value
   var cookieValue = key + ',' + value;
   
   // ora assegniamo al cookie del document
   document.cookie += cookieValue;    
}

function saveTextValue(){
    // recupero il valore immesso
    var textValue = document.getElementsByName('position')[0].value;
    // come ultimo parametro gli passo una funzione da eseguire
    saveToCookie('Position', textValue, showTextSuccess);
}

function showTextSuccess(result){
    // faccio un alert con il contenuto di result
    window.alert('You successfully saved [' + result ']')
    
}

function saveRadioValue(){
    
}
