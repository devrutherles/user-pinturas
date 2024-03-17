import { useContext } from 'react';
import { AuthContext } from './authContext'; // Importe o seu contexto AuthContext

const useRole = () => {
    const { role } = useContext(AuthContext);
    return role;
};

export default useRole;