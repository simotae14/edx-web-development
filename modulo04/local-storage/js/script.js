// uso oggetto localStorage
// per memorizzare un dato permanente

localStorage.setItem("lastname", "Simone");
var myname = localStorage.getItem("lastname");

console.log("Il mio nome nel local storage "+ myname);

// memorizzo invece i dati di sessione
// ovvero volatili
sessionStorage.clickcount = 0;
sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
var getClickCount = 'Click Count: ' + sessionStorage.clickcount;

console.log(getClickCount);