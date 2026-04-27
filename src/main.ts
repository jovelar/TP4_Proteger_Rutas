import { navigate } from "./utils/navigate";
import { getUSer } from "./utils/localStorage";

export const routeGuard = () => {
    const usuariosJSON = getUSer();
    const usuarios = usuariosJSON ? JSON.parse(usuariosJSON): [];

    const urlActual=window.location.pathname;

    const urlLogin = "src/pages/auth/login/login.html";
    const urlAdmin = "src/pages/admin/home/home.html";
    const urlClient = "src/pages/client/home/home.html";

    console.log(urlLogin,urlClient,urlAdmin,urlActual);

    if(usuarios){
        

    }else{
        navigate(urlLogin);
    }

};