function nombre(){
    document.getElementById("boton-nombre").onclick = function() {
    document.getElementById("resultado").innerText = "Mi nombre es Simón";
    }
}
        document.getElementById("boton-numeros").onclick = function() {
            let numeros = "";
            for (let i = 1; i <= 10; i++) {
                numeros += i + " ";
            }
            document.getElementById("resultado").innerText = "Números: " + numeros;
        }

        document.getElementById("boton-color").onclick = function() {
            const colores = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF1493"];
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            document.body.style.backgroundColor = colorAleatorio;
        }