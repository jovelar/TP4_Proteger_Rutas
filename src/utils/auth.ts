import type { IUser } from "../types/IUser";
import type { Rol } from "../types/Rol";
import { getUSer, removeUser } from "./localStorage";
import { navigate } from "./navigate";


//redireccion1 seria la url en caso de que haya error, es decir, devuelve a login.html
//redireccion2 es su pagina correcta,
export const checkAuthUser = (
  redireccion1: string,
  redireccion2: string,
  rol: Rol
) => {
  const user = getUSer();
  const pathActual = window.location.pathname;

  
  if (!user) {
    if (!pathActual.includes(redireccion1)) navigate(redireccion1);
    return;
  }

  const parseUser: IUser = JSON.parse(user);

  if (parseUser.role !== rol) {
    if (!pathActual.includes(redireccion1)) navigate(redireccion1);
  } else {
    // solo aplica navigate si no se encuentra actualmente en la pagina correspondiente
    if (!pathActual.includes(redireccion2)) navigate(redireccion2);
  }
};

export const logout = () => {
  removeUser();
  navigate("/src/pages/auth/login/login.html");
};