document.addEventListener('DOMContentLoaded', () => {
    const userLogin = document.getElementById('user');
    const passLogin = document.getElementById('pass');
    const btnLogin = document.getElementById('btnLogin');
    const formLogin = document.getElementById('formLogin');
    const cerrarDialog = document.getElementById('cerrarDialog');
    const dialogAlerta = document.getElementById('alertaDialog');
    const alertaMsg = document.getElementById('alertaMsg');
    let errorMsg = false;
    userLogin.addEventListener('blur', () => {
        console.log("user");
        verifyInput(userLogin, 'Complete Usuario');
    });

    passLogin.addEventListener('blur', () => {
        verifyInput(passLogin, "Debe ingresar Password");
    });
    cerrarDialog.addEventListener('click', () => {
        dialogAlerta.close();
    });

    btnLogin.addEventListener('click', (event) => {
        event.preventDefault();
        if (passLogin.value !== "" && userLogin.value !== "") {
            console.log("Formulario válido, se puede enviar");
            formLogin.submit();
        } else {
            console.log("Alguno de los campos está vacío, no se envía el formulario");
        }
    });
    const verifyInput = (element, msg = null) => {
        if (element.value.trim() === "") {
            element.classList.add('input-error');
            if (msg) {
                alertaMsg.innerHTML = `<h1> ${msg}</h1>`;
            }
            dialogAlerta.showModal();
        } else {
            element.classList.remove('input-error');
        }
    }

});


