// scripts.js
const listaProductos = document.getElementById('lista-productos');

// Generar las tarjetas de productos
productos.forEach(producto => {
  const card = `
    <div class="col-md-6 mb-4">
      <div class="card h-100">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${producto.nombre}</h3>
              <p class="card-text">${producto.descripcion}</p>
              ${producto.gratuito ? `
                <p class="card-text"><strong>Gratuito</strong></p>
                <a href="${producto.enlaceDescarga}" class="btn btn-success" target="_blank">
                  Descargar Gratis
                </a>
              ` : `
                <p class="card-text"><strong>Precio: $${producto.precio} USD</strong></p>
                <button class="btn btn-primary btn-comprar" data-producto="${producto.id}">
                  Comprar Ahora
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  listaProductos.innerHTML += card;
});

// Redirigir a la página de pago para productos de pago
document.querySelectorAll('.btn-comprar').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const producto = button.getAttribute('data-producto'); // Obtén el ID del producto
    window.location.href = `pago.html?producto=${producto}`; // Redirige a pago.html con el ID
  });
});