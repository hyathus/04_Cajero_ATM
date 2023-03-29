const cuentas = [
{ nombre: "Persona 1", numeroCuenta: "1111", password: "1234", saldo: 1000 },
{ nombre: "Persona 2", numeroCuenta: "2222", password: "5678", saldo: 500 },
{ nombre: "Persona 3", numeroCuenta: "3333", password: "9012", saldo: 1200 }
];

function seleccionarCuenta() {
let cuenta = null;
while (cuenta === null) {
    const numeroCuenta = prompt("Ingrese el número de su cuenta:");
    const password = prompt("Ingrese su password:");
    for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].numeroCuenta === numeroCuenta && cuentas[i].password === password) {
        cuenta = cuentas[i];
        break;
    }
    }
    if (cuenta === null) {
    alert("Número de cuenta o password incorrecto, por favor intente de nuevo.");
    }
}
return cuenta;
}

function mostrarOperaciones() {
const operacion = prompt(
    "Seleccione una opción:\n" +
    "1. Consultar saldo\n" +
    "2. Ingresar monto\n" +
    "3. Retirar monto"
);
return parseInt(operacion);
}

function consultarSaldo(cuenta) {
alert(`El saldo actual de su cuenta es: $${cuenta.saldo}`);
}

function ingresarMonto(cuenta) {
const monto = parseInt(prompt("Ingrese el monto a ingresar:"));
if (isNaN(monto)) {
    alert("Monto inválido, por favor intente de nuevo.");
    return;
}
cuenta.saldo += monto;
alert(`Ha ingresado $${monto} a su cuenta. Su nuevo saldo es: $${cuenta.saldo}.`);
}

function retirarMonto(cuenta) {
const monto = parseInt(prompt("Ingrese el monto a retirar:"));
if (isNaN(monto)) {
    alert("Monto inválido, por favor intente de nuevo.");
    return;
}
if (monto > cuenta.saldo) {
    alert("No tiene suficiente saldo para retirar esa cantidad, por favor intente de nuevo.");
    return;
}
if (monto > 990 || cuenta.saldo - monto < 10) {
    alert("No se puede retirar esa cantidad debido a las restricciones de la cuenta, por favor intente de nuevo.");
    return;
}
cuenta.saldo -= monto;
alert(`Ha retirado $${monto} de su cuenta. Su nuevo saldo es: $${cuenta.saldo}.`);
}

function ejecutarCajero() {
const cuenta = seleccionarCuenta();
let operacion = mostrarOperaciones();
while (operacion !== 0) {
    switch (operacion) {
    case 1:
        consultarSaldo(cuenta);
        break;
    case 2:
        ingresarMonto(cuenta);
        break;
    case 3:
        retirarMonto(cuenta);
        break;
    default:
        alert("Opción inválida, por favor intente de nuevo.");
        break;
    }
    operacion = mostrarOperaciones();
}
}

// ejecutarCajero();

