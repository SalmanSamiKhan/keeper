import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          // on click trigger an arrow function
          props.handleDelete(props.id); //passing values through func
        }}
      >
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
}

export default Note;
