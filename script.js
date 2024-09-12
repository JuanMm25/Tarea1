//let
let nombre = "Juan";
let edad = 19;
let salario = 3000;
let impuestos = 0.15;
let mesesTrabajo = 12;
let bonificacion = 500;
let objetivosBonificacion = true;
let aumento = 0.10;
let ahorro = 2000;
let diasVacaciones = 15;

//const
const pi = 3.1416;
const añoNacimiento = 2005;
const tasaInteres = 0.05;
const nombreEmpresa = "Empresa tarea";
const maximoVacaciones = 30;

// operaciones
let salarioAnual = salario * mesesTrabajo; 
let salarioConBonificacion = salarioAnual + bonificacion;
let totalImpuestos = salarioAnual * impuestos;
let ahorroFinal = ahorro + (salarioAnual * aumento);
let diasRestantesVacaciones = maximoVacaciones - diasVacaciones;

// ternario
let mensajeObjetivos = objetivosBonificacion ? "Objetivos cumplidos, recibirás un bono" : "No alcanzaste los objetivos, no recibirás bono";
let mensajeVacaciones = diasVacaciones >= maximoVacaciones ? "Maximo de vacaciones alcanzado." : "Tienes días de vacaciones disponibles";


console.log("Salario anual: " + salarioAnual);
console.log("Salario con bonificación: " + salarioConBonificacion);
console.log("Total de impuestos: " + totalImpuestos);
console.log("Ahorro final: " + ahorroFinal);
console.log(mensajeObjetivos);
console.log(mensajeVacaciones);
