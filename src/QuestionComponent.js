import "./QuestionComponent.css";

import { useState } from "react";
import AnswerListComponent from "./AnswerListComponent";
import DialogueComponent from "./DialogueComponent";

export default function QuestionComponent({
  qId,
  qDate,
  qTime,
  qTopic,
  qDesc,
  qAnswers
}) {
  const [qExpanded, setQExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const clickListener = (event) => {
    switch (event.target.name) {
      case "expandCollapse":
        setQExpanded(!qExpanded);
        break;
      case "reportSpam":
        console.log("report me");
        break;
      case "openDialogue":
        setOpen(true);
        break;
      case "closeDialogue":
        setOpen(false);
        break;
      case "postAnAnswer":
        break;
      default:
    }
  };

  return (
    <div className="QuestionComponent">
      <section>
        <div className="row">
          <div className="col-6 left_block">
            <span>ID: {qId} | </span>
            <span>
              {qDate} {qTime}
            </span>
          </div>
          <div className="col-6 right_block">
            <button
              className="btn_link"
              name="reportSpam"
              onClick={clickListener}
            >
              Report spam
            </button>
            <button
              className="img_btn"
              name="openDialogue"
              onClick={clickListener}
            >
              <img
                style={{ pointerEvents: "none" }}
                alt="reply"
                src="reply.png"
              />
            </button>
          </div>
        </div>

        <div className="align-left question_box">
          <div className="topic">{qTopic}</div>
          <div className="question_desc">{qDesc}</div>
        </div>
        <div className="align-right">
          <button
            className="btn_link"
            name="expandCollapse"
            onClick={clickListener}
          >
            {qExpanded ? "Read less..." : "Read more..."}
          </button>
        </div>

        {qExpanded ? <AnswerListComponent answers={qAnswers} /> : null}
      </section>
      <DialogueComponent open={open}>
        <div className="header">Reply an answer</div>
        <div className="body">
          <div>{qDesc}</div>
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
            name="postAnAnswer"
            onClick={clickListener}
          >
            Post
          </button>
        </div>
      </DialogueComponent>
    </div>
  );
}
