'use client'
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

export default function Context({children}) {
  const [session, setSession] = useState(null);
  const menageSession =(data)=>{
    setSession(data)

  }

  return (
    <AuthContext.Provider value={{ session,setSession,menageSession }}>
     {children}
    </AuthContext.Provider>
  );
}

