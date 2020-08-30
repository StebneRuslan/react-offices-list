import React from 'react';
import { Component } from 'react'

interface Button {
  withAnimation: boolean;
  color: string;
  backgroundColor: string
}

export class CustomButton<Button> extends Component<Button> {
  render() {
    return (
      <button>
        { this.props.children }
      </button>
    );
  }
}