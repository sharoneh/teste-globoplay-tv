import React from 'react';
import logoGloboPlay from '../images/globoplay.svg';
import Headline from './Headline';
import Rail from './Rail';
import '../styles/Main.scss';

const Main = () => {
  return (
    <main>
      <header>
        <svg height="100" width="200" fill="white">
          <use xlinkHref={`${logoGloboPlay}#logo_globoplay`} />
        </svg>
      </header>

      <Headline />

      <Rail />
    </main>
  )
}

export default Main