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
              className="theme_btn mb-2"
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
        <div className="header">Ask a question</div>
        <div className="body">
          <input className="theme_input" type="text" placeholder="Subject" />
          <textarea className="theme_input"></textarea>
        </div>
        <div className="footer">
          <button
            className="theme_btn"
            name="closeDialogue"
            onClick={clickListener}
          >
            Close
          </button>
          <button
            className="theme_btn"
            name="postQuestion"
            onClick={clickListener}
          >
            Post
          </button>
        </div>
      </DialogueComponent>
    </>
  );
}
