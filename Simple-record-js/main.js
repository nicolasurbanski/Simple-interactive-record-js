const Registrarse =()=>{
   const nombre = document.getElementById("nombre").value
   const apellido = document.getElementById("apellido").value
   const email = document.getElementById("email").value
   const contraseña = document.getElementById("contraseña").value
  if(nombre==""){
    document.getElementById("error_nombre").innerHTML = "este campo es obligatorio"
  } else{
    document.getElementById("error_nombre").innerHTML = ""
  }
  if(apellido==""){
    document.getElementById("error_apellido").innerHTML = "este campo es obligatorio"
  } else{
    document.getElementById("error_apellido").innerHTML = ""
  }
  if(email==""){
    document.getElementById("error_email").innerHTML = "este campo es obligatorio"
  } else {
    document.getElementById("error_email").innerHTML = ""
  } if(contraseña==""){
    document.getElementById("error_contraseña").innerHTML = "este campo es obligatorio"
  } else{
    document.getElementById("error_contraseña").innerHTML = ""
  }
  document.getElementById("mensaje").innerHTML = `Gracias, ${nombre} por registrarte`
   console.log(nombre,apellido,email,contraseña)
}

const tiposeguro =()=>{
var seguro = document.getElementById("tipodeseguro").value

    if(seguro=="basico"){
        document.getElementById("suseguro").innerHTML = "El seguro basico sale $500"
    } else if(seguro=="intermedio"){
        document.getElementById("suseguro").innerHTML = "El seguro intermedio sale $1000 "
    } else{
        document.getElementById("suseguro").innerHTML = "El seguro premium sale $1500"
    }
    console.log(seguro)
}
tiposeguro()