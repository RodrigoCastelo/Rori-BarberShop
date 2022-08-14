/*---DECLARACIÓN DE VARIABLES Y OBTENCION DE DATOS LOCALSTORAGE--- */
let nameStorage = localStorage.getItem('nombreUsuario');
let lastNameStorage = localStorage.getItem('apellidoUsuario');
let dayStorage = localStorage.getItem('diaUsuario');
let hourStorage = localStorage.getItem('horaUsuario');
let celStorage = localStorage.getItem('celularUsuario');
let emailStorage = localStorage.getItem('emailUsuario');

/* ---DECLARACION DE CONSTANTES Y OBTENCION DE ID--- */
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const celular = document.getElementById('cel');
const email = document.getElementById('mail');
const form = document.getElementById("formulario");


/* ---OBTENCION DE DATOS Y SETEO DEL FORMULARIO EN EL LOCALSTORAGE--- */
if (form){
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    /* PREGUNTO POR VALORES DE LOS INPUT Y ALMACENO LA INFORMACION */
    if (nombre.value !== "" && apellido.value !== "" && dia.value !== "" && hora.value !== "" && celular.value !== "" && email.value !== "") {    
    localStorage.setItem('nombreUsuario', form.children[0].value);
    localStorage.setItem('apellidoUsuario', form.children[1].value);
    localStorage.setItem('diaUsuario', form.children[2].value);
    localStorage.setItem('horaUsuario', form.children[3].value);
    localStorage.setItem('celularUsuario', form.children[4].value);
    localStorage.setItem('emailUsuario', form.children[5].value);

    nameStorage = form.children[0].value;
    lastNameStorage = form.children[1].value;
    dayStorage = form.children[2].value;
    hourStorage = form.children[3].value;
    celStorage = form.children[4].value;
    emailStorage = form.children[5].value;

    /* ---SWEETALERT PARA TURNOS TRUE Y FALSE--- */
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
    checkForm ();
})
}

/* ---INTERACCION CON HTML EN LOS INPUT---*/
const domTag=document.getElementsByTagName('input');
for(i=0;i<domTag.length;i++){
    domTag[i].style.border='3px solid gray';
}
/* ---CREO FUNCION CHECKFORM Y MUESTRO EL TURNO SOLICITADO--- */
const checkForm = () => {
if (nameStorage && nameStorage !== 'null'){
    const element = document.createElement("div");
        element.innerHTML = `
            <div class="espaciado">
                <div class="Color">
                    <div class="name">Hola ${nameStorage} ${lastNameStorage} </div>
                    <div class="turno">Tu turno es el dia ${dayStorage} a las ${hourStorage} hs </div> 
                    <div class="info">Tus datos son ${celStorage} ${emailStorage} </div>
                </div>
            </div>`;
    greeting.prepend(element);
    }
}
/* ---USO FETCH PARA MOSTRAR DATOS DEL ARCHIVO CORTE.JSON--- */
fetch ('./corte.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            data.forEach ((post)=>{
                const li = document.createElement ('div')
                li.innerHTML = `
                            <div class="precios">
                                <h2>Precios</h2>
                                <p> ${post.cabello}</p>
                                <p> ${post.precio1}</p>
                                <p> ${post.barba}</p>
                                <p> ${post.precio2}</p>
                                <p> ${post.cabybar}</p>
                                <p> ${post.precio3}</p>
                            </div>    
                `
                precios.append(li)
            })
        })