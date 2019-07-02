import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // 1. stitch up context object to class component
  //  static contextType = <name of Context file>;
  static contextType = LanguageContext;

  render() {
    // confirm if context is set right. I see English on screen
    console.log(this.context);
    return <button className="ui button primary">Submit</button>
  }
}

export default Button;