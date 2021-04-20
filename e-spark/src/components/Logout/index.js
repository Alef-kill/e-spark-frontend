import React, { useContext } from 'react';

import UserIcon from '../../images/user.svg';
import { AuthContext } from '../../providers/auth';

const Logout = () => {
    const { setIsLoginActive, isCadastroActive, setIsCadastroActive } = useContext(AuthContext);

    function handleClickJoin() {
        setIsLoginActive(true);
    }

    function handleClickCreateAccount() {
        setIsCadastroActive(true);
        console.log(isCadastroActive);
    }

    return (
        <>
            <label htmlFor="account-checkbox" className="user-icon-label">
                <img src={UserIcon} alt="" />
            </label>

            <input type="checkbox" id="account-checkbox" hidden />
            <label htmlFor="account-checkbox" className="label-entrar"> Entrar </ label>
            <ul>
                <li onClick={handleClickJoin}><p>Entrar</p></li>
                <li onClick={handleClickCreateAccount}><p>Criar conta</p></li>
            </ul>
        </>
    )
}

export { Logout };