import { GET_POST, GET_POST_ERROR, GET_POST_SUCCESS } from '../actions/postActions';

export const defaultState = {
    post: {}, // List para almacenar los posts.
    loading: false, // Bolean para identificar estado de 'cargando'
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) { // sentencias case por cada acción, devolviendo el estado al completo junto con los cambios que se hayan realizado.
        case GET_POST:
            return { ...state, loading: true };
        case GET_POST_SUCCESS:
            return { post: action.payload, loading: false };
        case GET_POST_ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}