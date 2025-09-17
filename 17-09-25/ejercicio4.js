function nombre(){
   let miNombre = document.getElementById("mi nombre");

   let primerNombre = document.createElement("span");
   let apellido = document.createElement("i");

   primerNombre.innerHTML = "Simon ";
   apellido.innerHTML = "Avila";


   miNombre.appendChild(primerNombre);
   miNombre.appendChild(apellido);
}