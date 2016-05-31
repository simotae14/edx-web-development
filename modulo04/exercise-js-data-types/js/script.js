var $elem = document.getElementById('output');
//$elem.innerHTML += 'Test';
// appare Test

//$elem.innerHTML += 4 + 6;
// appare 10

//$elem.innerHTML += 4 + 6 + 'Demo';
// appare 10Demo

//$elem.innerHTML += 'Demo ' + 4 + 6;
// appare Demo 46

$elem.innerHTML += 'Demo ' + ( 4 + 6 );
// appare Demo 10


