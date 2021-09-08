var salariosRd = dominica.map(
    function(personita) {
        return personita.salary;
    }
);

var salariosRdSorted = salariosRd.sort(
    function(salaryA , salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    
    var sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    )

    var promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista) {
    var mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        var personaMitad1 = lista[mitad - 1];
        var personaMitad2 = lista[mitad];
        var mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    }else{
        var personaMitad = lista[mitad];
        return personaMitad;
    }
}

var medianaGeneralRd = medianaSalarios(salariosRdSorted);

//// Mediana del top 10%

var spliceStart = (salariosRdSorted.length * 90) / 100;

var spliceCount = salariosRdSorted.length - spliceStart;

var salarioRdTop10 = salariosRdSorted.splice(spliceStart, spliceCount);

var medianaTop10Rd = medianaSalarios(salarioRdTop10);

console.log({
    medianaGeneralRd,
    medianaTop10Rd
});
