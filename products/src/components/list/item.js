import React from "react";

export default ({text, id, itemClick}) => (
    <button onClick={() => itemClick(id)}>
        {text}
    </button>
)
