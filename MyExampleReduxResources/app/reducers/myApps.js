import {
    LOGIN,
    REGISTER,
    ALL_USERS,
} from '../constants/actionTypes'

import Resource from '../resources/resource';

const initialState = [
    
]

export default function myApps(state = initialState, action) {
    // console.log('Resource Class + ',Resource)
    switch (action.type) {
        case LOGIN:
            console.log("Action Type : "+ JSON.stringify(action));
            console.log("state : "+ JSON.stringify(state));
            Resource.postLoginResource('http://api.cwndev.manaodev.company.manaosoftware.com/token',action.username,action.password)
            .then((response) => {
                console.log("response", response); 
                return state
            })
        default:
            return state
    }
}