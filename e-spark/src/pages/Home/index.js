import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../providers/auth';
import { ScrollCategoryContext } from '../../providers/scrollCategory';

import { ScrollCategory } from '../../components/ScrollCategory/';
import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardCars } from '../../components/CardCars/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';


import './home.css';


const Home = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { nameCategoryActive, activeCategory } = useContext(ScrollCategoryContext);
    const [dateCars, setDateCars] = useState([0]);
    const [fakeDateCars] = useState([1, 2, 3, 4, 5, 6])

    useEffect(() => {
        fetch('http://localhost:5000/viewCars')
            .then(response => response.json())
            .then(result => {
                setDateCars(result.data);
                console.log(result.data[0].title)
            });
    }, []);

    return (
        <div className="container-home">
            <HeaderMenu />
            <SlideShow />
            <LeftMenu />
            <h1 className="container-home-h1">
                Escolha uma categoria
            </h1>
            <ScrollCategory />
            <h1 className="container-home-h1 black">{nameCategoryActive}</h1>
            <main>
                <div className="container-cards-cars-home">

                    {
                        activeCategory ?
                            dateCars.map(item => {
                                if (item.brand === nameCategoryActive) {
                                    return <CardCars
                                        id={item.id}
                                        title={item.title}
                                        urlImg={item.url_image}
                                        urlImgD={item.url_image_d}
                                        description={item.description}
                                        brand={item.brand}
                                        model={item.model}
                                        category={item.category}
                                        autonomy={item.autonomy}
                                        maximum_speed={item.maximum_speed}
                                        acceleration={item.acceleration}
                                        power={item.power}
                                        transmission={item.transmission}
                                        occupants={item.occupants}
                                        capacity={item.capacity}
                                        typeCar={'default'}
                                        quantityInStock={item.quantity_in_stock}
                                    />
                                }
                                else if (nameCategoryActive === 'Todos') {
                                    return <CardCars
                                        id={item.id}
                                        title={item.title}
                                        urlImg={item.url_image}
                                        urlImgD={item.url_image_d}
                                        description={item.description}
                                        brand={item.brand}
                                        model={item.model}
                                        category={item.category}
                                        autonomy={item.autonomy}
                                        maximum_speed={item.maximum_speed}
                                        acceleration={item.acceleration}
                                        power={item.power}
                                        transmission={item.transmission}
                                        occupants={item.occupants}
                                        capacity={item.capacity}
                                        typeCar={'default'}
                                        quantityInStock={item.quantity_in_stock}
                                    />
                                }
                            }) :
                            dateCars[0] === 0 ?
                                fakeDateCars.map((item, key) => {
                                    return <CardCars
                                        id={item}
                                        title="Rimac C Two"
                                        description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                                        typeCar="premium" />
                                })
                                :
                                dateCars.map((item, key) => {
                                    return <CardCars
                                        id={item.id}
                                        title={item.title}
                                        urlImg={item.url_image}
                                        urlImgD={item.url_image_d}
                                        description={item.description}
                                        brand={item.brand}
                                        model={item.model}
                                        category={item.category}
                                        autonomy={item.autonomy}
                                        maximum_speed={item.maximum_speed}
                                        acceleration={item.acceleration}
                                        power={item.power}
                                        transmission={item.transmission}
                                        occupants={item.occupants}
                                        capacity={item.capacity}
                                        typeCar={'default'}
                                        quantityInStock={item.quantity_in_stock}
                                    />
                                })
                    }




                </div>
            </main>
            {isLoginActive ? <Login /> : null}
            {isCadastroActive ? <Cadastro /> : null}
            <Footer />
        </div>
    );
}

export { Home };