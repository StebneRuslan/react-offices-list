import React from 'react';
import { Component } from 'react';

interface Title {
  color: string,
  link?: string
}

export class CustomTitle extends Component<Title, any> {
  render() {
    return (
      <a href={ this.props.link }>{ this.props.children }</a>
    );
  }
}