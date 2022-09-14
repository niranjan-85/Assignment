import React, { useState } from 'react'
import './inputs.css'

function InputField(props) {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true)
    }

    return (
        <>

            <div className='form-controls'>
                <label className='icons'><i className={props.icon}></i></label>
                <input className='register-inputs' {...props} onBlur={handleFocus} focused={focus.toString()} />
                {props.isError ? < span className='error-message'>{props.error}</span> : ""}
            </div>

        </>
    )
}

export default InputField