import React from 'react';
import { CounterProvider } from './organisms/CounterProvider';
import CounterView from './views/CounterView';

const App: React.FC = () => (
  <CounterProvider>
    <CounterView />
  </CounterProvider>
);

export default App;
