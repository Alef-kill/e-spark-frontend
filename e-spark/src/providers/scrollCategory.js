import { createContext, useState } from 'react';

export const ScrollCategoryContext = createContext();

export const ScrollCategoryProvider = (props) => {
    const [nameCategoryActive, setNameCategoryActive] = useState('Todos');
    const [activeCategory, setActiveCategory] = useState(false);

    return (
        <ScrollCategoryContext.Provider value={{ 
            activeCategory,
            setActiveCategory,
            nameCategoryActive,
            setNameCategoryActive
            }}>
                
            {props.children}
        </ScrollCategoryContext.Provider>
    )
}