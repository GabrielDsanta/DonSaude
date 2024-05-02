import { User } from "types";
import { SET_USER } from "@redux/constants";

export function setUser(user: User) {
  return {
    type: SET_USER,
    payload: user,
  };
}
