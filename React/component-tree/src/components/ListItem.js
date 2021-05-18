import React from 'react';

const ListItem = (props) => {
    const onChange = () => props.onChecked(props.id);   
    return <li onClick={onChange}>{props.value}</li>
}

export default ListItem;