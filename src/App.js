import "./styles.css";
import questions from "./data.json";
import { useState } from "react";

import QuestionListComponent from "./QuestionListComponent";
import DialogueComponent from "./DialogueComponent";

export default function App() {
  const [open, setOpen] = useState(false);

  const clickListener = () => {
    console.log("Post A Question");
    setOpen(!open);
  };

  const closeDialogue = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="App">
        <h1>Faceless Friends Forum</h1>
        <button onClick={clickListener}>Post a Question</button>
        <QuestionListComponent questions={questions} />
      </div>
      <DialogueComponent open={open}>
        Hi, I am a Dialogue <button onClick={closeDialogue}>Close</button>
      </DialogueComponent>
    </>
  );
}
