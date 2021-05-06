import React, { useRef, useState } from 'react';

import './alert.css';

const Alert = ({ position, textAlert }) => {

    /* 
        Position aceita os seguintes valores:
        bottom-right
        bottom-left
        top-left
        top-right
        top-center
        bottom-center
    */

    const closeAlert = useRef(null);
    const [isActive] = useState('flex');

    function handleClickCLoseAlert() {
        closeAlert.current.style.display = "none";
    }

    return (
        <div className={`container-alert ${position}`} ref={closeAlert} style={
            {
                'display': `${isActive}`,
                'justify-content': 'center',
            }
        }  >
            <div className="close-alert-information" onClick={handleClickCLoseAlert} >
                x
            </div>
            <div className="alert-information" >
                <p className="alert-text-information">
                    {textAlert}
                </p>
            </div>
        </div>
    )
}

export { Alert };