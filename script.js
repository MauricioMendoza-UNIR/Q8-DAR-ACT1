const boton = document.getElementById("agregar-btn");
const entradaInput = document.getElementById("entrada-nueva");
const historial = document.getElementById("historial");

boton.addEventListener("click", () => {
    const texto = entradaInput.value.trim();
    if (texto !== "") {
        const nuevaEntrada = document.createElement("div");
        nuevaEntrada.classList.add("entrada");
        nuevaEntrada.textContent = texto;
        historial.prepend(nuevaEntrada);
        entradaInput.value = "";
    }
});
