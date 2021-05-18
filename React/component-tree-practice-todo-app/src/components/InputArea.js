import React, {useState} from 'react';

const InputArea = (props) => {
    const [inputText,setInputText] = useState("");

    const handleChange = (event) => {
        const value  = event.target.value;
        setInputText(value);
    }

    const handleClick = () => {
        props.cliked(inputText);
        setInputText("");
    }

    return (
    <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
        <span>Add</span>
        </button>
    </div>);

}

export default InputArea;