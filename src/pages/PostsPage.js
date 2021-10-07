
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/postsActions'
import { Post } from '../components/Post';

const PostsPage = () => {

    // useDispatch y useSelector son React-Redux Hooks que permiten conectarse al store

    // useDispatch devuelve una referencia al dispatch del store. 
    // Se utiliza para ejecutar acciones según sea necesario.
    const dispatch = useDispatch();

    // useSelector toma un argumento de función que devuelve la parte del estado que desea. 
    // El estado posts dentro de useSelector está declarado en el reducer index.js
    const { loading, posts, error } = useSelector(state => state.posts);

    useEffect(() => {

        // Ejecutamos la acción de obtener posts desde API
        dispatch(getPosts());

    }, [dispatch]);

    return (
        <div className="container">
            <h1 className="mb-4">Posts</h1>
            <hr />
            {loading ? "Loading..." : error ? error.message : posts.map(post => <Post key={post.id} post={post} resumen={true} />)}
        </div>
    )
}

export default PostsPage;