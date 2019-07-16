import {combineReducers} from 'redux';
import postReducer from './moviesReducer';

export default combineReducers({
    moviesList:postReducer
});