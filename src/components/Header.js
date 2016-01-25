import React from 'react';
import HeaderNavItem from './HeaderNavItem';

module.exports = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeNaveItem = this.handleChangeNaveItem.bind(this);
  }

  handleChangeNaveItem(idx) {
    this.props.onChangeNav(idx);

    this.props.nav.forEach((item, i) => {
      this.refs[`item${i}`].setState({selected: i === idx});
    });
  }

  componentDidMount() {
    $(this.refs.test).sortable();
    this.refs.item0.setState({selected: true});
  }

  render() {
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
