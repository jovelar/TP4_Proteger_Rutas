import type { IUser } from "../../../types/IUser";
//import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";
import { getUSers,saveUsers } from "../../../utils/localStorage";

const form = document.getElementById("formRegistro") as HTMLFormElement;
const inputEmail = document.getElementById("inputEmail") as HTMLInputElement;
const inputPassword = document.getElementById("inputPassword") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value.trim();
  const valuePassword = inputPassword.value.trim();
  const valueRol = "client";

  if(valueEmail && valuePassword && valueRol){
    const user: IUser = {
    email: valueEmail,
    password:valuePassword,
    role: valueRol,
    loggedIn: true,
  };

    let credencialesJSON = getUSers();
    let temp = credencialesJSON ? JSON.parse(credencialesJSON) : [];
    // Forzamos que sea un arreglo para que aparezca .length
    let credenciales = Array.isArray(temp) ? temp : [];

    let i=0;
    let encontrado=false;
    while( i < credenciales.length){
      if(credenciales[i].email==user.email){
        alert("La cuenta ya existe!")
        encontrado=true;
      }
      i++;
    }
    
    if(!encontrado){
      credenciales.push(user);
      saveUsers(credenciales);
      alert("Registro satisfactorio!")
  
      navigate("/src/pages/auth/login/login.html")
    }
  
  }
  else if(valueEmail==""){
    alert("Debe ingresar un email");
  }
  else if(valuePassword==""){
    alert("Debe ingresar una contraseña");
  }
  else if(!valueRol){
    alert("Debe elegir un rol");
  }
  

});