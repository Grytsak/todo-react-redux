import { NEW_TASK } from '../actions/types';

const initialState = {
    todos: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}