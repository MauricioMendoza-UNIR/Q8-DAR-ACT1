const boton = document.getElementById("agregar-btn");
const entradaInput = document.getElementById("entrada-nueva");
const historial = document.getElementById("historial");

boton.addEventListener("click", () => {
    const texto = entradaInput.value.trim();
    if (texto !== "") {
        const nuevaEntrada = document.createElement("div");
        nuevaEntrada.classList.add("entrada");

        // Crear imagen
        const imagen = document.createElement("img");
        imagen.src = "avatar.svg";
        imagen.alt = "Avatar";
        imagen.classList.add("icono-entrada");

        // Crear contenido de texto
        const contenido = document.createElement("p");
        contenido.textContent = texto;

        // Agregar imagen y texto al div de entrada
        nuevaEntrada.appendChild(imagen);
        nuevaEntrada.appendChild(contenido);

        historial.prepend(nuevaEntrada);
        entradaInput.value = "";
    }
});
