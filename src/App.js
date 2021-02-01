import React from 'react';
import { LoggedInProvider } from './contexts/LoggedIn';
import RouteSwitch from './RouteSwitch';

import './App.css';

const App = () => {
  return (
    <LoggedInProvider>
      <RouteSwitch />
    </LoggedInProvider>
  );
};

export default App;
