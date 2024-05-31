document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú
    const menuToggle = document.getElementById('menu');
    const menuIcon = document.querySelector('label[for="menu"]');
    const navbar = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        if (menuToggle.checked) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
    });

    // Manejo del carrito de compras
    const carritoIcon = document.getElementById('img-carrito');
    const carrito = document.getElementById('carrito');

    carritoIcon.addEventListener('click', () => {
        carrito.classList.toggle('hidden');
    });

    // Manejo de la adición al carrito
const botonesAgregar = document.querySelectorAll('.agregar-carrito');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const producto = e.target.closest('.product');
        const nombre = producto.querySelector('h3').textContent;
        console.log('Producto agregado:', nombre); // Salida de depuración
        const precio = obtenerPrecio(nombre);
        const imagen = producto.querySelector('img').src;

        agregarProductoAlCarrito(nombre, precio, imagen);
    });
});

    function obtenerPrecio(nombre) {
        switch (nombre) {
            case 'Pandearroz':
            case 'Tamal':
                return 10;
            case 'Tablita Completa':
                return 50;
            case 'Majadito de Charque':
                return 30;
            case 'Masaco con Bife y huevo':
                return 20;
            default:
                return 7; // Por defecto, el precio de Chicha y Somo
        }
    }

    function agregarProductoAlCarrito(nombre, precio, imagen) {
        const listaCarrito = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><img src="${imagen}" width="50" alt="${nombre}"></td>
            <td>${nombre}</td>
            <td>${precio} Bs</td>
        `;
        listaCarrito.appendChild(fila);
    }

    // Vaciado del carrito de compras
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    vaciarCarritoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const listaCarrito = document.getElementById('lista-carrito').getElementsByTagName('tbody')[0];
        while (listaCarrito.firstChild) {
            listaCarrito.removeChild(listaCarrito.firstChild);
        }
    });
});




