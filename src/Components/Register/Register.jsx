
import './Register.css'
import InputField from '../InputField/InputField'
import RegImage from '../Images/reg.jpg'
import { useEffect, useState } from 'react'
import { generateId } from '../../Constants/Helper'


const Register = (props) => {

    // user data

    const initialState = {
        username: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    }

    const [userInput, setUserInput] = useState(initialState);

    const [toggle, setToggle] = useState(true)
    const [userExists, setUserExists] = useState(false);
    const [success, setSuccess] = useState(false);

    // input field UI list

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
            id: 2,
            type: "email",
            required: true,
            placeholder: "Email",
            icon: "fa-solid fa-envelope",
            errorMsg: "Incorrect Email",
            name: "email",
        },
        {
            id: 3,
            type: "tel",
            required: true,
            placeholder: "Contact Number",
            icon: "fa-solid fa-phone",
            errorMsg: "Mobile number should be 10 digits long",
            name: "contact",
            pattern: "^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$"
        },
        {
            id: 4,
            type: "password",
            required: true,
            placeholder: "Password",
            icon: "fa-solid fa-lock",
            errorMsg: "Enter a valid Password",
            name: "password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
        },
        {
            id: 5,
            type: "password",
            required: true,
            placeholder: "Confirm Password",
            icon: "fa-solid fa-lock",
            errorMsg: "Passwords do not match",
            name: "confirmPassword",
            pattern: userInput.password
        }
    ]

    // save the user input values

    const inputHandler = (event) => {
        setUserInput((prevState) => {

            // keep the previous state
            // change only the updated field

            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
    }


    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            ...userInput,
            lastLoggedIn: null,
            id: generateId()
        }

        //check if user already exists ? 

        const userExists = props.userDataList.filter(
            (item) => {
                return item.username === data.username
            }
        )

        if (userExists.length > 0) {
            //error 
            setSuccess(false);
            setUserExists(true);
            return;
        }

        // no error 

        props.setUserDataList(
            (prevState) => {
                return [...prevState, data]
            }
        )

        setToggle(false);
        setUserExists(false)
        setSuccess(true);
        setUserInput(initialState);

    }


    return (
        <>
            <div className="wrapper">
                <div className="register-card">
                    <div className="register-form-container">
                        <div className="form-fields">
                            <h1 className='form-title'>Register a New User</h1>

                            {/* display success message */}
                            {success ? <span className='success'>Registered Successfully</span> : ""}

                            {/* display username error */}
                            {userExists ? <span className='error'>Username already in use</span> : ""}

                            <form className='register-form' onSubmit={submitHandler}>
                                {
                                    // renders the input UI list 
                                    InputFields.map((item, index) => {
                                        const { id, errorMsg, icon, ...attributes } = item
                                        return (
                                            <>
                                                <InputField key={id} value={userInput[item.name]} isError={toggle} error={errorMsg} icon={icon} {...attributes} onChange={inputHandler} />
                                            </>
                                        )
                                    })
                                }
                                <button type='submit' className='primary-btn' >Register</button>
                            </form>
                            <div className="add-info">
                                Already have an Account ? <a href='#'>Sign In</a>
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

export default Register;