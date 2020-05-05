import React from 'react';

import logo from './Media/img/logo.png';
import GlobalStyle from './Styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </>
  );
}

export default App;
