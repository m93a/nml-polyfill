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
query.p = 'content/'+(query.p||'index.nml');

request.open('GET',query.p,false);
request.overrideMimeType('text/plain');
request.send();

var nmldoc = new NMLDocument();

//This code is launched every time user adds an element
nmldoc.observe('add',function(e){
 var node;
 if(e.parent == nmldoc){
  //Root element
  if(typeof e.target != "object"){return;}
  e.target.domequiv = document.documentElement;
  document
   .documentElement
   .setAttribute('data-nml-tag',e.target.tag.name);
  for(attr in e.target.attrs){
   document.documentElement
    .setAttribute(attr, e.target.attrs[attr]);
  }
 }else if(e.target.tag){
  if(
   //If new html6 element
   e.target.getNamespace()=="http://www.w3.org/1999/xhtml"
   && html6elem[e.target.tag.name]
  ){
   //Launch polyfill function
   html6elem[e.target.tag.name](e);
  }else{
   //Else add element
   node = document.createElementNS(
    e.target.getNamespace(),
    e.target.tag.name
   );
   for(attr in e.target.attrs){
    node.setAttribute(attr, e.target.attrs[attr]);
   }
   node.setAttribute('data-nml-tag',e.target.tag.name);
   e.target.domequiv = node;
   e.parent.domequiv.appendChild(node);
  }
 }else{
  node = new Text(e.target);
  e.parent.domequiv.appendChild(node);
 }
});

nmldoc.parse(request.responseText);

window.nmldoc = nmldoc;


});
