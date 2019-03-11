import React from 'react';
interface IAppProps{
  children?:any
}

const Scroll = (props:IAppProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;