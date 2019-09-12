import React from 'react';

class  Header extends React.Component {
  render() { 
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">0f</span>
            <span className="the">the</span>
          </span>
          day
        </h1>
        <h3 className="tagline">
          <span>Freash Seafood Market</span>
        </h3>
      </header>
    );
  }
}
 
export default Header