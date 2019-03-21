import React from 'react';
import '../styles/Rail.scss';
import RailItem from './RailItem';
import Carousel from 'nuka-carousel';

const Rail = () => {
  const width = document.documentElement.clientWidth;
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
  const railItemWidth = 17 * rem;
  const slidesToShow = Math.floor(width / railItemWidth)

  return (
    <div className="rail">
      <h2>Agora no BBB</h2>

      <div className="rail-content">
        <Carousel
          enableKeyboardControls
          slidesToShow={slidesToShow}
          withoutControls
          width="100vw"
          transitionMode="scroll"
        >
          <RailItem category="Realities" title="Sala de estar" />
          <RailItem category="Realities" title="Varanda" />
          <RailItem category="Realities" title="Piscina" />
          <RailItem category="Realities" title="Academia" />
          <RailItem category="Realities" title="Chuveiro" />
        </Carousel>
      </div>
    </div>
  )
}

export default Rail