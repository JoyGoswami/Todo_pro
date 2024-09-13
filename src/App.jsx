import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (status) => {
    setToggle(status);
    console.log(toggle);
  };
  return (
    <>
      <Nav handleToggle={handleToggle} toggleStatus={toggle} />
      <SideNav />
    </>
  );
}

export default App;
