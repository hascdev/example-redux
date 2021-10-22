import axiosClient from "../services/axiosClient";

// Tipos de acción como constantes que contendrán el nombre de cada acción
export const GET_POST = 'GET_POST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_ERROR = 'ADD_POST_ERROR';

// Se Combinan los actions creators mediante la siguiente función asíncrona, 
// que usa async/await para obtener los datos de la API
export function getPost(postId) {

    return async dispatch => {

        dispatch({ type: GET_POST });

        try {
            
            const response = await axiosClient.get(`posts/${postId}`);

            // dispatch() es un método disponible en la store que acepta un objeto como parámetro. 
            // Este método se usa para actualizar el estado de Redux y suele ser el resultado de invocar a un action creator
            // Un action creators es una acción compuesta por un tipo y, opcionalmente, un payload
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response.data,
            });

        } catch (error) {

            dispatch({
                type: GET_POST_ERROR,
                payload: error,
            });
        }
    }
}

export function addPost(post) {

    return async dispatch => {

        dispatch({ type: ADD_POST });

        try {
            
            const response = await axiosClient.post('posts', post);

            // dispatch() es un método disponible en la store que acepta un objeto como parámetro. 
            // Este método se usa para actualizar el estado de Redux y suele ser el resultado de invocar a un action creator
            // Un action creators es una acción compuesta por un tipo y, opcionalmente, un payload
            dispatch({
                type: ADD_POST_SUCCESS,
                payload: response.data,
            });

        } catch (error) {

            dispatch({
                type: ADD_POST_ERROR,
                payload: error,
            });
        }
    }
}