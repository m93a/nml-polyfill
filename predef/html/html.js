window.html6elem = {
 
 //<html:media />
 'media':function(e){
  var node;
  
  switch(e.target.attrs['type']){
   
   case 'img':
   case 'image':
    node = document.createElementNS(
     e.target.getNamespace(), 'img'
    );
    if(e.target.attrs['src']){
     node.src = e.target.attrs['src'];
    }
    break;
   
   case 'audio':
   case 'video':
    node = document.createElementNS(
     e.target.getNamespace(), e.target.attrs['type']
    );
    if(e.target.attrs['src']){
     node.src = e.target.attrs['src'];
    }
    if('controls' in e.target.attrs){
     node.controls = true;
    }
    break;
   
   default:
    node = document.createElementNS(
     e.target.getNamespace(), 'object'
    );
    break;
  };
  
  node.setAttribute('data-nml-tag',e.target.tag.name);
  e.target.domequiv = node;
  e.parent.domequiv.appendChild(node);
 },
 
 //<html:link />
 'link':function(e){
  var node;
  
  switch(e.target.attrs['rel']){
   case 'script':
    node = document.createElement('script');
    node.defer = true;
    node.src = e.target.attrs['href']
            || e.target.attrs['src' ];
    break;
   
   default:
    node = document.createElement('link');
    node.rel  = e.target.attrs['rel' ];
    node.href = e.target.attrs['href']
             || e.target.attrs['src' ];
    break;
  };
  
  node.setAttribute('data-nml-tag',e.target.tag.name);
  e.target.domequiv = node;
  e.parent.domequiv.appendChild(node);
 },
 
 //<html:source />
 'source':function(e){
  if(e.parent.domequiv.tagName=='img'){
   throw new InternalError('not implemented');
  }else{
   node = document.createElement('source');
   node.src  = e.target.attrs['src' ]||'';
   node.type = e.target.attrs['type']||'';
   node.setAttribute('data-nml-tag',e.target.tag.name);
   e.target.domequiv = node;
   e.parent.domequiv.appendChild(node);
  }
 }
};
