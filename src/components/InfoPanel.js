import React, { Component } from 'react';

class InfoPanel extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
      return <div>{this.props.selection}</div>;
    }
  }

export default InfoPanel