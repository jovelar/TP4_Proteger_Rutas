import type { IUser } from "../../../types/IUser";
import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";

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
    role: valueRol,
    loggedIn: true,
  };
  alert("Registro satisfactorio!")
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
  
    if (valueRol === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else if (valueRol === "client") {
    navigate("/src/pages/client/home/home.html");
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