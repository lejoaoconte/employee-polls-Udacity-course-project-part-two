import { useNavigate } from "react-router-dom";
import { QuestionsArea, QuestionsItems } from "./styles";

export function Questions({ questions, users }: any) {
  const navigate = useNavigate();

  function handleClick(questionId: string) {
    navigate(`/question/${questionId}`);
  }
  return (
    <QuestionsArea>
      <QuestionsItems>
        {questions.map((question: any) => (
          <li key={question.id} onClick={() => handleClick(question.id)}>
            <img src={users[question.author].avatarURL} alt="aa" />
            <p>
              Created by <span>{question.author}</span>
            </p>
          </li>
        ))}
      </QuestionsItems>
    </QuestionsArea>
  );
}
