import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { isPending } from 'q';

export interface IRobot{
  name:string,
  email:string,
  id:number

}
interface IAppState{
robots: Array<IRobot>,
searchfield: string
}


interface IAppProps {
  onRequestRobot:() => void,
  searchfield:string,
  onSearchChange: (event:any) => void,
  robots:any[],
  isPending:boolean

}

export default class MainPage extends Component<IAppProps, IAppState> {

  componentDidMount() {
   this.props.onRequestRobot();
  }
 
  filteredRobots = () =>{
    return this.props.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase());
      })
  }

  render() {
    const {searchfield, onSearchChange, robots, isPending}  = this.props; 
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots={this.filteredRobots()} />
            </Scroll>
          </ErrorBoundary>
         
        </div>
      );
  }
}