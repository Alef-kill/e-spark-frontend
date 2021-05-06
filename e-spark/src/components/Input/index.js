import React, { useState } from 'react';

import './input.css';

const Input = ({ typeInput, titleInput, valueInput, placeholderInput, heightInput, ...rest }) => {

    const [value, setValue] = useState();
    const [isNull, setIsNull] = useState(false);
    const [isEmailValidate, setIsEmailValidate] = useState(false);

    function inputIsNull(e) {
        return !e.target.value ? setIsNull(true) : setIsNull(false);
    }

    function inputEmailValidate(e) {
        const regex = /\S+@\S+\.\S+/;
        const isEmail = e.target.value.match(regex);

        if (typeInput === "email")
            return isEmail === null ? setIsEmailValidate(true) : setIsEmailValidate(false);
    }

    function verifyInput(e) {
        inputIsNull(e);
        setValue(e.target.value);
        inputEmailValidate(e);
    }

    return (
        <div className="input-container">
            {titleInput && <label htmlFor="fname">{titleInput}</label>}
            <input
                type={typeInput}
                id="email"
                name="email"
                placeholder={placeholderInput}
                value={valueInput}
                onMouseEnter={verifyInput}
                onMouseOut={verifyInput}
                {...rest}
            />

            { isNull ?
                <p>Esse campo não pode ser vazio *</p> :
                isEmailValidate ?
                    <p>Digite um e-mail valido *</p> :
                    null }
        </div>
    )
}

export { Input }