import axiosClient from "../services/axiosClient";

// Tipos de acción como constantes que contendrán el nombre de cada acción
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

// Se Combinan los actions creators mediante la siguiente función asíncrona, 
// que usa async/await para obtener los datos de la API
export function getPosts() {

    return async (dispatch) => {

        dispatch({ type: GET_POSTS });

        try {

            const response = await axiosClient.get('posts');

            // dispatch() es un método disponible en la store que acepta un objeto como parámetro. 
            // Este método se usa para actualizar el estado de Redux y suele ser el resultado de invocar a un action creator
            // Un action creators es una acción compuesta por un tipo y, opcionalmente, un payload
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: response.data,
            });

        } catch (error) {

            dispatch({
                type: GET_POSTS_ERROR,
                payload: error
            });
        }
    }
}