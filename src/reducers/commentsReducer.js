import { GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_SUCCESS } from '../actions/commentsActions';

export const defaultState = {
    comments: [], // List para almacenar los comments.
    loading: false, // Bolean para identificar estado de 'cargando'
}

export default function commentsReducer(state = defaultState, action) {
    switch (action.type) { // sentencias case por cada acción, devolviendo el estado al completo junto con los cambios que se hayan realizado.
        case GET_COMMENTS:
            return { ...state, loading: true };
        case GET_COMMENTS_SUCCESS:
            return { comments: action.payload, loading: false };
        case GET_COMMENTS_ERROR:
            return { error: action.payload, loading: false }
        default:
            return state;
    }
}