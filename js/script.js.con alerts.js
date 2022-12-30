//Simulador de presupuestos para estudio contable
// declaro los tres servicios a cotizar y los costos x impuesto liquidado

const servicioImpositivo = "Impuestos";
const servicioContable = "Contabilidad";
const servicioAuditoria = "Auditoria";
const costoImpuestoIIBB = 5000;
const costoImpuestoIVA = 3000;
const costoImpuestoGanancias = 7000;
const costoSociedadSRL = 5000;
const costoSociedadSA = 10000;
const costoSociedadSAS_SAU = 15000;
const costoConstitucionSociedadSRL = 67510;
const costoConstitucionSociedadSA = 85830;
const costoConstitucionSociedadSAS = 84660;

//pregunto al cliente que servicio elige
let servicioElegido;
let impuestoElegido;
let stringServicioImpositivo = "Impuestos";
let stringServicioContable = "Contabilidad";
let stringServicioAuditoria = "Auditoria";
//let promptImpuestoIVA;
//let promptImpuestoIIBB;
//let promptImpuestoGanancias;


// INICIO validar entrada de cliente

function validarServicioElegido() {
    //console.log(servicioElegido, "Estamos aca")
    while (servicioElegido !== "Impuestos" && servicioElegido !== "Contabilidad" && servicioElegido !== "Alta de Sociedades") {
        console.log(servicioElegido, "Estamos aca")
        servicioElegido = prompt("Por favor ingrese un servicio válido a Cotizar: Impuestos / Contabilidad / Alta de Sociedades");
    }
}
validarServicioElegido();
//alert("anda mal")
alert("Servicio Elegido " + servicioElegido);

// FIN validar entrada de cliente




// INICIO si el cliente elige Impuestos le pregunto que servicios desea cotizar
if (servicioElegido === "Impuestos") {

    let cantidadComprobantes = parseInt(prompt("Ingrese Cantidad de comprobantes mensuales"), 10);
    let costoServicioImpuestos;

    cantidadComprobantes = validarTipoDeDatoComprobantes(cantidadComprobantes);

    if (cantidadComprobantes <= 50) {
        costoServicioImpuestos = 3000
    } else if (cantidadComprobantes == 50) {
        costoServicioImpuestos = 4000
    } else if (cantidadComprobantes >= 50) {
        costoServicioImpuestos = 5000
    }

    let costoFinal = costoServicioImpuestos;
    promptImpuestoIVA = prompt("Queres cotizar IVA?");
    promptImpuestoIVA = validarPromptImpuestosIncluidos(promptImpuestoIVA, "IVA");


    if (promptImpuestoIVA === "si") {
        costoFinal += costoImpuestoIVA
        alert("costo Impuestos IVA: " + costoFinal)
    }

    promptImpuestoIIBB = prompt("Queres cotizar IIBB?");
    promptImpuestoIIBB = validarPromptImpuestosIncluidos(promptImpuestoIIBB, "IIBB");


    if (promptImpuestoIIBB == "si") {
        costoFinal += costoImpuestoIIBB
        alert("costo Impuesto IIBB: " + costoFinal)
    }

    promptImpuestoGanancias = prompt("Queres cotizar Ganancas?");
    promptImpuestoGanancias = validarPromptImpuestosIncluidos(promptImpuestoGanancias, "Ganancias");


    if (promptImpuestoGanancias == "si") {
        costoFinal += costoImpuestoGanancias
        alert("costo Impuesto Ganancias: " + costoFinal)
    }
    alert("costo Impuesto Ganancias: " + costoFinal)
}
// FIN si el cliente elige Impuestos le pregunto que servicios desea cotizar





// INICIO si el cliente elige Contabilidad le pregunto que servicios desea cotizar
if (servicioElegido === "Contabilidad") {

    let cantidadCuentasBancarias = parseInt(prompt("Ingrese Cantidad de Cuentas Bancarias"), 10);
    let costoServicioContabilidad;

    cantidadCuentasBancarias = validarTipoDeDatoCuentasBancarias(cantidadCuentasBancarias);

    if (cantidadCuentasBancarias === 1) {
        costoServicioContabilidad = 5000
    } else if (cantidadCuentasBancarias <= 5) {
        costoServicioContabilidad = 10000
    } else if (cantidadCuentasBancarias > 5) {
        costoServicioContabilidad = 20000
    }


    let costoFinal = costoServicioContabilidad;
    promptSociedadSRL = prompt("Queres cotizar una SRL?");
    promptSociedadSRL = validarPromptSociedadElegida(promptSociedadSRL, "SRL");

    if (promptSociedadSRL === "si") {
        costoFinal += costoSociedadSRL
        alert("costo Contabilidad de SRL: " + costoFinal)
    }

    promptSociedadSA = prompt("Queres cotizar una S.A.?");
    promptSociedadSA = validarPromptSociedadElegida(promptSociedadSA, "SA");

    if (promptSociedadSA === "si") {
        costoFinal += costoSociedadSA
        alert("costo Contabilidad de SA: " + costoFinal)
    }

    promptSociedadSAS_SAU = prompt("Queres cotizar una SAU o SAS?");
    promptSociedadSAS_SAU = validarPromptSociedadElegida(promptSociedadSAS_SAU, "SAS/SAU");

    if (promptSociedadSAS_SAU === "si") {
        costoFinal += costoSociedadSAS_SAU
        alert("costo Contabilidad de SAU: " + costoFinal)
    }

    // FIN si el cliente elige Contabilidad le pregunto que servicios desea cotizar
}



// INICIO si el cliente elige Alta de Sociedades le pregunto que servicios desea cotizar
if (servicioElegido === "Alta de Sociedades") {

    let cantidadSocios = parseInt(prompt("Ingrese Cantidad de Socios de la Sociedad"), 10);
    let costoServicioSociedades;

    cantidadSocios = validarTipoDeDatoSocios(cantidadSocios);

    if (cantidadSocios <= 2) {
        costoServicioSociedades = 3000
    } else if (cantidadSocios == 3) {
        costoServicioSociedades = 5000
    } else if (cantidadSocios > 4 && cantidadSocios < 6) {
        costoServicioSociedades = 8000
    }

    let costoFinal = costoServicioSociedades;
    promptAltaSociedadSRL = prompt("Queres cotizar un Alta de S.R.L?");
    promptAltaSociedadSRL = validarPromptAltaSociedadElegida(promptAltaSociedadSRL, "S.R.L");

    if (promptAltaSociedadSRL === "si") {
        costoFinal += costoConstitucionSociedadSRL
        alert("costo Constitucion de SRL: " + costoFinal)
    }

    promptAltaSociedadSA = prompt("Queres cotizar un Alta de S.A.?");
    promptAltaSociedadSA = validarPromptImpuestosIncluidos(promptAltaSociedadSA, "S.A.");

    if (promptAltaSociedadSA == "si") {
        costoFinal += costoConstitucionSociedadSA
        alert("costo Constitucion de S.A.: " + costoFinal)
    }

    promptAltaSociedadSAS = prompt("Queres cotizar un Alta de S.A.S?");
    promptAltaSociedadSAS = validarPromptImpuestosIncluidos(promptAltaSociedadSAS, "S.A.S");


    if (promptAltaSociedadSAS == "si") {
        costoFinal += costoConstitucionSociedadSAS
        alert("costo Constitucion de S.A.S " + costoFinal)
    }


}
// FIN si el cliente elige Impuestos le pregunto que servicios desea cotizar







































// FUNCIONES DE IMPUESTOS //

function validarTipoDeDatoComprobantes(comprobantes) {
    alert("estamos acaa")
    while (isNaN(comprobantes)) {
        alert("Dato no válido, ingrese nuevamente")
        comprobantes = parseInt(prompt("Ingrese Cantidad de comprobantes mensuales"), 10);
    }
    alert(comprobantes + " Comprobantes");
    return comprobantes;
    console.log()
}

function validarPromptImpuestosIncluidos(tipoDeImpuesto, nombre) {

    alert(tipoDeImpuesto + " Cotizas " + nombre)
    while (tipoDeImpuesto != "si" && tipoDeImpuesto != "no") {
        console.log(tipoDeImpuesto, "Estamos aca")
        alert("Por favor ingrese si o no");
        tipoDeImpuesto = prompt("Queres cotizar " + nombre + "?");
    }
    return tipoDeImpuesto;
}
// FUNCIONES DE IMPUESTOS //







// FUNCIONES DE CONTABILIDAD //

function validarTipoDeDatoCuentasBancarias(CuentasBancarias) {
    //alert("estamos acaa")
    while (isNaN(CuentasBancarias) || CuentasBancarias === 0) {
        alert("Dato no válido, ingrese un valor numerico mayor a 0")
        CuentasBancarias = parseInt(prompt("Ingrese Cantidad de Cuentas Bancarias"), 10);
    }
    alert(CuentasBancarias + " Cuentas Bancarias")
    return CuentasBancarias;

}

function validarPromptSociedadElegida(tipoDeSociedad, nombre) {
    alert(tipoDeSociedad + "Cotizas" + nombre)
    while (tipoDeSociedad !== "si" && tipoDeSociedad !== "no") {
        console.log(tipoDeSociedad, "Estamos Aaca")
        alert("Ingresa si o no por favor");
        tipoDeSociedad = prompt("Queres Cotizar una " + nombre + "?");
    }
    alert("tipo de sociedad " + tipoDeSociedad)
    return tipoDeSociedad;
}

// FUNCIONES DE CONTABILIDAD //


// FUNCIONES DE ALTA DE SOCIEDADES //

function validarTipoDeDatoSocios(numeroDeSocios) {
    //alert("estamos acaa")
    while (isNaN(numeroDeSocios) || numeroDeSocios === 0) {
        alert("Dato no válido, ingrese un valor numerico mayor a 0")
        numeroDeSocios = parseInt(prompt("Ingrese Cantidad de Socios"), 10);
    }
    alert(numeroDeSocios + " Numero de Socios")
    return numeroDeSocios;

}

function validarPromptAltaSociedadElegida(tipoDeSociedadElegida, nombre) {
    alert(tipoDeSociedadElegida + "Cotizas" + nombre)
    while (tipoDeSociedadElegida !== "si" && tipoDeSociedadElegida !== "no") {
        console.log(tipoDeSociedadElegida, "Estamos Aaca")
        alert("Ingresa si o no por favor");
        tipoDeSociedadElegida = prompt("Queres Cotizar una " + nombre + "?");
    }
    alert("tipo de sociedad " + tipoDeSociedadElegida)
    return tipoDeSociedadElegida;
}

// FUNCIONES DE ALTA DE SOCIEDADES //