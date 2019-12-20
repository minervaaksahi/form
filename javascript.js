function valida(){
    var todo_correcto = true;

   if (document.getElementById('nombre').value.length > 20){
       window.alert("Tu nombre es demasiado grande. Redúcelo.");
       todo_correcto = false;
    }

   if (document.getElementById('nombre').value.length < 3){
       window.alert("Tu nombre es demasiado corto.");
       todo_correcto = false;
    } 

   if (document.getElementById('edad').value = 0 || document.getElementById('edad').value <= 5 || document.getElementById('edad').value > 99){
       window.alert("Edad no válida.");
       todo_correcto = false;
    }
    
    if (todo_correcto = true) {
        alert("¡Gracias por rellenar el formulario! :)");
        /*window.location.reload();*/
        window.location.href="otra.html";
    }

    return todo_correcto;
}
