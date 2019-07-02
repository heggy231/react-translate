import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
  state = { 
    language: 'english' 
  };

  onLanguageChange = language => {
    // abbreviate since key, value the same
    this.setState({ language });
  }; 

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        {/* this is where english or dutch is rendered */}
        {/* LanguageContext.Provider is how you update value of LanguageContext dynamically as user clicks */}
        {/* 1. Provider pipe data from state data */}
        <LanguageContext.Provider value={this.state.language} >
          <UserCreate />
        </LanguageContext.Provider>

        {/* 2. Provider pipe data with static value dutch */}
        <LanguageContext.Provider value="dutch" >
          <UserCreate />
        </LanguageContext.Provider>

        {/* 3. Get data from State default value with no provider attached*/}
        <UserCreate />
      </div>
    );
  }
}

export default App;