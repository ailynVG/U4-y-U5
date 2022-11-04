/*Se declara un buffer y se le asigna un tamaño*/
var buffer1 = Buffer.alloc(20);

/*Se crea un nuevo buffer en el que contendremos una cadena de caracteres 
que se convertira a hexadecimal*/
var buffer2 = Buffer.from('Mitzi Ailyn');

/*Se muestra una cadena de caracteres en la consola*/
console.log('Este es un Buffer vacio');

/*Se muestra en consola el contenido del buffer1*/
console.log(buffer1);

/*Se muestra una cadena de caracteres en la consola*/
console.log('Este es el buffer creado con la cadena de caracteres');

/*Se muestra en consola el contenido del buffer2*/
console.log(buffer2);

/*Se muestra en consola el contenido de la posición 0 del buffer2*/
console.log(buffer2[0]);

/*Se asignan valores a las posiciones del buffer2*/
buffer2[0] = 23;
buffer2[1] = 45;
buffer2[2] = 10;
buffer2[3] = 80;

/*Nos muestra en texto el contenido del buffer2*/
console.log(buffer2.toString());