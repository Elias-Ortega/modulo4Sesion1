
const botonEnviar = document.querySelector("#btnEnviar");

botonEnviar.addEventListener('click', function () {
    const nombre = document.querySelector("#txtNombre").value;
    const apellido = document.querySelector("#txtApellido").value;
    const email = document.querySelector("#txtEmail").value;
    const select = document.querySelector("#selectMotivo").value;
    const mensaje = document.querySelector("#txtMensaje").value;
    if (nombre && apellido && email && select && mensaje != "") {
        alert(`De: ${nombre} ${apellido} ( ${email}) \n ASUNTO: ${select}. \n MENSAJE:\n ${mensaje}`);
        
        let formulario = document.querySelector('#formulario');
        formulario.reset();//para limpiar campos una vez presionado enviar.
    } else {
        alert(`Debe llenar todos los campos`);
    }




});