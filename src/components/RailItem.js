import React from 'react';
import '../styles/RailItem.scss';
import { FaPlay } from 'react-icons/fa';

const RailItem = ({ category, title, index, show, image }) => {
  const gradient = 'linear-gradient(transparent, rgba(0, 0, 0, 1))'

  return (
    <button
      className="rail-item"
      id={`rail-item-${index}`}
      style= {{
        backgroundImage: `${gradient}, url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
      index={index}
      show={show}
    >
      <span className="category">{category}</span>

      <h3>{title}</h3>

      <div className="overlay">
        <FaPlay />
      </div>
    </button>
  )
}

export default RailItem