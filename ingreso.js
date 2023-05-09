let abrirPestaña = document.getElementById('open_ingreso')
let pestaña = document.getElementById('ingreso_id')
let cerrarPestaña = document.getElementById('close_emergente')

// Abri modal

abrirPestaña.onclick = function(){
    pestaña.style.visibility = "visible";
}

// Cerrar Modal Btn

cerrarPestaña.onclick = function(){
    pestaña.style.visibility = "hidden";
    document.getElementById('formIngreso').reset();

}

// Cerrar en ventana

//pestaña.onclick = function(){
 //   pestaña.style.visibility = "hidden";
//}