import React, { useState } from "react";

function CreateArea(props) {
  const [zoom, setZoom] = useState(false);
  function handleClick() {
    setZoom(true);
  }
  return (
    <div>
      <form
        className="create-note"
        onChange={props.handleChange}
        onClick={handleClick}
      >
        {zoom && <input name="title" placeholder="Title" spellCheck="false" />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          spellCheck="false"
        />
        <button onClick={props.handleAdd}>
          <i className='fas fa-plus'></i>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
