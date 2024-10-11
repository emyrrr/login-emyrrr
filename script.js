let emaiValido ="root@cbtis258.edu.mx";
let passValido ="admin123";

function chequeLogin(event) {
    event.preventDefaul();

    const email = document.getElementById("email").value;
    const pasword = document.getElementById("pasword").value;
    const mensaje = document.getElementById("LoginMensaje");

    if (email === emaiValido && pasword === passValido) {
        mensaje.textContent = " Inicio de sesion correcto";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    }
    else {
        mensaje.textContent = "Email o mcontraseña correcta";
        mensaje.style.color = "red";

    }
}  