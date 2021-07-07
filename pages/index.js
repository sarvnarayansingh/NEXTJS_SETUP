
import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../Redux/Actions/ActionCreator/GlobalAction';

const Home = (props) => {
  useEffect(() => {
    props.getTicketDetailAction();
  }, []);
  return (
    <div>
      <h2>hellooooooo</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state.globalData);
  return {
    globalData: state.globalData.globalStore
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTicketDetailAction: (payload) => dispatch(actionCreator.getTicketDetailAction(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
