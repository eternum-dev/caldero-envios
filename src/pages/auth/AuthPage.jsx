import { useState } from 'react';
import { Login } from '../../components';
import { Register } from '../../components/Register';
import './authpage.css';

export const AuthPage = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    return (
        <div className='authpage'>
            <div className='authpage__buttonbox'>
                <button
                    onClick={() => setIsRegistered(true)}
                    className={`authpage__button btn-left ${isRegistered && 'authpage__button--isActive'}`}
                >
                    login
                </button>
                <button
                    onClick={() => setIsRegistered(false)}
                    className={`authpage__button btn-right ${!isRegistered && 'authpage__button--isActive'}`}
                >
                    sign-in
                </button>
            </div>


            {
                isRegistered ?
                    (
                        <Login />
                    ) :
                    (
                        <Register />
                    )
            }



        </div >
    )
}