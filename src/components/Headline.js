import React from 'react';
import logoBbb from '../images/logo-bbb.png';
import '../styles/Headline.scss';
import Rail from './Rail';

const Headline = () => {
  return (
    <div className="headline">
      <img className="logo" src={logoBbb} alt="Big Brother Brasil"/>
      
      <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>

      <div className="actions">
        <button>Assista</button>
        
        <button>Veja mais</button>
      </div>

      <Rail />
    </div>
  )
}

export default Headline