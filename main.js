//var p = document.createElement('p');
//console.log( p );
/*
var a = [ 2, 4, 8, 67, 98];

console.log( a ); //tableau
console.log(a.length); //nbr d'elements dans le tableau
console.log(a[0]);// premier element dans le tableau
console.log(a[1]);//deuxième element dans le tableau
console.log(a[a.length - 1]);//dernier élément en se basant sur la longueur

for (var index = 0; index < a.length; index++ ) {
  console.log(index, a[index]);
}

a.push (100);
console.log(a);


var b = {
  prop1 : 10,
  prop2 : 50,
  prop3 : "test"
};
console.log(b);
console.log(b.prop1);

b.test = true;
console.log(b.test);

b.test2 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(b.test2);

var rect = [10, 50, 100, 150]; // x, y , largeur, hauteur
rect [2];
*/

var b = {
  prop1 : 10,
  prop2 : 50,
  prop3 : "test",
  sayHello : function( name ){
    console.log("hello" + name );
  }
};


b.sayHello("bitch");
