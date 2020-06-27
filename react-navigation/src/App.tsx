import React from 'react';
import logo from './logo.svg';
import { UIRouter, UIView} from '@uirouter/react';
import router from './stateManagement/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <UIRouter router={router}>
        <div>
          <UIView></UIView>
        </div>
      </UIRouter>
    </div>
  );
}

export default App;
