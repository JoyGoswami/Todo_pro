import { createContext, useReducer, useState } from "react";

export const AppDataContext = createContext([]);

function dataReducer(currentData, action) {
  let newTodoData;
  if (action.type === "ADD_NEWNOTE") {
    newTodoData = [
      ...currentData,
      { title: action.payload.title, note: action.payload.note },
    ];
  } else if (action.type === "DELETE_NOTE") {
    newTodoData = currentData.filter(
      (data) => data.title !== action.payload.title
    );
  }
  return newTodoData;
}

const AppDataContextProvider = ({ children }) => {
  // const [noteData, setNote] = useState([{ title: "hello", note: "hi" }]);
  const [noteData, dataDispatch] = useReducer(dataReducer, []);
  function handleSubmit(title, note) {
    // let newNote = [...noteData, { title: title, note: note }];
    // setNote(newNote);
    const newNote = {
      type: "ADD_NEWNOTE",
      payload: {
        title: title,
        note: note,
      },
    };
    dataDispatch(newNote);
  }

  function handleDelete(title) {
    // let newNote = noteData.filter((data) => data.title !== title);

    // setNote(newNote);
    let newNote = {
      type: "DELETE_NOTE",
      payload: {
        title: title,
      },
    };
    dataDispatch(newNote);
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
