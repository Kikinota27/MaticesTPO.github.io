const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones= {
 nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
 apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
 email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 tel: /^\d{7,14}$/ 
}

const campos= {
    nombre: false,
    apellido: false,
    email: false,
    tel: false,
}


const validarFormulario = (e) => {
 switch(e.target.name){
     case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre')
     break;
     case "apellido":
        validarCampo(expresiones.apellido, e.target, 'apellido')
     break;
     case "email":
        validarCampo(expresiones.email, e.target, 'email')
     break;
     case "tel":
        validarCampo(expresiones.tel, e.target, 'tel')
     break;
     
 }
 
}

const validarCampo = (exprecion, input, campo) => {
 if(exprecion.test(input.value)){
            document.querySelector(`#entrada__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true
        }else{
            document.querySelector(`#entrada__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false
        }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


//No funciona el addEventListener. No entiendo por qué.
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.apellido && campos.email && campos.tel){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
	} else {
		document.getElementById('formulario__input-error').classList.add('formulario__input-error-activo');
	}
}); 


