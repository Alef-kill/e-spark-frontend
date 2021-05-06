import React, { useState, useContext } from 'react';

import { AuthContext } from '../../providers/auth';

import { Cadastro } from '../Cadastro';
import { Alert } from '../Alert';
import { Input } from '../Input';


import closeIcon from '../../images/close.svg';

import './login.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isAlert, setAlert] = useState();
    const [textAlert, setTextAlert] = useState('');

    const { isLoginActive, setIsLoginActive, setIsCadastroActive } = useContext(AuthContext);

    function handleCloseModaLogin() {
        setIsLoginActive(false);
        console.log(isLoginActive);
    }

    function handleOpenRegister() {
        setIsLoginActive(false);
        setIsCadastroActive(true);
    }

    function showAlert(text, time) {
        setTextAlert(text);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, time)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (email) {
            const regex = /\S+@\S+\.\S+/;
            const isEmail = email.match(regex);

            if (isEmail === null)
                return showAlert('Digite um e-mail valido', 5000);
        } else if (!email || !password) {
            showAlert('Por favor, preencha todos os campos!', 5000);
        } 
        
        if (email && password) {
            let hasResponse = true;

            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({ email, password })
            }).catch(e => {
                hasResponse = false;
            })

            if (hasResponse === false) {
                showAlert('Não foi possível se conectar com o servidor', 5000)
            }

            if (response !== undefined) {
                const responseToJson = await response.json();

                if (responseToJson.status === false) {
                    showAlert(responseToJson.messageSucess, 5000)
                }
            }
        }
    }

    return (
        <>

            {isLoginActive ?
                <div className={isLoginActive ? "container-login" : "container-login animation-close"}>
                    <div className="container-login-box">

                        <div className="container-login-top">
                            <h2>Login</h2>
                            <p className="close-login" ><img src={closeIcon} alt="close" onClick={handleCloseModaLogin} /></p>
                        </div>

                        <form className="form-login">

                            <div className="input-login-container">
                                <Input
                                    titleInput="E-mail"
                                    typeInput="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholderInput="alefmastertutor@gmail.com"
                                />
                            </div>

                            <div className="input-login-container">
                                <Input
                                    titleInput="Senha"
                                    typeInput="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholderInput="Digite a sua senha"
                                />
                            </div>

                            <div className="input-login-container" onClick={handleSubmit}>
                                <Input
                                    typeInput="submit"
                                    valueInput="Entrar"
                                />
                            </div>
                        </form>
                        <div className="not-account">
                            <p>Ainda não tem uma conta, cadastre-se agora mesmo</p>
                            <button onClick={handleOpenRegister} >Criar conta</button>
                        </div>
                    </div>
                </div>
                :
                <Cadastro />}

            {isAlert ? <Alert position="top-right" textAlert={textAlert} /> : null}
        </>
    );
}

export { Login };