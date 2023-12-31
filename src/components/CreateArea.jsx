import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState({ title: "", content: "" });
  function handleChange(event) {
    let field = event.target.name;
    let text = event.target.value;
    setInput((prev) => {
      return { ...prev, [field]: text };
    });
  }
  function handleClick() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Title"
            value={input.title}
          />
        )}
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          rows={isExpanded ? "3" : "1"}
          placeholder="Take a note.."
          value={input.content}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(input);
              setInput({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
