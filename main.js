
const botonesComprar = document.querySelectorAll(".btn-comprar");
const contadorCarrito = document.getElementById("carrito-count");

let carrito = [];

// Guardar en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
    actualizarContador();
}
cargarCarrito();

// Añadir producto
botonesComprar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.preventDefault();

        const nombre = boton.dataset.nombre;
        const precio = parseInt(boton.dataset.precio);

        if (!nombre || isNaN(precio)) {
            console.warn(" Producto inválido, revisa data-nombre y data-precio");
            return;
        }

        carrito.push({ nombre, precio });
        guardarCarrito();
        actualizarContador();

        alert(`${nombre} añadido al carrito ✅`);
    });
});

// Contador
function actualizarContador() {
    contadorCarrito.textContent = carrito.length;
}
