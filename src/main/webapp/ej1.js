let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth() + 1; 
let anyoActual = fechaActual.getFullYear();



let calendario = {
  dia: 22, 
  mes: "Febrero", 
  anyo: 2024 
};



if (diaActual === calendario.dia && mesActual === calendario.mes && anyoActual === calendario.anyo) {
  document.write("Es hoy");
} else {
 document.write("Aún falta");
}