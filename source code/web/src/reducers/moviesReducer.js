import {FETCH_LIST} from '../actions/types';

const initialState ={
    items:[],
    }


export default function(state=initialState,action){
    switch(action.type){
        case FETCH_LIST:
            return{
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}