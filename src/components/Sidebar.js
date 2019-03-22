import React from 'react';
import '../styles/Sidebar.scss';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <ul>
          {this.props.sidebarItems.map((item, index) => (
            <Button
              { ...item }
              key={`sidebarItem#${index}`}
              index={index}
            />
          ))}
        </ul>
      </aside>
    )
  }
}

const Button = ({ label, icon, index, ...props }) => {
  return (
    <li>
      <button
        className="sidebar-item"
        index={index}
        id={`sidebar-item-${index}`}
        { ...props }
      >
        {icon || null}
        <span>{label}</span>
      </button>
    </li>
  )
}

const mapStateToProps = state => {
  const { sidebarItems } = state
  return { sidebarItems }
}

export default connect(mapStateToProps, {})(Sidebar)