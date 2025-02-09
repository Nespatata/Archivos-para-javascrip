// Para mantener un rango entre 0 y 100
let notaEstudiante = 0;
do {
    notaEstudiante = parseInt(prompt("Ingrese su nota"));

    if (isNaN(notaEstudiante)|| notaEstudiante <0 || notaEstudiante > 100) {
        alert("Error: Ingrese una nota valida");
    }
} while (isNaN(notaEstudiante)||notaEstudiante < 0 || notaEstudiante > 100);

// Diferentes resultados dependiendo de la nota
console.log(notaEstudiante) 
    if ( notaEstudiante >= 90){
        console.log("Excelente");  
}   else if (notaEstudiante >= 75 && notaEstudiante <=89){
        console.log("Bien");
}   else if (notaEstudiante >= 60 && notaEstudiante <=74){
    console.log("Suficiente");    
}   else {
    console.log("no aprueba");
}

