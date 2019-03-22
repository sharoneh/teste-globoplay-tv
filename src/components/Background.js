import React from 'react';
import '../styles/Background.scss';
import { connect } from 'react-redux';

class Background extends React.Component {
  render() {
    return (
      <div className={`background${this.props.fade ? ' fade' : ''}`}
        style={{
          backgroundImage: `url('${this.props.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { image, fade } = state.background
  return { image, fade }
}

export default connect(mapStateToProps)(Background)