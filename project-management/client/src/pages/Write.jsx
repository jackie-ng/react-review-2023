import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='title' />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
          // value={value}
          // onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">item 1</div>
        <div className="item">item 2 </div>
      </div>
    </div>
  )
}
