document.addEventListener("DOMContentLoaded", function () {
    // Crear tarjetas de productos dinámicamente
    const productCardsContainer = document.querySelector(".product-cards");

    const productos = [
        { nombre: "Pan Integral", precio: "$11.500", imagen: "./images/pan_integral.jpg" },
        { nombre: "pan tajado blanco", precio: "$10.000", imagen: "./images/croissant.jpg" },
        { nombre: "ponquesitos", precio: "$4.000", imagen: "./images/gancitos.jpg" },
        { nombre: "tostadas", precio: "$8.000", imagen: "./images/tostadas.jpg" },
        // Agrega más productos según sea necesario
    ];

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `Precio: ${producto.precio}`;

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);

        productCardsContainer.appendChild(card);
    });

    // Código adicional (si es necesario)...
});
