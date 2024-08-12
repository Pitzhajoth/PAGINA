<!DOCTYPE html>
<script>function mostrarMensaje() {
    alert("¡Bienvenido!");
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const   
 mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;   
 // Evita que se envíe el formulario
    } else {
        // Aquí puedes agregar código para enviar los datos del formulario
        // por ejemplo, a un servidor utilizando AJAX
        alert("Formulario enviado correctamente.");
        return true;
    }
}</script>