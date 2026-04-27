import { navigate } from "./utils/navigate";
import { checkAuhtUser } from "./utils/auth";
import { getUSer } from "./utils/localStorage";

//urlDef es el link a login, en caso de que no este logeado 
export const routeGuard = (urlDef: string, urlDest: string) => {
    const usuario = getUSer();
    const urlActual = window.location.pathname;

    // ver si no hay un usuario
    if (!usuario) {
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