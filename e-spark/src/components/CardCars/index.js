import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import { Login } from '../Login/index';
import exempleCarIcon from '../../images/exemple-car.png';

import { AboutCarContext } from '../../providers/cards';
import { AuthContext } from '../../providers/auth';

import './cardcars.css'

const CardCars = ({
    id,
    title,
    urlImg,
    urlImgD,
    description,
    brand,
    model,
    category,
    autonomy,
    maximum_speed,
    acceleration,
    power,
    transmission,
    occupants,
    capacity,
    typeCar,
    quantityInStock,

}) => {
    const { aboutCar, setAboutCar } = useContext(AboutCarContext);
    const { user, isLoginActive, setIsLoginActive } = useContext(AuthContext);
    const history = useHistory();

    function handleClicAbout() {

        setAboutCar({
            id,
            title,
            urlImg,
            urlImgD,
            description,
            brand,
            model,
            category,
            autonomy,
            maximum_speed,
            acceleration,
            power,
            transmission,
            occupants,
            capacity,
            typeCar,
            quantityInStock,
        })

        history.push('/aboutCar');
    }

    function handleClickAlugar() {
        return user.name === '' ? setIsLoginActive(true) :  null;
    }

    return (
        <>
        <div className={"container-card-cars " + typeCar} key={id}>
            <div className="title-car">
                <p className={"namecar " + typeCar}>{title}</p>
            </div>
            <div className="image-car">
                <img src={urlImg || exempleCarIcon} alt="carro" />
            </div>
            <div className="description-car">
                {description}
            </div>
            <div className="footer-card-car">
                <button className={typeCar} id={id} onClick={handleClicAbout}>Sobre</button>
                <button className={typeCar} id={id} onClick={handleClickAlugar}>Alugar</button>
            </div>
        </div>
        {isLoginActive? <Login/> : null}
        </>
    )
}

export { CardCars };
