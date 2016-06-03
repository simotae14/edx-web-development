// dichiaro la var istanza del worker
var worker;

// creo la funzione che inizia il worker
function startWorker() {
    worker = new Worker("js/worker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += '<li>' + event.data + '</li>';
    };
}

// la funzione per terminare il worker
function stopWorker() {
    worker.terminate();
}