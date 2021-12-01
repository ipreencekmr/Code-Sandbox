import "./AnswerComponent.css";

export default function AnswerComponent({ aId, aDate, aTime, aDesc }) {
  const clickListener = () => {
    console.log("Report me spam");
  };

  return (
    <div className="AnswerComponent">
      <div>{aId}</div>
      <div>{aDate}</div>
      <div>{aTime}</div>
      <div>{aDesc}</div>
      <button onClick={clickListener}>Report spam</button>
    </div>
  );
}
