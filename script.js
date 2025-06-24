const boton = document.getElementById("agregar-btn");
const entradaInput = document.getElementById("entrada-nueva");
const historial = document.getElementById("historial");

function crearEntrada(texto) {
    const nuevaEntrada = document.createElement("div");
    nuevaEntrada.classList.add("entrada");

    const imagen = document.createElement("img");
    imagen.src = "avatar.svg";
    imagen.alt = "Avatar";
    imagen.classList.add("icono-entrada");

    const contenido = document.createElement("p");
    contenido.textContent = texto;

    nuevaEntrada.appendChild(imagen);
    nuevaEntrada.appendChild(contenido);

    historial.prepend(nuevaEntrada);
}

const entradasIniciales = [
    "Bienvenidos al Blog UNIR.",
    "Este es un blog dinamico.",
    "Agrega tus entradas! :)"
];

// Agregar entradas iniciales
entradasIniciales.forEach(texto => crearEntrada(texto));

// Evento para agregar nuevas entradas
boton.addEventListener("click", () => {
    const texto = entradaInput.value.trim();
    if (texto !== "") {
        crearEntrada(texto);
        entradaInput.value = "";
    }
});
