var lista1 = [10, 20, 40, 10, 30, 20, 50, 10, 60, 20, 20, 20, ];

var list1Count = {};

lista1.map(
    function(elemento) {
        if (list1Count[elemento]) {
            list1Count[elemento] += 1;
        }else{
            list1Count[elemento] = 1;
        }
    }
)

var listaArray = Object.entries(list1Count).sort(
    function(valorAcomulado, nuevoElemento) {
        return valorAcomulado[1] - nuevoElemento[1];
    }
)
var moda = listaArray[listaArray.length - 1];



const NUMBERS = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS));