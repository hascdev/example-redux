import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_ERROR } from '../actions/postsActions';

export const defaultState = {
    posts: [], // List para almacenar los posts.
    loading: false, // Bolean para identificar estado de 'cargando'
}

export default function postsReducer(state = defaultState, action) {
    /*
     Switch con sentencias case por cada acción, 
     devolviendo el estado al completo junto con los cambios que se hayan realizado.
    */
    switch (action.type) { 
        case GET_POSTS:
            return { ...state, loading: true };
        case GET_POSTS_SUCCESS:
            return { ...state, posts: action.payload, loading: false };
        case GET_POSTS_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
}