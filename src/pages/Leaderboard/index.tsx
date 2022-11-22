import { connect } from "react-redux";
import { LeaderboardContainer, TableBord, UserArea } from "./styles";

function Leaderboard({ users }: any) {
  return (
    <LeaderboardContainer>
      <h1>Users Infos</h1>
      <TableBord>
        <thead>
          <tr>
            <th>User</th>
            <th>Created</th>
            <th>Answered</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(users).map((user: any) => (
            <tr key={user.id}>
              <td>
                <UserArea>
                  <img src={user.avatarURL} alt={user.name} />
                  <span>{user.name}</span>
                </UserArea>
              </td>
              <td>{user.questions.length}</td>
              <td>{Object.values(user.answers).length}</td>
            </tr>
          ))}
        </tbody>
      </TableBord>
    </LeaderboardContainer>
  );
}

function mapStateToProps({ questions, users }: any) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
