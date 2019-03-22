import React from 'react';
import '../styles/Rail.scss';
import RailItem from './RailItem';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';

const Rail = ({ railItems }) => {
  const width = document.documentElement.clientWidth;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const railItemWidth = 17 * rem;
  const slidesToShow = Math.floor(width / railItemWidth)

  return (
    <div className="rail" id="rail">
      <h2>Agora no BBB</h2>

      <div className="rail-content">
        <Carousel
          // enableKeyboardControls
          slidesToShow={slidesToShow}
          withoutControls
          width="100vw"
          transitionMode="scroll"
        >
          {railItems.map((item, index) => (
            <RailItem
              { ...item }
              key={`railItem#${index}`}
              index={index}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { railItems } = state
  return { railItems }
}

export default connect(mapStateToProps, {})(Rail)