import React from 'react'
import { useState } from 'react'
import './Login.css'
import InputField from '../InputField/InputField'
import RegImage from '../Images/reg.jpg'


function Login(props) {

    const { userDataList } = props;

    const initState = {
        username: '',
        password: ''
    }

    const [toggle, setToggle] = useState(true);
    const [userLoginInfo, setUserLoginInfo] = useState(initState)
    const [error, setError] = useState(false);

    const InputFields = [
        {
            id: 1,
            type: "text",
            required: true,
            placeholder: "Username",
            icon: "fa-solid fa-user",
            errorMsg: "Enter a valid username",
            name: "username",
            pattern: "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"
        },
        {
            id: 4,
            type: "password",
            required: true,
            placeholder: "Password",
            icon: "fa-solid fa-lock",
            errorMsg: "Enter a valid Password",
            name: "password",
        },
    ]

    const inputHandler = (event) => {
        setUserLoginInfo((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // check if user exists
        const [existingUser] = userDataList.filter((item) => {
            if (item.username === userLoginInfo.username && item.password === userLoginInfo.password) return true;
            return false;
        });


        if (existingUser) {
            //user Exists 
            setError(false);

            const date = new Date();
            const timeStamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

            const updatedList = userDataList.map(
                (item) => {
                    if (item.username === existingUser.username) {
                        return {
                            ...item,
                            lastLoggedIn: timeStamp
                        }
                    }
                    return item;
                }
            );

            props.setUserDataList(updatedList)

        }
        else {
            //error
            setError(true)
            return;
        }

    }

    console.log(userDataList)

    return (
        <>
            <div className="wrapper">
                <div className="register-card">
                    <div className="register-form-container">
                        <div className="form-fields">
                            <h1 className='form-title'>Login</h1>
                            {error ? <span className='error'>Invalid Username or Password</span> : ""}
                            <form className='register-form' onSubmit={submitHandler}>
                                {
                                    // renders the input UI list 
                                    InputFields.map((item, index) => {
                                        const { id, errorMsg, icon, ...attributes } = item
                                        return (
                                            <>
                                                <InputField key={id} isError={toggle} error={errorMsg} icon={icon} {...attributes} onChange={inputHandler} />
                                            </>
                                        )
                                    })
                                }
                                <button type='submit' className='primary-btn' >Login</button>
                            </form>
                            <div className="add-info">
                                Don't have an account ? <a href='#'>Register</a>
                            </div>
                        </div>
                        <div className="register-image">
                            <img src={RegImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login