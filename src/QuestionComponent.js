import "./QuestionComponent.css";

import { useState } from "react";
import AnswerListComponent from "./AnswerListComponent";

export default function QuestionComponent({
  qId,
  qDate,
  qTime,
  qTopic,
  qDesc,
  qAnswers
}) {
  const [qExpanded, setQExpanded] = useState(false);

  const clickListener = () => {
    setQExpanded(!qExpanded);
  };

  return (
    <div className="QuestionComponent">
      <section>
        <div>{qId}</div>
        <div>{qDate}</div>
        <div>{qTime}</div>
        <div>{qTopic}</div>
        <div>{qDesc}</div>
        <button onClick={clickListener}>
          {qExpanded ? "Collapse" : "Expand"}
        </button>
        <button onClick={clickListener}>Report spam</button>
        {qExpanded ? <AnswerListComponent answers={qAnswers} /> : null}
      </section>
    </div>
  );
}
