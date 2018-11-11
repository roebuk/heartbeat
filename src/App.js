import React, { Fragment } from 'react';
import { withHandlers, withReducer } from 'recompose'
import './App.css';
import compose from 'ramda/src/compose';
import heart from './images/like.svg'

import HeartRate from './heart-rate-union';
import reducer from './reducer';
import requestBluetooth from './bluetooth';
import { requestedHeartRate } from './action-creators';

const initialState = {
  heartRate: HeartRate.NotRequested,
};

const Beating = ({ beats }) =>
  <Fragment>
    <img className="heart-img" alt="heart" src={heart} />
    <span className="heart-text">
      {beats}
    </span>
  </Fragment>


const PureApp = ({ appState, dispatch, handleClick }) => (
  <div className="App">
    <div className="heart">
      {appState.heartRate.cata({
        NotRequested: () => <button className="button" onClick={handleClick}>Request Bluetooth</button>,
        Requested: () => <p>Awaiting Heart Rate...</p>,
        Beating: beats => <Beating beats={beats} />,
        Error: errorMessage => <p>{errorMessage}</p>
      })}
    </div>
  </div>
);

const App = compose(
  withReducer('appState', 'dispatch', reducer, initialState),
  withHandlers({
    'handleClick': props => event => {
      const { dispatch } = props
      dispatch(requestedHeartRate())
      requestBluetooth(dispatch)
    }
  })
)(PureApp)

export default App;
