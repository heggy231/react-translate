import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

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
        {/* Provider pipe data from state data */}

        <ColorContext.Provider value="green">
          <LanguageContext.Provider value={this.state.language} >
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;