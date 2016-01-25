'use strict';

const jQuery = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./components/Header');
const Content = require('./components/Content');
const Footer = require('./components/Footer');

/*
- Root
 - Header
   - HeaderNavItem
 - Content
 - Footer
*/

class Root extends React.Component {
  constructor(props) {
    super(props);
    console.log('Root.constructor', {props: this.props, state: this.state});

    this.state = {
      nav: 'Home'
    };

    this.handleChangeNave = this.handleChangeNave.bind(this);
  }

  componentDidMount() {
    console.log('Root.componentDidMount', {props: this.props, state: this.state});
    setTimeout(() => {
      this.setState({nav: 'About'});
    }, 100);
  }

  handleChangeNave(idx) {
    this.setState({
      nav: this.props.nav[idx]
    });
  }

  render() {
    console.log('Root.render', {props: this.props, state: this.state});

    return (
      <div>
        <Header
          nav={this.props.nav}
          onChangeNav={this.handleChangeNave}
        />
        <Content data={this.state.nav} />
        <Footer />
      </div>
    );
  }
}

Root.defaultProps = {
  nav: ['Home', 'About', 'Feature', 'Help']
};

Root.propTypes = {
  nav: React.PropTypes.array
};

global.$ = jQuery;
require('jquery-ui/sortable');

ReactDOM.render(<Root />, document.getElementById('main'));
