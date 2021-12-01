import "./AnswerComponent.css";

export default function AnswerComponent({ aId, aDate, aTime, aDesc }) {
  const clickListener = (event) => {
    switch (event.target.name) {
      case "reportSpam":
        console.log("Report me spam");
        break;
      case "":
        break;
      default:
    }
  };

  return (
    <div className="AnswerComponent">
      <div className="left_block">
        <span>ID: {aId} | </span>
        <span>
          {aDate} {aTime}
        </span>
      </div>

      <div className="align-right">
        <button className="btn_link" name="reportSpam" onClick={clickListener}>
          Report spam
        </button>
      </div>

      <div className="align-left answer_box">
        <div className="answer_desc">{aDesc}</div>
      </div>
    </div>
  );
}
