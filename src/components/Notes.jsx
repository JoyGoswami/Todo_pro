import React, { useContext, useState } from "react";
import style from "./Notes.module.css";
import { IoArchive } from "react-icons/io5";
import { AppDataContext } from "../Store/AppDataStore";

function Notes(notes) {
  const { handleDelete } = useContext(AppDataContext);

  const [isExpanded, setExpand] = useState(false);

  function handleBoxClick(event) {
    setExpand(true);
    if (event.target.classList.contains(style.note_click)) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }

  return (
    <div
      className={`${style.notes_box} ${isExpanded ? style.expandable : ""} ${
        style.note_click
      }`}
      onClick={handleBoxClick}
    >
      <form className={`${style.notes_input_container}`}>
        <div className="input_field">
          <input
            type="text"
            name="notes_title"
            id="notes_title"
            className={`${style.notes_title} ${style.note_click}`}
            value={notes.notes.title}
            readOnly
            maxLength="50"
          />
          <textarea
            name="notes_textarea_content"
            id="notes_textarea_content"
            className={`${style.notes_textarea_content} ${style.note_click}`}
            value={notes.notes.note}
            readOnly
          ></textarea>
        </div>
        <div className={`${style.notes_control_container} ${style.note_click}`}>
          <div className={`${style.note_controll_inner} ${style.note_click}`}>
            <div className={style.notes_icon}>
              <IoArchive />
            </div>
            <div className="btn">
              <button
                onClick={() => handleDelete(notes.notes.title)}
                className={style.notes_btn}
                type="button"
              >
                Delete
              </button>
              {isExpanded ? (
                <button className={style.notes_btn} type="button">
                  Close
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Notes;
