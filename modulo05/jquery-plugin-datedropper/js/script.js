/*
inizializzo gli input text chiamando il metodo 
datedropper su essi
*/
$(document).ready(function () {
   $('#departureM').dateDropper({ format: 'm', placeholder: 'Select month' }); 
   $('#departureY').dateDropper({ format: 'Y', minYear: 2010, maxYear: 2030, placeholder: 'Select year' }); 
   $('#departureD').dateDropper({ placeholder: 'Select date' }); 
   $("#departure").dateDropper();
});

