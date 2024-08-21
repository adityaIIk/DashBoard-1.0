import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Dashboard />
    </Provider>
  );
}

export default App;
