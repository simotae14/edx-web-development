/* 
creo la funzione
makeRequests
*/
/*
function makeRequests() {
    // invoco il metodo jQuery $.ajax
    $.ajax({
        // configuro invocazione ajax
        // url volutamente inesistente per testare l'errore
        //url: 'http://www.example.com/api',
        // inserisco un url vero
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json'
    })
    // gestione success
    .done(function(response) {
        $('body > p').text(
            JSON.stringify(response)
        );
    })
    // gestione errore
    .fail(function() {
       alert('An error has occured'); 
    });
}
*/

/*
function makeRequests() {  
    $.get({
        url: 'http://httpbin.org/user-agent',
        dataType: 'json'
    })
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response['user-agent']
            );
        });
}
*/

function makeRequests() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}

// aggiungo il codice che runna una volta che il
// DOM è stato caricato
$(document).ready(function () {
   // ed invoco la funzione makeRequests
   makeRequests(); 
});