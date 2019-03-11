import React, {Component} from 'react';
interface IAppState{
  hasError:boolean
}

interface IAppProps{
}

export default class ErrorBoundary extends Component<IAppProps, IAppState> {
    constructor(props:object) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error:string|null) {
      // Update state so the next render will show the fallback UI.
      console.log("There was an error", error)
      return { hasError: true };
    
    }
  
    componentDidCatch(error:any, info:any){
      // You can also log the error to an error reporting service
      console.log("There was an error", error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
  