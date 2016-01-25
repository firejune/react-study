'use strict';

const React = require('react');
const HeaderNavItem = require('./HeaderNavItem');

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    console.log('Header.constructor', {props: this.props, state: this.state});
    this.handleChangeNaveItem = this.handleChangeNaveItem.bind(this);
  }

  handleChangeNaveItem(idx) {
    this.props.onChangeNav(idx);

    this.props.nav.forEach((item, i) => {
      this.refs[`item${i}`].setState({selected: i === idx});
    });
  }

  componentDidMount() {
    console.log('Header.componentDidMount', {props: this.props, state: this.state});
    $(this.refs.test).sortable();
    this.refs.item0.setState({selected: true});
  }

  componentWillReceiveProps(props) {
    if (this.props.nav === props.nav) {
      //
    }
    console.log('Header.componentWillReceiveProps', {props: this.props, state: this.state});
    //
  }

  render() {
    console.log('Header.render', {props: this.props, state: this.state});
    return (
      <header>
        <ul ref="test">
        {
          this.props.nav.map((item, idx) => (
              <HeaderNavItem
                ref={`item${idx}`}
                key={idx}
                idx={idx}
                title={item}
                onChangeNav={this.handleChangeNaveItem}
              />
          ))
        }
        </ul>
      </header>
    );
  }
};
