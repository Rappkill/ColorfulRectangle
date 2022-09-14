import React from 'react';
import './App.css';
import { BoxEdit } from './components/BoxEdit';
import { BoxInserter } from './components/BoxInsert';
import { BoxList } from './components/BoxList';

function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <div className="inserter-wrapper">
        <BoxInserter />
        <BoxEdit />
      </div>
      <BoxList />
    </div>
  );
}

export default App;
