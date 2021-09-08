// var precioOriginal = 120;

// var descuento = 18;

var cupones = ["Anime", "Ropa", "Bebidas "]

function calcularPrecioDescuento(precio, descuento) {
    var porcentajePrecioConDescuento = 100 - descuento;
    
    var precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonDiscount() {
    var inputPrice = document.getElementById("inputPrice");
    var priceValue = inputPrice.value;

    var inputDiscound = document.getElementById("inputDiscount");
    var discountValue = inputDiscound.value;

    var precioDescuento = calcularPrecioDescuento(priceValue, discountValue);

    var resultadoF = document.getElementById("resultadoPrice");
    resultadoF.innerText = "El descuento aplicado es $" + precioDescuento;
    
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento
// })