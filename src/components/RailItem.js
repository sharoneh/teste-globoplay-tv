import React from 'react';
import '../styles/RailItem.scss';

const RailItem = ({ category, title, index }) => {
  return (
    <button
      className="rail-item"
      index={index}
      id={`rail-item-${index}`}
    >
      <span className="category">{category}</span>

      <h3>{title}</h3>
    </button>
  )
}

export default RailItem