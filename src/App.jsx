import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import AppDataContextProvider, { AppDataContext } from "./Store/AppDataStore";
import NoteContainer from "./components/NoteContainer";

function App() {
  const [toggle, setToggle] = useState(false);
  // const [noteData, setNote] = useState([{ title: "hello", note: "hi" }]);

  const handleToggle = (status) => {
    setToggle(status);
    console.log(toggle);
  };

  // function handleSubmit(title, note) {
  //   let newNote = [...noteData, { title: title, note: note }];
  //   setNote(newNote);
  // }
  return (
    <>
      <AppDataContextProvider>
        <Nav handleToggle={handleToggle} toggleStatus={toggle} />
        <SideNav toggleStatus={toggle} />
        <Main toggleStatus={toggle} /*handleSubmit={handleSubmit} */ />
        <NoteContainer />
      </AppDataContextProvider>
    </>
  );
}

export default App;
