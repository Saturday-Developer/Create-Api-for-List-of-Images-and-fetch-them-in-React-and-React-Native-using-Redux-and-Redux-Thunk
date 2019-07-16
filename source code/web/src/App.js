import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import MoviesList from './components/MoviesList';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
     <MoviesList/>
    </div>
    </Provider>
  );
}

export default App;
