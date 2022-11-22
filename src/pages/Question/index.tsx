import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "redux/actions/questions";

import {
  ButtonsAnswered,
  ButtonsQuestionsArea,
  GraphQuestion,
  GraphQuestionsArea,
  OptionOneRange,
  OptionTwoRange,
  QuestionContainer,
} from "./styles";

function Question({ dispatch, questions, authedUser }: any) {
  const { questionId } = useParams();

  const question: any = Object.values(questions).find(
    (question: any) => question.id === questionId
  );

  const answeredOne = question?.optionOne.votes.includes(authedUser.id);
  const answeredTwo = question?.optionTwo.votes.includes(authedUser.id);

  const aswered = answeredOne || answeredTwo;

  const totalAnswersOne = question?.optionOne?.votes?.length;
  const totalAnswersTwo = question?.optionTwo?.votes?.length;

  const TotalVotes = totalAnswersOne + totalAnswersTwo;

  return (
    <QuestionContainer>
      <h1>Question created by {question?.author}</h1>
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
          <GraphQuestion>
            <OptionOneRange width={(totalAnswersOne / TotalVotes) * 100} />
            <OptionTwoRange width={(totalAnswersTwo / TotalVotes) * 100} />
          </GraphQuestion>
        </GraphQuestionsArea>
      ) : null}
    </QuestionContainer>
  );
}

function mapStateToProps({ questions, authedUser }: any) {
  return {
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
