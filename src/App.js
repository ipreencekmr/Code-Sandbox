import "./styles.css";
import questions from "./data.json";
import { useState } from "react";

import QuestionListComponent from "./QuestionListComponent";
import DialogueComponent from "./DialogueComponent";

export default function App() {
  const [open, setOpen] = useState(false);

  const clickListener = (event) => {
    switch (event.target.name) {
      case "openDialogue":
        setOpen(true);
        break;
      case "closeDialogue":
        setOpen(false);
        break;
      case "postQuestion":
        console.log("Post A Question");
        break;
      default:
    }
  };

  return (
    <>
      <div className="App container-fluid">
        <h1>Faceless Friends Forum</h1>
        <div className="row">
          <div className="col-12 align-right">
            <button
              className="theme_btn "
              name="openDialogue"
              onClick={clickListener}
            >
              Post a Question
            </button>
          </div>
        </div>

        <QuestionListComponent questions={questions} />
      </div>
      <DialogueComponent open={open}>
        <input className="theme_input" type="text" placeholder="Subject" />
        <textarea className="theme_input"></textarea>
        <button
          className="theme_btn"
          name="postQuestion"
          onClick={clickListener}
        >
          Post
        </button>
        <button
          className="theme_btn"
          name="closeDialogue"
          onClick={clickListener}
        >
          Close
        </button>
      </DialogueComponent>
    </>
  );
}
