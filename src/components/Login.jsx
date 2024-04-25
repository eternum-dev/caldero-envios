// import { Link } from "react-router-dom"
import { Divider, Hr, InputField } from "."
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import user from '../assets/icons/user-square.svg';
import './login.css'
import { useState } from "react";
import { signIn, signInWithGoogle } from "../firebase/auth";
import { useNavigate } from "react-router-dom";



export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    const [signingIn, setSigningIn] = useState(false);



    const onSubmit = async (event) => {
        event.preventDefault();
        if (!signingIn) {
            setSigningIn(true);
            await signIn(email, password)

        }
        navigate("/")
    }

    const onSignInGoogle = async (event) => {
        event.preventDefault();
        if (!signingIn) {
            setSigningIn(true);
            await signInWithGoogle()
                .catch(err => {
                    setErrorMessage(err);
                    console.log(err);
                    setSigningIn(false);
                })

        }
        navigate("/")
    }
    return (
        <div className="login authpage__container">

            <h3 className='login__title'>Hola de nuevo!</h3>

            <form action="" className='authpage__form' onSubmit={onSubmit}>

                <Divider text='Inicia con' />

                <InputField
                    name='email'
                    type='email'
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <InputField
                    name='password'
                    type='password'
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }} />

                <div className="login__submitbox" >
                    <Hr justify='start' />
                    <button type="submit" style={{ padding: '.8rem  1.2rem', color: 'var(--white)', border: '1px solid var(--white)', borderRadius:'5px' }} >enviar</button>
                    <Hr />
                </div>
                {
                    ErrorMessage && ErrorMessage
                }
                <div className='login__alterbox'>

                    <Divider text='O puedes usar' />

                    <div className='login__links'
                        style={{
                            marginTop: '2rem',
                            display: 'grid',
                            gridTemplateRows: '1fr'
                        }}
                    >
                        <button onClick={(event) => onSignInGoogle(event)}>
                            <img src={google} alt="" style={{ width: '60px' }} />
                        </button>


                        <Hr size='3px' justify='center' />


                        <img src={facebook} alt="" style={{ width: '60px' }} />


                        <Hr size='3px' justify='center' />

                        <img src={user} alt="" style={{ width: '60px' }} />

                    </div>
                </div>

            </form>
            <img src="#" alt="login image" className='login__image' />
        </div>
    )
}