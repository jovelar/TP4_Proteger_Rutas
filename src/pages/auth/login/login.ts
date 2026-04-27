//import type { IUser } from "../../../types/IUser";
//import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";
import {getUSers, saveUser } from "../../../utils/localStorage";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
//const selectRol = document.getElementById("rol") as HTMLSelectElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  //const valueRol = selectRol.value as Rol;

  const usuario = getUSers();
  if (usuario) {
    const datosUsuarios = JSON.parse(usuario);
    let i = 0;
    let encontrado = false;
    
    while (i < datosUsuarios.length) {
      //si el email y la contraseña estan bien
      if (datosUsuarios[i].email == valueEmail && datosUsuarios[i].password == valuePassword) {
        console.log("usuario encontrado");

        encontrado = true;
        saveUser(datosUsuarios[i]);

        if (datosUsuarios[i].role === "admin") {
          navigate("/src/pages/admin/home/home.html"); 
        } else if (datosUsuarios[i].role === "client") {
          navigate("/src/pages/client/home/home.html");
        }
        break;

      //si pone mal la contraseña
      } else if (datosUsuarios[i].email == valueEmail && datosUsuarios[i].password != valuePassword) {
        alert("Contraseña Invalida");
        encontrado = true;
        break;
      }
      i++;
    }

    if (encontrado == false) {
      alert("Usuario no encontrado");
    }
    //si el email no existe o no lo encuentra
  } else {
    alert("No existen usuarios!");
  }
});