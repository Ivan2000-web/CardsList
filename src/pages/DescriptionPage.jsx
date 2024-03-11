import React from 'react';
import { useParams } from 'react-router-dom';

const DescriptionPage = () => {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Description Page</h1>
      <p>Select item id = {id}</p>
    </div>
  );
};

export default DescriptionPage;
