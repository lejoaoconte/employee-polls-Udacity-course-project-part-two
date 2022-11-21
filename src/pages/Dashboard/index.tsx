import { connect } from "react-redux";
import { ContainerDashboard, TitleDashboard } from "./styles";
import { Questions } from "components/Questions";


export function Dashboard({ authedUser, questions, users }: any) {
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
      <TitleDashboard>Unaswered</TitleDashboard>
      <Questions questions={unaswered} users={users} />
      <TitleDashboard>Aswered</TitleDashboard>
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
