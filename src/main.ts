
import { checkAuthUser } from "./utils/auth";
import type { Rol } from "./types/Rol";

export const routeGuard = (dirError :string, dirCorrecto:string,rol:Rol) => {

    checkAuthUser(dirError,dirCorrecto,rol);
};