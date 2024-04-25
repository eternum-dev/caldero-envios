import { useState } from 'react';
// import settingsIcon from '../assets/icons/settings.svg';

import SettingsIcon from './SettingsIcon';
import SettingsUserIcon from './SettingsUserIcon';
import { signOut } from '../firebase/auth';
import { Hr } from './Hr';
import { useLocation } from 'react-router-dom';
import DefaultUser from './DefaultUser';
import userBox from '../assets/icons/user-box.svg';
import password from '../assets/icons/save-password.svg'

export const ConfigButton = () => {
    const location = useLocation();
    const [showModalConfig, setshowModalConfig] = useState(false);
    const [showModalUser, setshowModalUser] = useState(false);


    return (
        <div
            className='buttoneraFacherita' style={{
                position: "fixed",
                top: '20px',
                right: '20px',
                zIndex: 100,
                display: 'flex',
                gap: '.5rem',
                height: '5rem'
            }}
        >
            <button
                style={{
                    padding: '0',
                    background: 'transparent'
                }}
                onClick={() => {
                    setshowModalConfig(prev => !prev);
                    if (showModalUser) setshowModalUser(false);
                }}
            >
                {
                    location.pathname !== '/auth' && <SettingsUserIcon />
                }

            </button>
            {

                showModalConfig && (
                    <div style={{
                        background: 'var(--very-gery)',
                        padding: '2rem 1.5rem',
                        minWidth: '300px',
                        // height: '300px',
                        position: 'absolute',
                        right: 0,
                        top: '75px',
                        display: 'grid',
                        gridTemplateRows: 'auto  1fr auto',
                        gap: '2rem',
                    }}>
                        <DefaultUser />
                        <div style={{
                            display: 'grid', gap: '1.5rem', alignContent: 'center',
                            alignSelf: 'start'
                        }}>
                            <button
                                style={{
                                    textAlign: 'start',
                                    color: 'var(--white)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                <img src={userBox} alt="#" style={{ marginRight: '1rem' }} />
                                perfil

                            </button>
                            <button style={{
                                textAlign: 'start',
                                color: 'var(--white)',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }}>
                                <img src={password} alt="#" style={{ marginRight: '1rem' }} />
                                contraseña
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', }}>
                            <Hr />
                            <button
                                style={{ padding: '.8rem  1.2rem', color: 'var(--white)', border: '1px solid var(--white)', borderRadius: '5px' }}
                                onClick={() => { signOut(); setshowModalConfig(false) }}
                            >cerrar session
                            </button>
                            <Hr justify='start' />
                        </div>

                    </div>
                )
            }
            <button
                style={{
                    padding: '0',
                    background: 'transparent',
                }}
                onClick={() => {
                    setshowModalUser(prev => !prev);
                    if (showModalConfig) setshowModalConfig(false);
                }}
            >
                <SettingsIcon />
            </button>
            {
                showModalUser && (
                    <div style={{
                        background: 'var(--very-gery)',
                        padding: '2rem 1.5rem',
                        minWidth: '300px',
                        height: '324px',
                        position: 'absolute',
                        right: 0,
                        top: '75px',
                        color: 'white'
                    }}>
                        Config app
                    </div>
                )
            }

        </div>

    )
}