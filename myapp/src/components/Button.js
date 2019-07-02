import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // 1. stitch up context object to class component
  //  static contextType = <name of Context file>;
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">Submit</button>
  }
}
// or 2. after create class you then write out the class.  <Class Name>.contextType = LanguageContext;
Button.contextType = LanguageContext;

export default Button;