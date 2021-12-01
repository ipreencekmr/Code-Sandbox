import AnswerComponent from "./AnswerComponent";

export default function AnswerListComponent({ answers }) {
  return (
    <div className="AnswerListComponent">
      {answers.map((item, index) => {
        return (
          <AnswerComponent
            key={index}
            aId={item.reply_id}
            aDate={item.date}
            aTime={item.time}
            aDesc={item.reply_desc}
          />
        );
      })}
    </div>
  );
}
