
class Cliente {
    nombreCliente;
    dniCliente;
    rucCliente
    
}

class cuentaCorriente {
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor) {
        this.saldo +=  valor;
    }
 }

const cliente1 = new Cliente();

cliente1.nombreCliente = "Wilmer";
cliente1.dniCliente = "45787629";
cliente1.rucCliente = "10457876292";

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numero = "12345678901";
cuentaCorriente1.saldo = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Carlos";
cliente2.dniCliente = "45787629";
cliente2.rucCliente = "10457876293"

const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numero = "12345678902"
cuentaCorriente2.saldo = 3000;
cuentaCorriente2.agencia = 1002;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);
