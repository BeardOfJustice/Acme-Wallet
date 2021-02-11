import './Button.css';

function Button(props) {
    return  (
        <a href = {props.href} className = "Button">
            {props.label}
        </a>
    )
}

export default Button;