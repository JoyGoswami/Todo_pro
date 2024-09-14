import React, { useContext } from "react";
import { AppDataContext } from "../Store/AppDataStore";
import style from "./NoteContainer.module.css";
import Notes from "./Notes";

function NoteContainer({ toggleStatus }) {
  const { noteData } = useContext(AppDataContext);
  return (
    <section
      className={`${toggleStatus === true ? style.expand_able : ""} ${
        style.note_container
      }`}
    >
      {noteData.map(
        (notes, index) => (
          <Notes key={index} notes={notes} />
        )

        // console.log(notes)
      )}
    </section>
  );
}

export default NoteContainer;
