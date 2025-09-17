function nombres() {
    let container = document.getElementById("texto");
    container.innerHTML = "";
    let lista = ["Andrés ", "ricardo ", "Juan ", "Andrea ", "Johan ", "Jero ", "Dylan"];
    for (let i = 0; i < 7; i++) {
        let span = document.createElement("span");
        span.innerHTML = lista[i];
        container.appendChild(span);
    }
}
