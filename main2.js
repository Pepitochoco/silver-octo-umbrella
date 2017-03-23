var data = [];
for (var i = 0; i<50; i++){
  data.push( 50 + Math.random() * 200 );
}


for (var i = 0; i < data.length; i++) {
  console.log(data[ i] );
  var div = document.createElement('div');

  div.style.height = '20px';
  div.style.background = 'black';
  div.style.marginBottom = '2px';
  div.style.width = data [i] + 'px';

  // créer un p avec document.Element
  // modifier son style pour que le texte soit blanc (color)
  // contenu texte du p = data[ i ](p.innerText)
  var p = document.createElement('p');

  p.style.color = 'white';
  p.innerText = data[i];

  div.appendChild (p);

  var body = document.querySelector('body');

  body.appendChild( div );

}
