//import type { IUser } from "../../../types/IUser";
//import type { Rol } from "../../../types/Rol";
import { navigate } from "../../../utils/navigate";
import { getUSer } from "../../../utils/localStorage";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPassword = document.getElementById("password") as HTMLInputElement;
//const selectRol = document.getElementById("rol") as HTMLSelectElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePassword = inputPassword.value;
  //const valueRol = selectRol.value as Rol;
  
  const usuario=getUSer();
  if(usuario){
      const datosUsuario= JSON.parse(usuario);
      let i =0;
      while(i<datosUsuario.length){
        if(datosUsuario[i].email==valueEmail && datosUsuario[i].password==valuePassword){
          console.log("usuario encontrado");
          if (datosUsuario[i].role === "admin") {
            navigate("/src/pages/admin/home/home.html");
          } else if (datosUsuario[i].role === "client") {
            navigate("/src/pages/client/home/home.html");
          }
          break;
        }
        i++;
      }
  }

});
