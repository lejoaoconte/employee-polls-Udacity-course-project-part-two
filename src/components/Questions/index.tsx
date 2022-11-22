import { useNavigate } from "react-router-dom";

import { QuestionsArea, QuestionsItems } from "./styles";

import { format } from "date-fns";

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
              Created by{" "}
              <span>
                {
                  (
                    Object.values(users)?.find(
                      (user: any) => user.id === question.author
                    ) as any
                  ).name
                }
              </span>
            </p>
            <span className="time">
              {format(new Date(question.timestamp), "MM/dd/yyyy hh:mm a")}
            </span>
          </li>
        ))}
      </QuestionsItems>
    </QuestionsArea>
  );
}
