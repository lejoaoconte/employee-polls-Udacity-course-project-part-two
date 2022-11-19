import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "redux/actions";

function App(props: any) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default connect()(App);
