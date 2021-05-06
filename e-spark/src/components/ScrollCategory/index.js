import React, { useContext, useRef, useEffect, useState } from 'react';

import { ScrollCategoryContext } from '../../providers/scrollCategory';

import leftArrowIcon from '../../images/left-arrow.svg';
import rightArrowIcon from '../../images/right-arrow.svg';

import './scrollCategory.css';

const ScrollCategory = () => {
    const { setNameCategoryActive, setActiveCategory } = useContext(ScrollCategoryContext);
    const scrollRef = useRef(null);
    const categoryValueName = useRef(null);

    const [modelCars, setModelCars] = useState([
        'Flex',
        'Economico',
        'Esportivo',
        'Flex',
        'Economico',
        'Esportivo',
        'Luxo',
        'Mini van',
        'Prêmio',
        'SUV']);

    useEffect(() => {
        fetch('http://localhost:5000/viewCars')
            .then(response => response.json())
            .then(result => {
                const arrayModel = result.data.map(item => {
                    return item.brand;
                });

                // Remove os nomes repitidos do array modelCars
                const arrUnique = [...new Set(arrayModel)];
                arrUnique.unshift('Todos');
                setModelCars(arrUnique);
            })
    }, []);

    function handleClickRight() {
        scrollRef.current.scrollBy(100, 0);
    }

    function handleClickLeft() {
        scrollRef.current.scrollBy(-100, 0);
    }

    return (
        <div className="container-scroll-category">
            <img src={leftArrowIcon} alt="" onClick={handleClickLeft} />
            <div className="scroll-category-item" ref={scrollRef}>
                {modelCars.map((item, index) => (
                    <div className="item-scroll" key={index} >
                        <p ref={categoryValueName} onClick={(e) => {
                                setNameCategoryActive(e.target.textContent)
                                setActiveCategory(true);
                            }} >{item}</p>
                    </div>
                ))}
            </div>
            <img src={rightArrowIcon} alt="" onClick={handleClickRight} />
        </div>

    )
}

export { ScrollCategory };