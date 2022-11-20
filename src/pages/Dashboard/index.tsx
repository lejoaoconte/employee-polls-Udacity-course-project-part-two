import { connect } from "react-redux";

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}


export default connect()(Dashboard)