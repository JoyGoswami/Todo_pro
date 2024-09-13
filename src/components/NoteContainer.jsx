import React, { useContext } from "react";
import { AppDataContext } from "../Store/AppDataStore";

function NoteContainer() {
  const { noteData } = useContext(AppDataContext);
  console.log(noteData);
  return <div>NoteContainer</div>;
}

export default NoteContainer;
