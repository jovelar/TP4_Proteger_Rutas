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
      const datosUsuario=JSON.parse(usuario);

      if(datosUsuario.email==valueEmail && datosUsuario.password==valuePassword){
          if (datosUsuario.role === "admin") {
            navigate("/src/pages/admin/home/home.html");
          } else if (datosUsuario.role === "client") {
            navigate("/src/pages/client/home/home.html");
          }
      }
  }

  

    /*
  if (valueRol === "admin") {
    navigate("/src/pages/admin/home/home.html");
  } else if (valueRol === "client") {
    navigate("/src/pages/client/home/home.html");
  }
  

  const user: IUser = {
    email: valueEmail,
    password:valuePassword,
    role: valueRol,
    loggedIn: true,
  };

  const parseUser = JSON.stringify(user);
  
  //EVALUAR SI EXISTE PRIMERO ANTES DE USAR SETITEM
  localStorage.setItem("userData", parseUser);
  */

});
