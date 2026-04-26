import { navigate } from "./utils/navigate";
import { checkAuhtUser } from "./utils/auth";
import { getUSer } from "./utils/localStorage";


/*
export const routeGuard=()=>{
    const usuario=localStorage.getItem("userData");
    //const locacion=window.location.pathname;

    if(usuario){
        const datos=JSON.parse(usuario);
        if(datos.rol=="admin"){
            navigate("src/pages/admin/home/home.html");
        }else{
            navigate("src/pages/client/home/home.html");
        }

    }else{
        navigate("src/pages/auth/login/login.html");
    }
    return;
}
*/

/*
export const routeGuard=(urlDef: string, urlDest: string)=>{
    const usuario=getUSer();
    const urlActual=window.location.pathname;

    if(usuario){
        const datosUsuario=JSON.parse(usuario);

        if((urlActual.includes("admin") && datosUsuario.role!="admin")||(urlActual.includes("client") && datosUsuario.role!="client")){
            navigate(urlDef);
            return;
        }

        checkAuhtUser(urlDef,urlDest,datosUsuario.role);
    }else{
        navigate(urlDef);
    }
}
*/

export const routeGuard = (urlDef: string, urlDest: string) => {
    const usuario = getUSer();
    const urlActual = window.location.pathname;

    // 1. SI NO HAY USUARIO
    if (!usuario) {
        // Solo navega al login si NO estás ya en el login
        if (!urlActual.includes("login.html")) {
            navigate(urlDef);
        }
        return;
    }

    // 2. SI HAY USUARIO
    const datosUsuario = JSON.parse(usuario);
    const esAdminPath = urlActual.includes("admin");
    const esClientPath = urlActual.includes("client");
    const esLoginPath = urlActual.includes("login.html");

    // ¿El rol coincide con la URL actual?
    const tieneRolIncorrecto = (esAdminPath && datosUsuario.role !== "admin") || (esClientPath && datosUsuario.role !== "client");

    if (tieneRolIncorrecto) {
        // IMPORTANTE: En lugar de mandarlo al login (donde el guard lo rebotará al home)
        // mandalo directamente a SU home correspondiente para cortar el loop.
        if (datosUsuario.role === "admin") {
            navigate("/src/pages/admin/home/home.html");
        } else {
            navigate("/src/pages/client/home/home.html");
        }
        return;
    }

    // Si está logueado e intenta entrar al login, mandarlo a su home
    if (esLoginPath) {
        if (datosUsuario.role === "admin") {
            navigate("/src/pages/admin/home/home.html");
        } else {
            navigate("/src/pages/client/home/home.html");
        }
        return;
    }

    // Si pasó todos los filtros, checkeo final
    checkAuhtUser(urlDef, urlDest, datosUsuario.role);
}