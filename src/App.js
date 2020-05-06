import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import SearchBox from './Components/SearchBox';
import UserCard from './Components/UserCard';
import logo from './Media/img/logo.png';
import { reducer } from './store/ducks/github';
import GlobalStyle from './Styles';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <Provider store={store}>
        <SearchBox />
        <div className="CardsContainer">
          <div className="CardUserContainer">
            <UserCard />
          </div>
          <div className="CardRepositorieContainer" />
        </div>
      </Provider>
    </>
  );
}

export default App;
