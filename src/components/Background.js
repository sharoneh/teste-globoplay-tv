import React from 'react';
import '../styles/Background.scss';
import highlightBg from '../images/tiago-leifert-o-bbb19.jpg';
import { connect } from 'react-redux';

const Background = ({ image }) => {
  return (
    <div className="background"
      style={{
        backgroundImage: `url('${image || highlightBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
    ></div>
  )
}

const mapStateToProps = state => {
  const { image } = state.focusedRailItem
  return { image }
}

export default connect(mapStateToProps)(Background)