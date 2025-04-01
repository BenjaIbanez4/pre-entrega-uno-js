const carrito = [];


function agregarProducto(nombre, precio){
    carrito.push({nombre, precio});
    alert(`✅Producto agregado: ${nombre} - $${precio}}`);
    console.log(`✅Producto agregado: ${nombre} - $${precio}`);
}

function verCarrito() {
    if (carrito.length === 0) {
        console.log("🛒El carrito está vacío.");
        return;
    }

    console.log("🛍️Carrito de compras:");
    let total = 0;
    
    const mostrarProducto = (producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
        total += producto.precio;
    };
    carrito.forEach(mostrarProducto);
    console.log("💰Total: $" + total);
}

function iniciarCompra(){
    alert("👗¡Bienvenido a showrooom L&B!🛍️");
    console.log("🎉¡Bienvenido a showrooom L&B!")

    let continuar = true;

    while (continuar){
        let opcion = prompt(
            "Selecciona un producto a comprar:\n" +
            "1. Remera ($25.000)\n" +
            "2. Pantalón ($35.000)\n" +
            "3. Zapatillas ($70.000)\n" +
            "0. Salir"
        );

        switch(opcion) {
            case "1":
                agregarProducto("Remera", 25000);
            break;
            case "2":
                agregarProducto("Pantalón", 35000);
            break;
            case "3":
                agregarProducto("Zapatillas", 75000);
            break;
            case "0":
                continuar = false;
            break;
            default:
                alert("❌Opción no válida. Intenta nuevamente.");
                console.log("❌Opción no válida. Intenta nuevamente.");
        }
    }

    verCarrito();
    alert("🙏Gracias por tu compra. Revisa la consola para ver tu carrito.");
    console.log("🙏Gracias por tu compra.");
}

iniciarCompra();