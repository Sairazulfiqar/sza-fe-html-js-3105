const elemento= document.getElementsByClassName("btn");
elemento[0].addEventListener("click",cambiar);

function cambiar() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const classBody = document.body.className;
    if (classBody == 'light-theme') {
        elemento[0].textContent = 'Oscuro';
    } else {
        elemento[0].textContent = 'Claro';
    }
}


