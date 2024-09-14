import { createContext, useState } from "react";

export const AppDataContext = createContext([]);

const AppDataContextProvider = ({ children }) => {
  const [noteData, setNote] = useState([{ title: "hello", note: "hi" }]);
  function handleSubmit(title, note) {
    let newNote = [...noteData, { title: title, note: note }];
    setNote(newNote);
  }
  function handleDelete(title) {
    let newNote = noteData.filter((data) => data.title !== title);

    setNote(newNote);
  }
  return (
    <AppDataContext.Provider
      value={{
        noteData: noteData,
        handleSubmit: handleSubmit,
        handleDelete: handleDelete,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};
export default AppDataContextProvider;
