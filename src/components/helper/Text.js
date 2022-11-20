import React from 'react';
import "./Text.css";

const Text = (props) => {
    return(
        <div className={"text " + props.classList}>
            {props.children}
        </div>
    )
}

export default Text;