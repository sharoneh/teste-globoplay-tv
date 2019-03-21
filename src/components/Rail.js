import React from 'react';
import '../styles/Rail.scss';
import RailItem from './RailItem';

const Rail = () => {
  return (
    <div className="rail">
      <h2>Agora no BBB</h2>

      <div className="rail-content">
        <RailItem />
        <RailItem />
        <RailItem />
      </div>
    </div>
  )
}

export default Rail