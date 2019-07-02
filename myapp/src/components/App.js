import React from 'react';

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
        {this.state.language}
      </div>
    );
  }
}

export default App;