import { connect } from 'react-redux';
import React from 'react';
import { actionCreator, clickCounter } from './redux/actions';

function App(props) {
  const { countState, dispatch, clicksCounter } = props;

  const dispatchAll = (add = 1) => {
    dispatch(actionCreator(add));
    dispatch(clickCounter());
  };
  return (
    <div>
      <h1>Contador</h1>
      <h2>{ countState }</h2>
      <button onClick={() => dispatch(dispatchAll())}>Incrementa 1</button>
      <button onClick={() => dispatch(dispatchAll(5))}>Incrementa 5</button>
      <h3>Numero de click: { clicksCounter}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCounter: state.clicks
})

export default connect(mapStateToProps)(App);
