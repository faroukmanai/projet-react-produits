import PropTypes from 'prop-types'
const Button = ({text, color, onClick}) => {
    return (
        <button onClick = {onClick} 
        style = { {color: color}}
        className='btn'>
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: 'black'
}

Button.protoTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button;