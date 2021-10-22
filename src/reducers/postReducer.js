import { GET_POST, GET_POST_ERROR, GET_POST_SUCCESS, ADD_POST, ADD_POST_ERROR, ADD_POST_SUCCESS } from '../actions/postActions';

export const defaultState = {
    post: {}, // Object para almacenar el post.
    loading: false, // Bolean para identificar estado de 'cargando'
}

export default function postReducer(state = defaultState, action) {
    /*
     Switch con sentencias case por cada acción, 
     devolviendo el estado al completo junto con los cambios que se hayan realizado.
    */
    switch (action.type) { 
        case GET_POST:
            return { ...state, loading: true };
        case GET_POST_SUCCESS:
            return { ...state, post: action.payload, loading: false };
        case GET_POST_ERROR:
            return { ...state, error: action.payload, loading: false };
        case ADD_POST:
            return { ...state, loading: true };
        case ADD_POST_SUCCESS:
            return { ...state, post: action.payload, loading: false };
        case ADD_POST_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}