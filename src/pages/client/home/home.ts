//import { checkAuhtUser, logout } from "../../../utils/auth";
import { logout } from "../../../utils/auth";
import { routeGuard } from "../../../main";

//donde deberia ir el guard
//routeGuard();

routeGuard();

const buttonLogout = document.getElementById(
  "logoutButton"
) as HTMLButtonElement;
buttonLogout?.addEventListener("click", () => {
  logout();
});

/*
const initPage = () => {
  console.log("inicio de pagina");
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/admin/home/home.html",
    "client"
  );
};
//initPage();
*/
