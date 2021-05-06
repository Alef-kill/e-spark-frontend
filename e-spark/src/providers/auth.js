import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoginActive, setIsLoginActive] = useState(false);
    const [isCadastroActive, setIsCadastroActive] = useState(false);
    const [user, setUser] = useState({
        name: ''
    });

    return (
        <AuthContext.Provider value={{
            user, setUser, 
            isLoginActive, 
            setIsLoginActive,
            isCadastroActive, 
            setIsCadastroActive }}>
                
            {props.children}
        </AuthContext.Provider>
    )
}