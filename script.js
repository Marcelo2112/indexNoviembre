const correosBaseDeDatos = [
    "dummy2@gmail.cl",
    "duocuc@gmail.cl"
]
const btnRegistrar = document.getElementById("btnRegistrarCorreo");
btnRegistrar.addEventListener("click", function(){

    const correoSeleccionado = document.getElementById("selectorCorreo").value;
    console.log("Opcion selecionada: ", correoSeleccionado);

    console.log("Base de datos: ", correosBaseDeDatos);

    if(correoSeleccionado === ""){
        alert("El correo no puede ser vacio")
        return;
    }

    let validacionCorreo = false;
    let contador = 0;

    correosBaseDeDatos.forEach(function(correosBaseDeDatos){

        if(correosBaseDeDatos === correoSeleccionado){
            alert("El correo ya esta registrado")
            contador ++;
            if(contador >= 3){
                validacionCorreo = true;
            }

        }

        if(validacionCorreo){
            console.log("Redirigiendo al home");
        }





    })


});

