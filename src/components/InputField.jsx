import PropTypes from 'prop-types';




export const InputField = ({ name, type }) => {

    const onPlaceholder = () => {
        switch (type) {
            case 'email':
                return 'tu.email@gmail.com';

            case 'password':
                return '********';

            default:
                return 'alejandro thon';
        }
    }

    return (
        <label
            htmlFor={name}
            className='login__label'
        >
            {name}
            <input
                className='login__input'
                type={type}
                name={name}
                placeholder={onPlaceholder()}
            />
        </label>
    )
}
InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}