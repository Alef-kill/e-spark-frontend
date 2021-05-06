import React, { useState, useContext } from 'react';

import { Login } from '../Login';
import { Input } from '../Input';
import { Alert } from '../Alert';

import { AuthContext } from '../../providers/auth';

import closeIcon from '../../images/close.svg';

import './cadastro.css';

const Cadastro = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [isAlert, setAlert] = useState();
    const [textAlert, setTextAlert] = useState('');

    const { isCadastroActive, setIsCadastroActive, setIsLoginActive } = useContext(AuthContext);

    function handleCloseCadastro() {
        setIsCadastroActive(false);
    }

    function handleOpenLogin() {
        handleCloseCadastro();
        setIsLoginActive(true);
    }

    function handleCloseModaLogin() {
        setIsCadastroActive(false);
    }

    function showAlert(text, time) {
        setTextAlert(text);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, time)
    }

    async function handleClickBtnRegister(e) {
        e.preventDefault();

        if (!firstName || !lastName || !username || !email || !password) {
            showAlert('Preencha todos os campos', 5000)
        }

        /* const response = await fetch('http://localhost:5000/insertUser', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: username,
                email: email,
                password: password
            })
        })
        const responseToJson = await response.json();

        if (responseToJson.status !== false) {
            alert(responseToJson.messageSucess);
        } */
    }

    return (
        <>
            {isCadastroActive ?
                <div className={"container-login"}>
                    <div className="container-login-box">

                        <div className="container-login-top">
                            <h2>Cadastrar</h2>
                            <p className="close-login" ><img src={closeIcon} alt="close" onClick={handleCloseModaLogin} /></p>
                        </div>

                        <form onSubmit={handleClickBtnRegister} className="form-login">

                            <div className="input-login-container inline">
                                <Input
                                    titleInput="Primeiro nome"
                                    typeInput="text"
                                    placeholderInput="alef"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <Input
                                    titleInput="Primeiro nome"
                                    typeInput="text"
                                    placeholderInput="master"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>


                            <div className="input-login-container">
                                <Input
                                    titleInput="Nome de usuário"
                                    typeInput="text"
                                    placeholderInput="Son Goku"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input-login-container">
                                <Input
                                    titleInput="Digite o seu E-mail"
                                    typeInput="email"
                                    placeholderInput="alefmastertutor@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-login-container">
                                <Input
                                    titleInput="Digite uma senha"
                                    typeInput="password"
                                    placeholderInput="DAGADFDSA#!#$@123"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            <div className="input-login-container">
                                <Input
                                    typeInput="submit"
                                    valueInput="Entrar"
                                />
                            </div>
                        </form>
                        <div className="not-account">
                            <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                            <button onClick={handleOpenLogin} >Criar conta</button>
                        </div>
                    </div>
                </div>
                :
                <Login />}
            {isAlert ? <Alert position="top-right" textAlert={textAlert} /> : null}
        </>
    );
}

export { Cadastro };