
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPost } from '../actions/postActions'
import { Post } from '../components/Post';

import { getComments } from '../actions/commentsActions'
import { Comment } from '../components/Comment';

const PostPage = ({ match }) => {

    // useDispatch y useSelector son React-Redux Hooks que permiten conectarse al store

    // useDispatch devuelve una referencia al dispatch del store. 
    // Se utiliza para ejecutar acciones según sea necesario.
    const dispatch = useDispatch();

    // useSelector toma un argumento de función que devuelve la parte del estado que desea. 
    // El estado post dentro de useSelector está declarado en el reducer index.js
    const postState = useSelector(state => state.post);
    const commentsState = useSelector(state => state.comments);

    useEffect(() => {

        const { postId } = match.params;
        // Ejecutamos la acción de obtener post desde API
        dispatch(getPost(postId));
        // Ejecutamos la acción de obtener comentarios desde API
        dispatch(getComments(postId));

    }, [dispatch, match]);

    return (
        <div className="container">
            { postState.loading ? "Loading..." : postState.error ? postState.error.message : <Post post={postState.post} resumen={false} /> }
            <h2>Comentarios</h2>
            { commentsState.loading ? "Loading..." : commentsState.error ? commentsState.error.message : commentsState.comments.map(comment => <Comment key={comment.id} comment={comment} />) }
        </div>
    )
}

export default PostPage;