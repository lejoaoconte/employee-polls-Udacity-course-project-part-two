import React from "react";

import { useNavigate } from "react-router-dom";

import { QuestionsArea, QuestionsItems } from "./styles";

import { format } from "date-fns";

export function Questions({ questions, users }) {
  const navigate = useNavigate();

  function handleClick(questionId) {
    navigate(`/question/${questionId}`);
  }

  return (
    <QuestionsArea data-testid="questions-test">
      <QuestionsItems>
        {questions?.map((question) => (
          <li
            data-testid="questions-item-test"
            key={question.id}
            onClick={() => handleClick(question.id)}
          >
            <img src={users[question.author]?.avatarURL} alt="user" />
            <p>
              Created by{" "}
              <span>
                {
                  Object.values(users)?.find(
                    (user) => user.id === question.author
                  )?.name
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
