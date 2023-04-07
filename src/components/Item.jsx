import React from 'react';
import '../styles/Item.css';

export const Item = ({ title }) => {
  return (
    <div className='item-container'>
      <h1 className='item-title'>ID: {title}</h1>
    </div>
  );
};
