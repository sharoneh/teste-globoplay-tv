import React from 'react';
import '../styles/Show.scss';
import Rail from './Rail';
import Highlight from './Highlight';

const Show = () => {
  return (
    <div className="show">
      <Highlight />

      <Rail />
    </div>
  )
}

export default Show