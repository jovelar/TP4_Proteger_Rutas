import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";
import { getUSer, saveUser } from "../../../utils/localStorage";

const form = document.getElementById("formRegistro") as HTMLFormElement;
const inputEmail = document.getElementById("inputEmail") as HTMLInputElement;
const inputPassword = document.getElementById("inputPassword") as HTMLInputElement;
const selectRol = document.getElementById("rol") as HTMLSelectElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value.trim();
  const valuePassword = inputPassword.value.trim();
  const valueRol = selectRol.value as Rol;

  if(valueEmail && valuePassword && valueRol){
    const user: IUser = {
    email: valueEmail,
    password:valuePassword,
    role: valueRol,
    loggedIn: true,
  };

    let credencialesJSON = getUSer();
    let temp = credencialesJSON ? JSON.parse(credencialesJSON) : [];
    // Forzamos que sea un arreglo para que aparezca .length
    let credenciales = Array.isArray(temp) ? temp : [];

    let i=0;
    let encontrado=0;
    while( i < credenciales.length){
      if(credenciales[i].email==user.email){
        alert("La cuenta ya existe!")
        encontrado=1;
      }
      i++;
    }
    
    if(encontrado==0){
      credenciales.push(user);
      saveUser(credenciales);
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