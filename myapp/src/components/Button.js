import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // 1. stitch up context object to class component
  //  static contextType = <name of Context file>;
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>
  }
}

export default Button;