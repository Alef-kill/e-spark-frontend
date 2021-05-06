import React, { useContext } from 'react';

import { AuthContext } from '../../providers/auth';

import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { HeaderMenu } from '../../components/HeaderMenu/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';
import { FaCar } from 'react-icons/fa';
import { FaAdjust } from 'react-icons/fa';
import { FaMoneyCheck } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMoneyBillWaveAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';


import './checkout.css';


const Checkout = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const listaPreco = ["R$ 399,00/Semana", "R$ 399,00/Semana", "R$ 399,00/Semana", "R$ 399,00/Semana", "R$ 399,00/Semana"];
    const defaultPreco = listaPreco[0];
    const listaTempo = ["3(três) Semanas", "3(três) Semanas", "3(três) Semanas", "3(três) Semanas", "3(três) Semanas"];
    const defaultTempo = listaTempo[0];

    return (
        <div className="container-home">
            <HeaderMenu />
            <LeftMenu />

            <main>
                <div className="container-checkout">
                    <h1> Checkout </h1>
                    <div className="item">
                        <h3>
                            Veículo Selecionado
                        </h3>
                        <Link to="#" className="">Alterar</Link>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaCar color="#fff" />
                                    <p>Chevrolet Bolt</p>
                                </label>
                             </div>
                            <div className="segundoItem">
                                <label className="detalhe-interno"><FaAdjust color="#fff" />
                                    <p>Vermelho Glory</p>
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="item">
                        <h3>
                            Plano Escolhido
                        </h3>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaMoneyBillWaveAlt color="#fff" />
                                    <Dropdown options={listaPreco}  value={defaultPreco} />
                                </label>
                            </div>
                            <div>
                                <label className="detalhe-interno"><FaCalendarAlt color="#fff" />
                                    <Dropdown options={listaTempo}  value={defaultTempo} />
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="item">
                        <h3>
                            Método de Pagamento
                        </h3>
                        <Link to="#" className="">Alterar</Link>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaMoneyCheck color="#fff" />
                                    <p>**** **** **** 8745</p>
                                </label>
                            </div>
                        </div>    
                    </div>

                    <h1> Opções de Retirada </h1>

                    <div className="item">
                        <h3>
                            Filial 1
                        </h3>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaHome color="#fff" />
                                <div>
                                    <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                    <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                </div>
                                    
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="item">
                        <h3>
                            Filial 2
                        </h3>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaHome color="#fff" />
                                <div>
                                    <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                    <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                </div>
                                    
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="item">
                        <h3>
                            Filial 3
                        </h3>
                        <div className="detalhe">
                            <div>
                                <label className="detalhe-interno"><FaHome color="#fff" />
                                    <div>
                                        <p>Av. Sebastião Antonio Ribeiro, 570,</p><input type="radio" value="Male" name="gender" /><br></br>
                                        <p className="segundaLinha">Maria José, Vespasiano - MG</p>
                                    </div>
                                </label>
                            </div>
                        </div>    
                    </div>

                    <div className="checkout-container-botoes">
                        <button>Voltar</button>
                        <button>Continuar</button>
                    </div>
        
                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
            <Footer />
        </div>
    );
}

export { Checkout };