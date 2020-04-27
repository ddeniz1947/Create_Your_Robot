import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddRobot from './addrobot';
import { setAddRobots, setClickRobots } from './actions'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const mapStateToProps = state => {
  return {
    deneme: state.addRobotsImgReducer.deneme,
    arr: state.clickRobotsReducer.arr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    denemeFunc: (event) => dispatch(setAddRobots(event.target.value)),
    addRobots: (deneme) => dispatch(setClickRobots(deneme))
  }
}

class App extends Component {

  render() {
    const { denemeFunc, addRobots } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h3>ADD YOUR ROBOT</h3>
          <input type="text" onChange={denemeFunc}></input>
          <br/>
          <button className='btn btn-danger' type="submit" onClick={() => addRobots(this.props.deneme)}>ADD ROBOT</button>

          <AddRobot addRobotName={this.props.arr} />

        </header>
      </div>
    );
  }


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
