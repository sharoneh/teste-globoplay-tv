import React from 'react';
import logoGloboPlay from '../images/globoplay.svg';
import Show from './Show';
import '../styles/Main.scss';
import { highlightNavigation, sidebarNavigation, railNavigation } from '../redux/AppReducer';
import { connect } from 'react-redux';

class Main extends React.Component {
  componentDidMount() {
    this.props.sidebarNavigation()
    this.props.highlightNavigation()
    this.props.railNavigation()
  }

  render() {
    return (
      <main>
        <header>
          <svg height="100" width="200" fill="white">
            <use xlinkHref={`${logoGloboPlay}#logo_globoplay`} />
          </svg>
        </header>

        <Show />
      </main>
    )
  }
}

export default connect(null, { highlightNavigation, sidebarNavigation, railNavigation })(Main)