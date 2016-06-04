$(document).ready(function () {
    // inizializzamo il carousel
    $("#owl-demo").owlCarousel({
       autoplay : 3000,
       stopOnHover : true,
       navigation : true,
       paginationSpeed : 1000,
       goToFirstSpeed : 2000,
       singleItem : true,
       autoHeight : true,
       transitionStyle : "fade" 
    });
});