import React from 'react';

const InputArea = (props) => {

    return (<div className="form">
        <input onChange={props.change} type="text" value={props.input} />
        <button onClick={props.cliked}>
        <span>Add</span>
        </button>
    </div>);

}

export default InputArea;