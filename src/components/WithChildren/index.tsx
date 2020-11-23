import React, { PropsWithChildren } from 'react';

interface WithChildrenProps{
  title? : string
}

const WithChildren = ({title = 'Sou um defaultProps', children}:PropsWithChildren<WithChildrenProps>) =>{
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default WithChildren