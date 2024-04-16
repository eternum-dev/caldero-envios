import PropTypes from 'prop-types';

export const Hr = ({ size = '2px', justify = 'end' }) => {
    return (
        <div
            className='hr'
            style={{
                justifySelf: justify,
                height: size,
                width: '90%',
                background: 'rgba(204, 204, 204, 0.813)',
                margin: '0 0.5rem'
            }}>  </div>
    )
}

Hr.propTypes = {
    size: PropTypes.string,
    justify: PropTypes.string,
}