function par(){
    let esnumeropar = document.getElementById("espar");

    esnumeropar = parseInt(esnumeropar.value);

    if(esnumeropar % 2 == 0){
        alert("es un numero par");
        console.log("es un numero par");
    }else{
        alert("es numero impar");
        console.log("es un numero impar");
    }
}