import React from 'react';

interface WithoutChildrenProps{
  title: string
}

const WithoutChildren = ({ title }:WithoutChildrenProps) => {
  return (
    <h1>{title}</h1>
  );
}

export default WithoutChildren;
