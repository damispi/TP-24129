document.addEventListener('DOMContentLoaded', () => {
    const userLogin = document.getElementById('user');
    const passLogin = document.getElementById('pass');
    const btnLogin = document.getElementById('btnLogin');
    const formLogin = document.getElementById('formLogin');
      userLogin.addEventListener('blur', () => {
        verifyInput(userLogin);
    });

    passLogin.addEventListener('blur', () => {
        verifyInput(passLogin);
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
});

const verifyInput = (element) => {
    const dialogAlerta =document.getElementById('alertaDialog');
    const alertaMsg = document.getElementById('alertaMsg');
    if (element.value.trim() === "") {
        element.classList.add('input-error');
        dialogAlerta.showModal();
    } else {
        element.classList.remove('input-error');
    }
}

