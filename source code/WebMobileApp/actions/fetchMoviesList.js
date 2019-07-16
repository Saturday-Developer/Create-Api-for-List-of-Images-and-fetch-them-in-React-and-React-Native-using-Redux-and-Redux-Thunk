import {FETCH_LIST} from './types';

export const movies=()=>dispatch=>{
  
        fetch('http://YOUR_LOCAL_IP_ADDRESS:1234/')
        .then(res=>res.json())
        .then(posts=>dispatch({
            type:FETCH_LIST,
            payload:posts
        }));
    
}
