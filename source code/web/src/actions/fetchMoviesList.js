import {FETCH_LIST} from './types';

export const movies=()=>dispatch=>{
   
  
        fetch('http://localhost:1234/')
        .then(res=>res.json())
        .then(posts=>dispatch({
            type:FETCH_LIST,
            payload:posts
        }));
    
}