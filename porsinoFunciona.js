/*
const openModal = document.querySelector(".hamburguesa1");
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".modal_close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});*/

/*
"use strict";

pintarCarro();

// Asignacion de valores a todos los productos
const productos = {
  combo1: {
    tipo: "C",
    nombre: "Explosión",
    precio: 25000,
    descripcion:
      "Combo con adición de quesos: cheddar y americano, papas y gaseosa",
    imagen: "Combo1.jpg",
  },

  combo2: {
    tipo: "C",
    nombre: "Paisa",
    precio: 18000,
    descripcion: "Combo con chicharron, queso y tocineta, gaseosa",
    imagen: "Combo2.jpg",
  },

  combo3: {
    tipo: "C",
    nombre: "Carnicera",
    precio: 20000,
    descripcion: "Combo con Doble carne y doble tocineta, papas y gaseosa",
    imagen: "Combo3.jpg",
  },

  combo4: {
    tipo: "C",
    nombre: "Familiar",
    precio: 55000,
    descripcion:
      "Este combo incluye 4 Hamburguesas, 4 porciones de papa, Gaseosa 2.5 L",
    imagen: "Combo4.jpg",
  },

  combo5: {
    tipo: "C",
    nombre: "Ranchera",
    precio: 17_000,
    descripcion: "Combo con adición de salchichas, papas y gaseosa",
    imagen: "Combo5.jpg",
  },

  combo6: {
    tipo: "C",
    nombre: "Mexicana",
    precio: 22000,
    descripcion: "Combo con adicion de pico de gallos y jalapeños, gaseosa",
    imagen: "Combo6.jpg",
  },

  combo7: {
    tipo: "C",
    nombre: "Venezolana",
    precio: 20000,
    descripcion: "Combo con Huevo mas papas y gaseosa",
  },

  combo8: {
    tipo: "C",
    nombre: "De Cerdo",
    precio: 24000,
    descripcion: "Combo con carne de cerdo - tocineta, papas y gaseosa",
  },

  combo9: {
    tipo: "C",
    nombre: "Enamorados",
    precio: 25000,
    descripcion:
      "Combo para parejas, Dos hamburguesas, adición de quesos, papas y gaseosa ",
  },

  combo10: {
    tipo: "C",
    nombre: "Fin De Año",
    precio: 28000,
    descripcion:
      "Combo con adicion de Quesos y Tocineta, papas y gaseosa a demas de un delicioso platillo de natilla y buñuelo",
  },

  burger1: {
    tipo: "H",
    nombre: "Especial",
    precio: 15000,
    descripcion: "Hamburguesa con pan artesanal, queso cheddar y tocineta ",
    imagen: "hamburguesa1.jpg",
  },

  burger2: {
    tipo: "H",
    nombre: "Doble",
    precio: 19000,
    descripcion:
      "Hamburgesa con doble carne, queso americado, ensalada y tocineta",
    imagen: "hamburguesa2.jpg",
  },

  burger3: {
    tipo: "H",
    nombre: "De Pollo",
    precio: 13000,
    descripcion:
      "Hamburguesa con carne de Pollo, queso cheddar y americano, tocineta y ripio de papas",
    imagen: "hamburguesa3.jpg",
  },

  burger4: {
    tipo: "H",
    nombre: "super",
    precio: 14000,
    descripcion: "Hamburguesa con adición de tocineta y queso americano",
    imagen: "hamburguesa4.jpg",
  },

  burger5: {
    tipo: "H",
    nombre: "Sencilla",
    precio: 11000,
    descripcion:
      "Hamburguesa Tradicional pero con mucho Sabor!!, papas y vaso de gaseosa",
    imagen: "hamburguesa5.jpg",
  },

  gaseosa1: {
    tipo: "G",
    nombre: "Manzana",
    precio: 3500,
    descripcion: "Gaseosa personal - 350 ML",
    imagen: "manzana.png",
  },

  gaseosa2: {
    tipo: "G",
    nombre: "Colombiana",
    precio: 3500,
    descripcion: "Gaseosa personal - 350 ML",
    imagen: "Colombiana.jpg",
  },

  gaseosa3: {
    tipo: "G",
    nombre: "Coca-Cola",
    precio: 3500,
    descripcion: "Gaseosa personal - 350 ML",
    imagen: "CocaCola.jpg",
  },

  gaseosa4: {
    tipo: "G",
    nombre: "Cuatro",
    precio: 3500,
    descripcion: "Gaseosa personal - 350 ML",
    imagen: "cuatro.jpg",
  },

  gaseosa5: {
    tipo: "G",
    nombre: "Premio",
    precio: 3500,
    descripcion: "Gaseosa personal - 350 ML",
    imagen: "premio.jpg",
  },
};

// Asociar Productos
const productosElementos = document.querySelectorAll(
  ".bloqueN1 article, .bloqueN2 article, .bloqueN3 article"
);
const modal = document.querySelector(".modal");
const modalContenido = document.querySelector(".modal_container");

productosElementos.forEach((productosElementos) => {
  productosElementos.addEventListener("click", (e) => {
    e.preventDefault();

    const productoElemento = e.target.closest("article");

    if (productoElemento) {
      const productoId = productoElemento.id;
      const producto = productos[productoId];

      modalContenido.innerHTML = `  
     <img src="Imagenes/${producto.imagen}" class="modal_img" />
     <h2 class = "modal_title">${producto.nombre}</h2>
     <p class = "modal_description">${producto.descripcion}</p>
     <p>Precio: $${producto.precio}</p>

     <button class="agregarCarrito" onclick="agregarAlCarrito(productos['${productoId}'])">Agregar al carrito</button>

     <a href="#" class="modal_close">Cerrar</a>
     `;
      //Abrir el modal
      modal.classList.add("modal--show");

      const cerrarModal = document.querySelector(".modal_close");
      //Cerrar modal
      cerrarModal.addEventListener("click", (e) => {
        e.preventDefault();

        modal.classList.remove("modal--show");
      });
    }
  });
});

let carrito = [];

function agregarAlCarrito(objeto) {
  // Obtener carro del localStorage o inicializar un array vacío
  const carroCompras = JSON.parse(localStorage.getItem("carro")) || [];

  // Agregar nuevo pedido al array
  carroCompras.push(objeto);

  // Guardar el array actualizado en el localStorage
  localStorage.setItem("carro", JSON.stringify(carroCompras));

  modal.classList.remove("modal--show");
  pintarCarro();
}

function pintarCarro() {
  let carro = document.getElementById("miCarro");
  carro.innerHTML = "";
  const productoNew = document.createElement("div");

  const carroCompras = JSON.parse(localStorage.getItem("carro")) || [];
  let miHTML = "";

  carroCompras.forEach((objeto, index) => {
    if (objeto.tipo == "C") {
      objeto.imagen = "LogoC.png";
    } else if (objeto.tipo == "H") {
      objeto.imagen = "LogoH.png";
    } else if (objeto.tipo == "G") {
      objeto.imagen = "LogoG.png";
    }

    miHTML += `
    <div class="productoDiv">
      <img src="Imagenes/${objeto.imagen}" alt="${objeto.nombre}">
      <h4>${objeto.nombre}</h4>
      <br/>
      <input id="cantidad-${index}" type="number" min="1" max="25" placeholder="1" value="${objeto.cantidad || 1}" oninput="actualizarCantidad(${index})">
      <img src="Imagenes/delete.png" class="delete" onclick="eliminarProducto(${index})" style="height: 20px; width: 20px;"/>
    </div>
    `;
  });
  productoNew.innerHTML = miHTML;
  carro.appendChild(productoNew);
  totalAPagar();
}

function actualizarCantidad(index) {
  const nuevaCantidad = document.getElementById(`cantidad-${index}`).value;
  const carroCompras = JSON.parse(localStorage.getItem("carro")) || [];
  carroCompras[index].cantidad = parseInt(nuevaCantidad);
  localStorage.setItem("carro", JSON.stringify(carroCompras));
  pintarCarro();
}

function totalAPagar() {
  const carroCompras = JSON.parse(localStorage.getItem("carro")) || [];
  let total = 0;

  carroCompras.forEach((objeto) => {
    total += objeto.precio * (objeto.cantidad || 1);
  });

  const totalElemento = document.getElementById("total");
  totalElemento.textContent = total.toLocaleString("es-CO"); 
}

function eliminarProducto(index) {
  const carroCompras = JSON.parse(localStorage.getItem("carro")) || [];
  carroCompras.splice(index, 1); 
  localStorage.setItem("carro", JSON.stringify(carroCompras));
  pintarCarro();
  totalAPagar(); 
}

function eliminarCarro() {
  const carroCompras = []; // Crear un nuevo array vacío
  localStorage.setItem("carro", JSON.stringify(carroCompras));
  pintarCarro();
} */
