
function calcularMediaAritmetica(lista) {
    
    var sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    )

    var promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// var lista1 = [6000, 5000, 100, 200, 300, 500, 10, 15 ];

// lista1.sort();

// var mitadLista1 = parseInt(lista1.length / 2);

function calcularMediana(lista) {
    var listaOrdenada = lista.sort(
        function (primerElemento, segundoElemento) {
        return primerElemento - segundoElemento;
    })

    var mitadLista = parseInt(lista.length / 2);
    var mediana;

    if (esPar(listaOrdenada.length)) {
        var elemento1 = listaOrdenada[mitadLista - 1];
        var elemento2 = listaOrdenada[mitadLista];
        var promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
        mediana = promedioElemento1y2;

        return mediana;
    }else{
        mediana = listaOrdenada[mitadLista];
        return mediana;
    }
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
}


// var mediana;
// if (esPar(lista1.length)) {
//     var elemento1 = lista1[mitadLista1 - 1];
//     var elemento2 = lista1[mitadLista1];

//     var promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,])

//     mediana = promedioElemento1y2;
// }else{
//     mediana = lista1[mitadLista1];
// }