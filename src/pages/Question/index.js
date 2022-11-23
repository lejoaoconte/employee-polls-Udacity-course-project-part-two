import React from "react";

import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "redux/actions/questions";

import Error404 from "pages/Error404";

import {
  ButtonsAnswered,
  ButtonsQuestionsArea,
  GraphQuestion,
  GraphQuestionsArea,
  OptionOneRange,
  OptionTwoRange,
  QuestionContainer,
  TotalsArea,
} from "./styles";

function Question({ dispatch, questions, authedUser, users }) {
  const { questionId } = useParams();
  const question = Object.values(questions).find(
    (question) => question.id === questionId
  );

  const answeredOne = question?.optionOne.votes.includes(authedUser.id);
  const answeredTwo = question?.optionTwo.votes.includes(authedUser.id);

  const aswered = answeredOne || answeredTwo;

  const totalAnswersOne = question?.optionOne?.votes?.length;
  const totalAnswersTwo = question?.optionTwo?.votes?.length;

  const TotalVotes = totalAnswersOne + totalAnswersTwo;

  if (question === undefined) return <Error404 />;
  else
    return (
      <QuestionContainer>
        <img
          src={
            Object.values(users)?.find((user) => user.id === question.author)
              ?.avatarURL
          }
          alt="user"
        />
        <h1>Would you rather?</h1>
        <ButtonsQuestionsArea>
          <ButtonsAnswered
            onClick={() => {
              dispatch(handleAnswerQuestion(question?.id, "optionOne"));
            }}
            answeredThis={answeredOne}
            disabled={aswered}
            backgroundColor="#285430"
          >
            1. {question?.optionOne?.text}
          </ButtonsAnswered>
          <ButtonsAnswered
            onClick={() => {
              dispatch(handleAnswerQuestion(question?.id, "optionTwo"));
            }}
            answeredThis={answeredTwo}
            disabled={aswered}
            backgroundColor="#A47E3B"
          >
            2. {question?.optionTwo?.text}
          </ButtonsAnswered>
        </ButtonsQuestionsArea>
        {aswered ? (
          <GraphQuestionsArea>
            <h4>Aswers</h4>
            <TotalsArea>
              <p>
                Votes: {totalAnswersOne}{" "}
                <span>
                  ({((totalAnswersOne / TotalVotes) * 100).toFixed(0)}%)
                </span>
              </p>
              <p>
                Votes: {totalAnswersTwo}{" "}
                <span>
                  ({((totalAnswersTwo / TotalVotes) * 100).toFixed(0)}%)
                </span>
              </p>
            </TotalsArea>
            <GraphQuestion>
              <OptionOneRange width={(totalAnswersOne / TotalVotes) * 100} />
              <OptionTwoRange width={(totalAnswersTwo / TotalVotes) * 100} />
            </GraphQuestion>
          </GraphQuestionsArea>
        ) : null}
      </QuestionContainer>
    );
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(Question);
