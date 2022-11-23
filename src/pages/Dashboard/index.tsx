import React, { useEffect } from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { ContainerDashboard, TitleDashboard } from "./styles";

import { Questions } from "components/Questions";

export function Dashboard({ authedUser, questions, users }: any) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!authedUser) navigate("/");
  }, [authedUser, navigate]);

  const aswered = questions.filter(
    (question: any) =>
      question.optionOne.votes.includes(authedUser.id) ||
      question.optionTwo.votes.includes(authedUser.id)
  );

  const unaswered = questions.filter(
    (question: any) =>
      !question.optionOne.votes.includes(authedUser.id) &&
      !question.optionTwo.votes.includes(authedUser.id)
  );

  return (
    <ContainerDashboard>
      <TitleDashboard>New Questions</TitleDashboard>
      <Questions questions={unaswered} users={users} />
      <TitleDashboard>Aswered Questions</TitleDashboard>
      <Questions questions={aswered} users={users} />
    </ContainerDashboard>
  );
}

function mapStateToProps({ authedUser, questions, users }: any) {
  return {
    authedUser,
    questions: Object.values(questions).sort(
      (a: any, b: any) => b.timestamp - a.timestamp
    ),
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
