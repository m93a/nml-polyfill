window.addEventListener('load',function(){

document.documentElement.innerHTML = "";

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

nmldoc.observe('add',function(e){
 var node;
 if(e.parent == nmldoc){
  e.target.domequiv = document.documentElement;
  for(attr in e.target.attrs){
   document.documentElement
    .setAttribute(attr, e.target.attrs[attr]);
  }
 }else if(e.target.tag){
  node = document.createElementNS(
   e.target.getNamespace(),
   e.target.tag.name
  );
  for(attr in e.target.attrs){
   node.setAttribute(attr, e.target.attrs[attr]);
  }
  e.target.domequiv = node;
  e.parent.domequiv.appendChild(node);
 }else{
  node = new Text(e.target);
  e.parent.domequiv.appendChild(node);
 }
});

nmldoc.parse(request.responseText);

window.nmldoc = nmldoc;


});
