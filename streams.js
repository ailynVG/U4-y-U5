/*Process, permite manejar los flujos de entrada y de salida dada por el usuario a través de la consola*/
process.stdin.resume();

/*Define la codificación con la que se recibirá el mensaje*/
process.stdin.setEncoding('ascii');

/*El método "on" hace la lectura de los datos ingresados en la consola, cuando estos datos son ingresados, 
se activa la función ‘data’ que recibe la línea de texto*/
process.stdin.on('data', function(line){
    
    /*Una vez obtenido el valor, este puede ser devuelto mediante un flujo de salida, 
    utilizando el método "stdout" que a su vez utiliza el método "write"*/
   process.stdout.write(line);
});