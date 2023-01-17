//Simulador de presupuestos para estudio contable
// declaro los tres servicios a cotizar y los costos x impuesto liquidado

const servicioImpositivo = "Impuestos";
const servicioContable = "Contabilidad";
const servicioSociedades = "Sociedades";
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
let stringServicioSociedades = "Sociedades";
let promptImpuestoIVA;
let promptImpuestoIIBB;
let promptImpuestoGanancias;
let promptSociedadSRL;
let promptSociedadSA;
let promptSociedadSAS_SAU;
let promptAltaSociedadSRL;
let promptAltaSociedadSA;
let promptAltaSociedadSAS;
let promptAltaSociedadSRLurgente;
let promptAltaSociedadSAurgente;
let promptAltaSociedadSASurgente;

// INICIO OBJETO PROMPTS DE IMPUESTOS //
const promptsImpuestos = {
    validarTipoDeDatoComprobantes: function (comprobantes) {
        //alert("estamos acaa")
        while (isNaN(comprobantes)) {
            alert("Dato no válido, ingrese nuevamente")
            comprobantes = parseInt(prompt("Ingrese Cantidad de comprobantes mensuales"), 10);
        }
        alert(comprobantes + " Comprobantes");
        return comprobantes;
    },

    validarPromptImpuestosIncluidos: function (tipoDeImpuesto, nombre) {

        alert(tipoDeImpuesto + " Cotizas " + nombre)
        while (tipoDeImpuesto != "si" && tipoDeImpuesto != "no") {
            //console.log(tipoDeImpuesto, "Estamos aca")
            alert("Por favor ingrese si o no");
            tipoDeImpuesto = prompt("Queres cotizar " + nombre + "?");
        }
        return tipoDeImpuesto;
    }

}
// FIN OBJETO PROMPTS DE IMPUESTOS //

// INICIO OBJETO PROMPTS DE CONTABILIDAD //
const promptsContabilidad = {
    validarTipoDeDatoCuentasBancarias: function (CuentasBancarias) {
        //alert("estamos acaa")
        while (isNaN(CuentasBancarias) || CuentasBancarias === 0) {
            alert("Dato no válido, ingrese un valor numerico mayor a 0")
            CuentasBancarias = parseInt(prompt("Ingrese Cantidad de Cuentas Bancarias"), 10);
        }
        alert(CuentasBancarias + " Cuentas Bancarias")
        return CuentasBancarias;
    },

    validarPromptSociedadElegida: function (tipoDeSociedad, nombre) {
        alert(tipoDeSociedad + "Cotizas" + nombre)
        while (tipoDeSociedad !== "si" && tipoDeSociedad !== "no") {
            //console.log(tipoDeSociedad, "Estamos Aaca")
            alert("Ingresa si o no por favor");
            tipoDeSociedad = prompt("Queres Cotizar una " + nombre + "?");
        }
        //alert("tipo de sociedad " + tipoDeSociedad)
        return tipoDeSociedad;
    }
}
// FIN OBJETO PROMPTS DE CONTABILIDAD //


// INICIO OBJETO PROMPTS DE SOCIEDADES //
const promptsSociedades = {
    validarTipoDeDatoSocios: function (numeroDeSocios) {
        //alert("estamos acaa")
        while (isNaN(numeroDeSocios) || numeroDeSocios === 0) {
            alert("Dato no válido, ingrese un valor numerico mayor a 0")
            numeroDeSocios = parseInt(prompt("Ingrese Cantidad de Socios"), 10);
        }
        alert(numeroDeSocios + " Numero de Socios")
        return numeroDeSocios;

    },

    validarPromptAltaSociedadElegida: function (tipoDeSociedadElegida, nombre) {
        alert(tipoDeSociedadElegida + " Cotizas " + nombre)
        while (tipoDeSociedadElegida !== "si" && tipoDeSociedadElegida !== "no") {
            //console.log(tipoDeSociedadElegida, "Estamos Aaca")
            alert("Ingresa si o no por favor");
            tipoDeSociedadElegida = prompt("Queres Cotizar una " + nombre + "?");
        }
        //alert("tipo de sociedad " + tipoDeSociedadElegida)
        return tipoDeSociedadElegida;
    },

    validarPromptAltaSociedadElegidaUrgente: function (tipodeSociedadElegidaUrgente, nombre) {
        alert(tipodeSociedadElegidaUrgente + " Cotizas " + nombre)
        while (tipodeSociedadElegidaUrgente !== "si" && tipodeSociedadElegidaUrgente !== "no") {
            //console.log(tipodeSociedadElegidaUrgente, "Estamos Aaca")
            alert("Ingresa si o no por favor");
            tipodeSociedadElegidaUrgente = prompt("Queres Cotizar una " + nombre + "?");
        }
        //alert("tipo de sociedad" + tipodeSociedadElegidaUrgente)
        return tipodeSociedadElegidaUrgente;
    }
}
// FIN OBJETO PROMPTS DE SOCIEDADES //


// servicioElegido = prompt("Por favor ingrese un servicio válido a Cotizar: Impuestos / Contabilidad / Alta de Sociedades");
// INICIO validar entrada de cliente

// ARRAY DE SERVICIOS//
const servicios = ['Impuestos', 'Contabilidad', 'Alta de Sociedades']
//let prueba = servicios.includes(servicioElegido)
//alert(prueba)

// ARRAY DE SERVICIOS//


function validarServicioElegido() {
    //console.log(servicioElegido, "Estamos aca")
    while (servicios.includes(servicioElegido) == false) {
        // alert(servicioElegido + "Estamos aca")
        // alert(servicios)
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

    cantidadComprobantes = promptsImpuestos.validarTipoDeDatoComprobantes(cantidadComprobantes);

    if (cantidadComprobantes <= 50) {
        costoServicioImpuestos = 3000
    } else if (cantidadComprobantes == 50) {
        costoServicioImpuestos = 4000
    } else if (cantidadComprobantes >= 50) {
        costoServicioImpuestos = 5000
    }

    let costoFinal = costoServicioImpuestos;
    promptImpuestoIVA = prompt("Queres cotizar IVA?");
    promptImpuestoIVA = promptsImpuestos.validarPromptImpuestosIncluidos(promptImpuestoIVA, "IVA");


    if (promptImpuestoIVA === "si") {
        costoFinal += costoImpuestoIVA
    }

    promptImpuestoIIBB = prompt("Queres cotizar IIBB?");
    promptImpuestoIIBB = promptsImpuestos.validarPromptImpuestosIncluidos(promptImpuestoIIBB, "IIBB");


    if (promptImpuestoIIBB == "si") {
        costoFinal += costoImpuestoIIBB
    }

    promptImpuestoGanancias = prompt("Queres cotizar Ganancas?");
    promptImpuestoGanancias = promptsImpuestos.validarPromptImpuestosIncluidos(promptImpuestoGanancias, "Ganancias");


    if (promptImpuestoGanancias == "si") {
        costoFinal += costoImpuestoGanancias
    }
    alert("El costo del combo Impuestos es de: " + costoFinal)
}
// FIN si el cliente elige Impuestos le pregunto que servicios desea cotizar





// INICIO si el cliente elige Contabilidad le pregunto que servicios desea cotizar
if (servicioElegido === "Contabilidad") {

    let cantidadCuentasBancarias = parseInt(prompt("Ingrese Cantidad de Cuentas Bancarias"), 10);
    let costoServicioContabilidad;

    cantidadCuentasBancarias = promptsContabilidad.validarTipoDeDatoCuentasBancarias(cantidadCuentasBancarias);

    if (cantidadCuentasBancarias === 1) {
        costoServicioContabilidad = 5000
    } else if (cantidadCuentasBancarias <= 5) {
        costoServicioContabilidad = 10000
    } else if (cantidadCuentasBancarias > 5) {
        costoServicioContabilidad = 20000
    }


    let costoFinal = costoServicioContabilidad;
    promptSociedadSRL = prompt("Queres cotizar una SRL?");
    promptSociedadSRL = promptsContabilidad.validarPromptSociedadElegida(promptSociedadSRL, "SRL");

    if (promptSociedadSRL === "si") {
        costoFinal += costoSociedadSRL

    }

    promptSociedadSA = prompt("Queres cotizar una S.A.?");
    promptSociedadSA = promptsContabilidad.validarPromptSociedadElegida(promptSociedadSA, "SA");

    if (promptSociedadSA === "si") {
        costoFinal += costoSociedadSA

    }

    promptSociedadSAS_SAU = prompt("Queres cotizar una SAU o SAS?");
    promptSociedadSAS_SAU = promptsContabilidad.validarPromptSociedadElegida(promptSociedadSAS_SAU, "SAS/SAU");

    if (promptSociedadSAS_SAU === "si") {
        costoFinal += costoSociedadSAS_SAU

    }
    alert("El costo del combo Contabilidad es de: " + costoFinal)

}
// FIN si el cliente elige Contabilidad le pregunto que servicios desea cotizar


// INICIO si el cliente elige Alta de Sociedades le pregunto que servicios desea cotizar
if (servicioElegido === "Alta de Sociedades") {

    let cantidadSocios = parseInt(prompt("Ingrese Cantidad de Socios de la Sociedad"), 10);
    let costoServicioSociedades;

    cantidadSocios = promptsSociedades.validarTipoDeDatoSocios(cantidadSocios);

    if (cantidadSocios <= 2) {
        costoServicioSociedades = 3000
    } else if (cantidadSocios == 3) {
        costoServicioSociedades = 5000
    } else if (cantidadSocios > 4 && cantidadSocios < 6) {
        costoServicioSociedades = 8000
    }

    let costoFinal = costoServicioSociedades;
    promptAltaSociedadSRL = prompt("Queres cotizar un Alta de S.R.L?");
    promptAltaSociedadSRL = promptsSociedades.validarPromptAltaSociedadElegida(promptAltaSociedadSRL, "S.R.L");


    if (promptAltaSociedadSRL === "si") {
        promptAltaSociedadSRLurgente = prompt("Es urgente?");
        promptAltaSociedadSRLurgente = promptsSociedades.validarPromptAltaSociedadElegidaUrgente(promptAltaSociedadSRLurgente, "S.R.L Urgente");

        if (promptAltaSociedadSRLurgente === "si") {
            costoFinal += (costoConstitucionSociedadSRL * 1.33)
            alert(costoFinal.toFixed(2) + " con urgencia")

        } else {
            costoFinal += costoConstitucionSociedadSRL
            alert(costoFinal.toFixed(2) + " sin urgencia")
        }
    }

    promptAltaSociedadSA = prompt("Queres cotizar un Alta de S.A.?");
    promptAltaSociedadSA = promptsSociedades.validarPromptAltaSociedadElegida(promptAltaSociedadSA, "S.A.");

    if (promptAltaSociedadSA === "si") {
        promptAltaSociedadSAurgente = prompt("Es urgente?");
        promptAltaSociedadSAurgente = promptsSociedades.validarPromptAltaSociedadElegidaUrgente(promptAltaSociedadSAurgente, "S.A. Urgente");

        if (promptAltaSociedadSAurgente === "si") {
            costoFinal += ((costoConstitucionSociedadSA * 33 / 100) + costoConstitucionSociedadSA)
            alert(costoFinal + " con urgencia")

        } else {
            costoFinal += costoConstitucionSociedadSA
            alert(costoFinal + " sin urgencia")
        }
    }


    promptAltaSociedadSAS = prompt("Queres cotizar un Alta de S.A.S?");
    promptAltaSociedadSAS = promptsSociedades.validarPromptAltaSociedadElegida(promptAltaSociedadSAS, "S.A.S");

    if (promptAltaSociedadSAS === "si") {
        promptAltaSociedadSASurgente = prompt("Es urgente?");
        promptAltaSociedadSASurgente = promptsSociedades.validarPromptAltaSociedadElegidaUrgente(promptAltaSociedadSASurgente, "S.A. Urgente");

        if (promptAltaSociedadSASurgente === "si") {
            costoFinal += (costoConstitucionSociedadSAS * 1.33)
            alert(costoFinal.toFixed(2) + " con urgencia")

        } else {
            costoFinal += costoConstitucionSociedadSAS
            alert(costoFinal.toFixed(2) + " sin urgencia")
        }
    }

    alert("El costo del combo Alta Sociedades es de: " + costoFinal)
}
// FIN si el cliente elige Impuestos le pregunto que servicios desea cotizar







































// FUNCIONES DE IMPUESTOS //

// function validarTipoDeDatoComprobantes(comprobantes) {
//     alert("estamos acaa")
//     while (isNaN(comprobantes)) {
//         alert("Dato no válido, ingrese nuevamente")
//         comprobantes = parseInt(prompt("Ingrese Cantidad de comprobantes mensuales"), 10);
//     }
//     alert(comprobantes + " Comprobantes");
//     return comprobantes;
//     console.log()
// }

// function validarPromptImpuestosIncluidos(tipoDeImpuesto, nombre) {

//     alert(tipoDeImpuesto + " Cotizas " + nombre)
//     while (tipoDeImpuesto != "si" && tipoDeImpuesto != "no") {
//         console.log(tipoDeImpuesto, "Estamos aca")
//         alert("Por favor ingrese si o no");
//         tipoDeImpuesto = prompt("Queres cotizar " + nombre + "?");
//     }
//     return tipoDeImpuesto;
// }
// FUNCIONES DE IMPUESTOS //












// FUNCIONES DE CONTABILIDAD //

// function validarTipoDeDatoCuentasBancarias(CuentasBancarias) {
//     //alert("estamos acaa")
//     while (isNaN(CuentasBancarias) || CuentasBancarias === 0) {
//         alert("Dato no válido, ingrese un valor numerico mayor a 0")
//         CuentasBancarias = parseInt(prompt("Ingrese Cantidad de Cuentas Bancarias"), 10);
//     }
//     alert(CuentasBancarias + " Cuentas Bancarias")
//     return CuentasBancarias;

// }

// function validarPromptSociedadElegida(tipoDeSociedad, nombre) {
//     alert(tipoDeSociedad + "Cotizas" + nombre)
//     while (tipoDeSociedad !== "si" && tipoDeSociedad !== "no") {
//         console.log(tipoDeSociedad, "Estamos Aaca")
//         alert("Ingresa si o no por favor");
//         tipoDeSociedad = prompt("Queres Cotizar una " + nombre + "?");
//     }
//     alert("tipo de sociedad " + tipoDeSociedad)
//     return tipoDeSociedad;
// }

// FUNCIONES DE CONTABILIDAD //


// FUNCIONES DE ALTA DE SOCIEDADES //

// function validarTipoDeDatoSocios(numeroDeSocios) {
//     //alert("estamos acaa")
//     while (isNaN(numeroDeSocios) || numeroDeSocios === 0) {
//         alert("Dato no válido, ingrese un valor numerico mayor a 0")
//         numeroDeSocios = parseInt(prompt("Ingrese Cantidad de Socios"), 10);
//     }
//     alert(numeroDeSocios + " Numero de Socios")
//     return numeroDeSocios;

// }

// function validarPromptAltaSociedadElegida(tipoDeSociedadElegida, nombre) {
//     alert(tipoDeSociedadElegida + "Cotizas" + nombre)
//     while (tipoDeSociedadElegida !== "si" && tipoDeSociedadElegida !== "no") {
//         console.log(tipoDeSociedadElegida, "Estamos Aaca")
//         alert("Ingresa si o no por favor");
//         tipoDeSociedadElegida = prompt("Queres Cotizar una " + nombre + "?");
//     }
//     alert("tipo de sociedad " + tipoDeSociedadElegida)
//     return tipoDeSociedadElegida;
// }

// function validarPromptAltaSociedadElegidaUrgente(tipodeSociedadElegidaUrgente, nombre) {
//     alert(tipodeSociedadElegidaUrgente + "Cotizas" + nombre)
//     while (tipodeSociedadElegidaUrgente !== "si" && tipodeSociedadElegidaUrgente !== "no") {
//         console.log(tipodeSociedadElegidaUrgente, "Estamos Aaca")
//         alert("Ingresa si o no por favor");
//         tipodeSociedadElegidaUrgente = prompt("Queres Cotizar una " + nombre + "?");
//     }
//     alert("tipo de sociedad" + tipodeSociedadElegidaUrgente)
//     return tipodeSociedadElegidaUrgente;
// }

// FUNCIONES DE ALTA DE SOCIEDADES //