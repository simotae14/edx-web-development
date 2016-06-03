/*
Using the editor for the script.js file, add the following block of JavaScript that will run the anonymous callback method after the DOM is loaded:
*/
$(document).ready(function () {
    /*
    Within the editor for the script.js file, add a new function named manipulateDOM:
    */
    manipulateDOM();
});

/*
creo funzione manipulateDOM
*/
function manipulateDOM(){
    // get all h1 headers in the DOM
    var h1Headers = $('h1');
    // set the text of the elements to Hello World
    h1Headers.text('Hello World');
    
    // get all h3 headers in the DOM
    var h3Headers = $('h3');
    
    // set the foreground color of the elements to a shade of green
    h3Headers.css('color', '#37887D');
    
    // add a strike-through line to the first element in the list:
    h3Headers.first().css('text-decoration', 'line-through');
    
    // get the last h3 header in the DOM
    var lastH3Header = $('h3:last');
    
    // set the background color of the element to a shade of purple
    lastH3Header.css('background-color', '#53226A');
}
