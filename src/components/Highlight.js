import React from 'react';
import logoBbb from '../images/logo-bbb.png';
import { connect } from 'react-redux';
import '../styles/Highlight.scss';
import { highlightNavigation } from '../redux/AppReducer';
import { FaPlay } from 'react-icons/fa';

class Highlight extends React.Component {
  componentDidUpdate() {
    if (this.props.highlighted === 'headline') {
      this.props.highlightNavigation()
    }
  }

  render() {
    if (this.props.highlighted === 'rail') {
      return (
        <div className="highlight rail-item">
          <h1>{this.props.focusedRailItem.show}</h1>
  
          <h2>{this.props.focusedRailItem.title}</h2>
        </div>
      )
    }
    
    return (
      <div className="highlight">
        <div id="headline">
          <img className="logo" src={logoBbb} alt="Big Brother Brasil"/>
            
          <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
    
          <div className="actions">
            <button>
              <FaPlay />
              Assista
            </button>
            
            <button>Veja mais</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { highlighted, focusedRailItem } = state
  return { highlighted, focusedRailItem }
}

export default connect(mapStateToProps, { highlightNavigation })(Highlight)