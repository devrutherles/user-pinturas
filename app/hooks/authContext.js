"use client";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState("client");
  const menageSession = (data) => {
    setSession(data);
  };

  const manageRole = (data) => {
    setRole(data);
  };
  return (
    <AuthContext.Provider
      value={{ session, setSession, menageSession, manageRole, role }}
    >
      {children}
    </AuthContext.Provider>
  );
}
