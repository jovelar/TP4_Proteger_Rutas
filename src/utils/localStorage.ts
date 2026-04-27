import type { IUser } from "../types/IUser";

export const saveUser = (user: IUser) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("userData", parseUser);
};

export const saveUsers = (user: IUser[]) => {
  const parseUser = JSON.stringify(user);
  localStorage.setItem("users", parseUser);
};

export const getUSer = () => {
  return localStorage.getItem("userData");
};

export const getUSers = () => {
  return localStorage.getItem("users");
};

export const removeUser = () => {
  localStorage.removeItem("userData");
};
