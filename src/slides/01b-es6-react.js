// Component code to be transpiled with Babel
import React from 'react';

class ES6Component extends React.Component { // idiomatic ES6 class
  static defaultProps = { text: `I'm an ES6+ component` }
  // ^ default props are just static property of class


  // state is just private property of class
  state = { highlighted: false }


  _onClick = e => {  // lambda; syntactic trick for auto-binding
    this.setState({ highlighted: !this.state.highlighted });
  }

  render(){ // function property shorthand
    return <div
      style={{ backgroundColor: this.state.highlighted && 'pink' }}
      onClick={this._onClick}
    >
      {this.props.text}
    </div>;
  } // no commas! these are methods in a class, not functions in a plain object
}

export default ES6Component; // export and default keywords
