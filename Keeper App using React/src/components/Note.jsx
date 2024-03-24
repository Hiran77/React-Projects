import React from "react";

function Note(props){
    return (
     <div className="note" contenteditable="true">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

     </div>
    );
}

export default Note;