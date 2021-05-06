import { createContext, useState } from 'react';

export const AboutCarContext = createContext();

export const AboutCarProvider = (props) => {
    const [aboutCar, setAboutCar] = useState();

    return (
        <AboutCarContext.Provider value={{ 
                aboutCar,
                setAboutCar 
            }}>   
            {props.children}
        </AboutCarContext.Provider>
    )
}