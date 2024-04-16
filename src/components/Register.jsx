import { Link } from "react-router-dom"
import { Divider, Hr, InputField } from "."
import facebook from '../assets/icons/facebook.svg';
import google from '../assets/icons/google.svg';
import user from '../assets/icons/user-square.svg';
import './register.css'


export const Register = () => {
    return (
        <div className="register authpage__container">
            <h3 className='register__title'>construyamos un mapa juntos!</h3>

            <form action="" className='authpage__form'>

                <Divider text='Registrate con' />

                <InputField name='name' type='text' />
                <InputField name='email' type='email' />

                <InputField name='password' type='password' />
                <InputField name='repeatPassword' type='password' />

                <div className="register__submitbox" >
                    <Hr justify='start' />
                    <button>Registrarme</button>
                    <Hr />
                </div>

                <div className='register__alterbox'>

                    <Divider text='o tambien puedes hacerlo por' />

                    <div className='register__links'
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
            <img src="#" alt="register image" className='register__image' />
        </div>
    )
}