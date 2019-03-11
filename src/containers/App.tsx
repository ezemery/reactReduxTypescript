import React, { Component } from 'react';
import {connect}  from 'react-redux';
import { changeSearchField, requestRobots} from '../action';
import './App.css';
import MainPage from '../components/MainPage';

interface IAppState {
  searchRobots:{searchField:string},
  requestRobots:{robots:any[],isPending: boolean,error: object}
}
interface IAppProps{
  onRequestRobot:()=>void,
  searchfield:string,
  onSearchChange: (event:any)=>void,
  robots:any[],
  isPending:boolean

}

const mapStateToProp = (state:IAppState) => {
  return {
    searchfield: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  }

}

const mapDispatchToProp = (dispatch:any) => {
  return {
    onSearchChange: (event:any) => dispatch(changeSearchField(event.target.value)),
    onRequestRobot : () => dispatch(requestRobots())
  }
}


class App extends Component<IAppProps,IAppState> {
  render() {
   return <MainPage {...this.props} ></MainPage>
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);