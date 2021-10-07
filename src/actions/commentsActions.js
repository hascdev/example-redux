import axiosClient from "../services/axiosClient";

// Tipos de acción como constantes que contendrán el nombre de cada acción
export const GET_COMMENTS = 'GET_COMMENTS ';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

// Se Combinan los actions creators mediante la siguiente función asíncrona, 
// que usa async/await para obtener los datos de la API
export function getComments(postId) {

    return async (dispatch) => {

        dispatch({ type: GET_COMMENTS });

        try {

            const response = await axiosClient.get(`comments?postId=${postId}`);

            // dispatch() es un método disponible en la store que acepta un objeto como parámetro. 
            // Este método se usa para actualizar el estado de Redux y suele ser el resultado de invocar a un action creator
            // Un action creators es una acción compuesta por un tipo y, opcionalmente, un payload
            dispatch({
                type: GET_COMMENTS_SUCCESS,
                payload: response.data,
            });

        } catch (error) {

            dispatch({
                type: GET_COMMENTS_ERROR,
                payload: error
            });
        }
    }
}