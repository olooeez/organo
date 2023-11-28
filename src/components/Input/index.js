import "./index.css";

const Input = (props) => {
    const placeholderMod = `${props.placeholder}...`

    return (
        <div className="text">
            <label>{props.label}</label>
            <input placeholder={placeholderMod} type={props.type} />
        </div>
    )
};

export default Input;
