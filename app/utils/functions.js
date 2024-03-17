"use client";

import { useContext } from "react";
import { AuthContext } from "../hooks/authContext";



export function getRole() {
  const { role, manageRole} = useContext(AuthContext)

  return role

}
