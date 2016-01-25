'use strict';

const React = require('react');

class HeaderNavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };

    this.handleClickNavItem = this.handleClickNavItem.bind(this);
  }

  handleClickNavItem() {
    this.props.onChangeNav(this.props.idx);
  }

  render() {
    const selectedStyle = {
      backgroundColor: '#000',
      color: '#fff'
    };

    return (
      <li
        style={this.state.selected ? selectedStyle : {}}
        onClick={this.handleClickNavItem}
      >
        {this.props.title}
      </li>
    );
  }
};

module.exports = HeaderNavItem;
