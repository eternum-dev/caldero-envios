import { Link, useNavigate } from "react-router-dom"
import { Divider, Hr, InputField } from "."
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import user from '../assets/icons/user-square.svg';
import './register.css'
import { useState } from "react";
import { createUser, signIn, signInWithGoogle } from "../firebase/auth";


export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [ErrorMessage, setErrorMessage] = useState('');
    const [signingIn, setSigningIn] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!signingIn) {
            setSigningIn(true);
            await createUser(email, password)
                .catch(err => console.log(err));

            await signIn(email, password)
                .then(navigate("/"));
        }


    }

    const onSignInGoogle = async (event) => {
        event.preventDefault();
        if (!signingIn) {
            setSigningIn(true);
            signInWithGoogle()
                .then(console.log('hola'), navigate("/"))
                .catch(err => {
                    setErrorMessage(err);
                    setSigningIn(false);
                });
        }
    }

    return (
        <div className="register authpage__container">
            <h3 className='register__title'>construyamos un mapa juntos!</h3>

            <form action="" className='authpage__form' onSubmit={onSubmit}>

                <Divider text='Registrate con' />

                <InputField
                    name='name'
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
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
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <InputField
                    name='repeatPassword'
                    type='password'
                    value={repeatPassword}
                    onChange={(event) => setRepeatPassword(event.target.value)}
                />

                <div className="register__submitbox" >
                    <Hr justify='start' />
                    <button>Registrarme</button>
                    <Hr />
                </div>

                {ErrorMessage && <h3 style={{ color: 'red', background: '#ccc' }}>{ErrorMessage}</h3>}

                <div className='register__alterbox'>

                    <Divider text='o tambien puedes hacerlo por' />

                    <div className='register__links'
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

                        <Link to='https://google.com'
                            target='_blank'>
                            <img src={facebook} alt="" style={{ width: '60px' }} />
                        </Link>

                        <Hr size='3px' justify='center' />

                        <Link to='https://google.com'
                            target='_blank'>
                            <img src={user} alt="" style={{ width: '60px' }} />
                        </Link>
                    </div>
                </div>

            </form>
            <img src="#" alt="register image" className='register__image' />
        </div>
    )
}


