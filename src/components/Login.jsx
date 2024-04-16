import { Link } from "react-router-dom"
import { Divider, Hr, InputField } from "."
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import user from '../assets/icons/user-square.svg';
import './login.css'


export const Login = () => {
    return (
        <div className="login authpage__container">
            <h3 className='login__title'>Hola de nuevo!</h3>

            <form action="" className='authpage__form'>

                <Divider text='Inicia con' />

                <InputField name='email' type='email' />

                <InputField name='password' type='password' />

                <div className="login__submitbox" >
                    <Hr justify='start' />
                    <button>enviar</button>
                    <Hr />
                </div>

                <div className='login__alterbox'>

                    <Divider text='O puedes usar' />

                    <div className='login__links'
                        style={{
                            marginTop: '2rem',
                            display: 'grid',
                            gridTemplateRows: '1fr'
                        }}
                    >
                        <Link to='https://google.com'
                            target='_blank'>
                            <img src={google} alt="" style={{ width: '60px' }} />
                        </Link>

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
            <img src="#" alt="login image" className='login__image' />
        </div>
    )
}