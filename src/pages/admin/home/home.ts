import {logout } from "../../../utils/auth";
import { routeGuard } from "../../../main";

routeGuard();

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
