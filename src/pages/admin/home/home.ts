import {logout } from "../../../utils/auth";
import { routeGuard } from "../../../main";

routeGuard("src/pages/auth/login/login.ts","src/pages/admin/home/home.html");
const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout?.addEventListener("click", () => {
  logout();
});


/*
const initPage = () => {
  console.log("inicio de pagina");
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/client/home/home.html",
    "admin"
  );
};
initPage();
*/
