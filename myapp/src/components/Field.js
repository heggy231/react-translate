import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// class based component
class Field extends React.Component {
  // hook context object to class component
  static contextType = LanguageContext;
  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;