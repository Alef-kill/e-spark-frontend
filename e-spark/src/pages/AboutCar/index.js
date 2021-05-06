import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HeaderMenu } from '../../components/HeaderMenu';
import { Footer } from '../../components/Footer';
import { LeftMenu } from '../../components/LeftMenu';
import { Cadastro } from '../../components/Cadastro/';
import { Login } from '../../components/Login/';

import { AuthContext } from '../../providers/auth';
import { AboutCarContext } from '../../providers/cards';

import './aboutcar.css';

const AboutCar = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { aboutCar } = useContext(AboutCarContext);
    
    return (
        <div className="container-about-car">
            <HeaderMenu />
            <LeftMenu />
            <div className="image-car">
                <img src={aboutCar?.urlImgD ?? "https://2.bp.blogspot.com/-G3yr-uFuiz0/WaBbF6Mfy-I/AAAAAAAA9V4/jk7TyRiVC94iGV6OKprmByhIz90xHW0rQCLcBGAs/s1600/%25285%2B2%2B-25%2529.jpg"} alt="" />
                <div className="title-car">
                    <div>
                        <label>{aboutCar?.title ?? 'title'}</label>
                        <h2>{aboutCar?.model ?? 'Modelo'}</h2>
                    </div>
                </div>
            </div>

            <div className="about-car-description">
                <h3> {aboutCar?.title ?? 'Energia para renovar sua vida'} </h3>
                <p>{aboutCar?.description ?? 'Este é carro mais veloz da linha veloster'}</p>
            </div>

            <div className="about-car-datasheet">
                <div className="datasheet-title">
                    <h1>Ficha Tecnica</h1>
                </div>
                <div className="about-datasheet">
                    <p>Categoria</p>
                    <p>{ aboutCar?.category ?? 'Hatch/Impact' }</p>
                </div>
                <div className="about-datasheet">
                    <p>Autonomia</p>
                    <p> {aboutCar?.autonomy ?? 'Até 383 km<'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Velocidade Máxima</p>
                    <p>{ aboutCar?.maximum_speed ?? '145 km/h'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Aceleração</p>
                    <p>{ aboutCar?.acceleration ?? '0 - 100 km/h em 6.5s'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Potência</p>
                    <p>{ aboutCar?.ṕower ?? '203 cv'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Transmissão</p>
                    <p>{ aboutCar?.transmission ?? 'Automatica d 6 machast'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Ocupantes</p>
                    <p>{ aboutCar?.occupants?? '5'}</p>
                </div>
                <div className="about-datasheet">
                    <p>Capacidade</p>
                    <p>{ aboutCar?.capacity ?? '478L'}</p>
                </div>
            </div>
            <div className="about-btn-rent">
                <Link to="/"><button className="btn-back">voltar</button></Link> 
                <Link to="/"><button className="btn-back-rent">Alugar veículo</button></Link>
            </div>
            <Footer />
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
        </div>
    )
}

export { AboutCar };