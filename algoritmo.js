let nameStorage = localStorage.getItem('nombreUsuario');
let lastNameStorage = localStorage.getItem('apellidoUsuario');
let dayStorage = localStorage.getItem('diaUsuario');
let hourStorage = localStorage.getItem('horaUsuario');
let celStorage = localStorage.getItem('celularUsuario');
let emailStorage = localStorage.getItem('emailUsuario');

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const celular = document.getElementById('cel');
const email = document.getElementById('mail');

const form = document.getElementById("formulario");
if (form){
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if (nombre.value !== "" && apellido.value !== "" && dia.value !== "" && hora.value !== "" && celular.value !== "" && email.value !== "") {    
    localStorage.setItem('nombreUsuario', form.children[0].value);
    localStorage.setItem('apellidoUsuario', form.children[1].value);
    localStorage.setItem('diaUsuario', form.children[2].value);
    localStorage.setItem('horaUsuario', form.children[3].value);
    localStorage.setItem('celularUsuario', form.children[4].value);
    localStorage.setItem('emailUsuario', form.children[5].value);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        title:"Perfecto",
        text:"Tu turno se cargo correctamente",
        icon:"success",
        timer:3000
    })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algun campo se encuentra vacio.',
        })
    }
})
}


/* Interactuar con html*/

const domTag=document.getElementsByTagName('input');
for(i=0;i<domTag.length;i++){
    domTag[i].style.border='3px solid gray';
}

