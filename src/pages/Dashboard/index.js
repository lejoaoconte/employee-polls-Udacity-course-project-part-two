import React, { useEffect } from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { ContainerDashboard, TitleDashboard } from "./styles";

import { Questions } from "components/Questions";

export function Dashboard({ authedUser, questions, users }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authedUser) navigate("/");
  }, [authedUser, navigate]);

  const aswered = questions.filter(
    (question) =>
      question.optionOne.votes.includes(authedUser.id) ||
      question.optionTwo.votes.includes(authedUser.id)
  );

  const unaswered = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser.id) &&
      !question.optionTwo.votes.includes(authedUser.id)
  );

  return (
    <ContainerDashboard>
      <TitleDashboard>New Questions</TitleDashboard>
      <Questions questions={unaswered} users={users} />
      <TitleDashboard>Answered Questions</TitleDashboard>
      <Questions questions={aswered} users={users} />
    </ContainerDashboard>
  );
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions: Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
    ),
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
