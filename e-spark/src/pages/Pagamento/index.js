import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';
import { FaHome } from 'react-icons/fa';

import CarroIcon from '../../images/carro-eletrico.png';

import './pagamento.css';

const Pagamento = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);

    return (
        <div className="container-home">
            <HeaderMenu />
            <LeftMenu />

            <main className="main-pagamento">
            <div className="container-pagamento">
                <h1 className="container-home-h1">
                    Pronto :)
                </h1>

                <figure className="img-pagamento">
                    <img src={CarroIcon} alt="carro-bar-icon" />
                </figure>
                
                <p className="titulo-pagamento">Pagamento aprovado!</p>
                <p className="descricao-pagamento">Tudo certo Janete! Você já pode retirar seu Chevrolet Bolt na Filial 03!</p>

                <div className="filial">
                    <label className="detalhe-interno"><FaHome color="#00B4D8" font-size="45px" />
                        <p>Av. Sebastião Antonio Ribeiro, 570, Maria José, Vespasiano - MG</p>       
                    </label>
                </div>

                <div className="pagamento-container-botoes">
                        <button className="btn-end">Ver rota</button>
                </div>
            </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
            <Footer />
        </div>
    );
}

export { Pagamento };