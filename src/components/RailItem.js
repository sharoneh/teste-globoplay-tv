import React from 'react';
import '../styles/RailItem.scss';

const RailItem = ({ category, title }) => {
  return (
    <button className="rail-item">
      <span className="category">{category}</span>

      <h3>{title}</h3>
    </button>
  )
}

export default RailItem