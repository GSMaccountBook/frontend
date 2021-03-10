import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Main,
  MainAccount,
} from './pages';

function App() {

  return (
    <BrowserRouter>
      <Route exact path="/" component={Main}/>
      <Route exact path="/Main-Account" component={MainAccount} />
    </BrowserRouter>
  );
}

export default App;
