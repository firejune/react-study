import React from 'react';

module.exports = class extends React.Component {
  render() {
    return (
      <section>
        {this.props.data}
      </section>
    );
  }
};
