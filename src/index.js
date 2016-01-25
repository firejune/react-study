import jQuery from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

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

    this.state = {
      nav: 'Home'
    };

    this.handleChangeNave = this.handleChangeNave.bind(this);
  }

  handleChangeNave(idx) {
    this.setState({
      nav: this.props.nav[idx]
    });
  }

  render() {
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

global.$ = jQuery;
require('jquery-ui/sortable');

const nav = ['Home', 'About', 'Feature', 'Help'];
ReactDOM.render(<Root nav={nav} />, document.getElementById('main'));
