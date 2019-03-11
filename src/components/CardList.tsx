import React from 'react';
import Card from './Card';
interface IAppProps {
  robots:any[]
}

const CardList = ({ robots }:IAppProps) => {
  return (
    <div>
      {
        robots.map((user:string, i:number) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;