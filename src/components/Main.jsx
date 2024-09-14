import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./Main.module.css";
import { IoArchive } from "react-icons/io5";
import { AppDataContext } from "../Store/AppDataStore";

function Main({ toggleStatus }) {
  const [clicked, setclick] = useState(false);
  const [text, setText] = useState("");

  const { handleSubmit } = useContext(AppDataContext);
  //   console.log(handleSubmit);

  const textareaRef = useRef();
  const inputTitleRef = useRef();

  //   useEffect(() => {
  //     document.body.addEventListener("click", (event) => {
  //       if (event.target.classList.contains(style.input_field)) {
  //         setclick(true);
  //       } else {
  //         setclick(false);
  //         // console.log(inputTitleRef.current.value);
  //         // console.log(textareaRef.current.value);
  //         handleSubmit(inputTitleRef.current.value, textareaRef.current.value);
  //         inputTitleRef.current.value = "";
  //         textareaRef.current.value = "";
  //       }
  //     });
  //   }, []);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  function handleTextareaClick(event) {
    setclick(true);
  }

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  function onSubmitData(event) {
    event.preventDefault();

    // console.log(inputTitleRef.current.value);
    handleSubmit(inputTitleRef.current.value, textareaRef.current.value);
    inputTitleRef.current.value = "";
    textareaRef.current.value = "";
    setText("");
  }

  function handleEnterKey(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  function handleCloser() {
    setclick(false);
  }

  return (
    <main className={toggleStatus === true ? style.expand_able : ""}>
      <form
        onSubmit={onSubmitData}
        className={`${style.input_container} ${style.input_field} ${
          clicked === true ? style.display : ""
        }`}
      >
        <input
          onKeyDown={handleEnterKey}
          ref={inputTitleRef}
          type="text"
          name="input_title"
          id="input_title"
          className={`${style.input_title} ${style.input_field}`}
          placeholder="Title"
          maxLength="50"
        />
        <textarea
          value={text}
          onChange={handleTextareaChange}
          onClick={handleTextareaClick}
          ref={textareaRef}
          name="input_note"
          id="input_note"
          className={`${style.input_note} ${style.input_field}`}
          placeholder="Take a note..."
          maxLength="300"
        ></textarea>
        <div className={`${style.input_controller} ${style.input_field}`}>
          <div onClick={handleCloser} className={style.input_icon}>
            <IoArchive />
          </div>
          <div className="btns">
            <button onClick={handleCloser} className={style.close_btn}>
              Submit
            </button>
            <button
              onClick={handleCloser}
              type="button"
              className={style.close_btn}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Main;
