import QuestionComponent from "./QuestionComponent";

export default function QuestionListComponent({ questions }) {
  return (
    <div className="QuestionListComponent">
      {questions.map((item, index) => {
        return (
          <QuestionComponent
            key={index}
            qId={item.question_id}
            qDate={item.date}
            qTime={item.time}
            qTopic={item.topic_desc}
            qDesc={item.question_desc}
            qAnswers={item.replies}
          />
        );
      })}
    </div>
  );
}
