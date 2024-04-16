import PropTypes from 'prop-types';

import './divider.css';
import { Hr } from './Hr';



export const Divider = ({ text }) => {
    return (
        <div className="divider" >
            <h6 className='divider__txtmuted'> {text} </h6>
            <Hr />
        </div>
    )
}

Divider.propTypes = {
    text: PropTypes.string.isRequired,

}