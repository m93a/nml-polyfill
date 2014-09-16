(function(){

window.query = {};

var queryarr = window.location.search.substr(1).split("&"),
    l = queryarr.length,
    i = -1,
    ñ = [];

while(++i<l){
 ñ = queryarr[i].split('=');
 ( ñ[0] )&&( query[ñ[0]] = ñ[1] );
}


var request = new XMLHttpRequest();
query.p = query.p||'index.nml';

request.open('GET',query.p,false);
request.overrideMimeType('text/plain');
request.send();

var nmldoc = new NMLDocument();
nmldoc.parse(request.responseText);
nmldoc = nmldoc.toDOM();

window.addEventListener('load',function(){
 document.head.innerHTML = nmldoc.head.innerHTML;
 document.body.innerHTML = nmldoc.body.innerHTML;
});

window.nmldoc = nmldoc;


})();
