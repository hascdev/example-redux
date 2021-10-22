import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../components/forms/PostForm';

import { addPost } from '../actions/postActions';

const NewPostPage = () => {

    const [showAlert, setShowAlert] = useState(false);

    /**
     * useDispatch y useSelector son React-Redux Hooks que permiten conectarse al store
     * Recordar en el store se alamacenan todos los estados.
     */

    // useDispatch devuelve una referencia al dispatch del store. 
    // Se utiliza para ejecutar acciones según sea necesario.
    const dispatch = useDispatch();

    // useSelector toma un argumento de función que devuelve la parte del estado que desea. 
    // El estado post dentro de useSelector está declarado en el reducer index.js
    const postState = useSelector(state => state.post);

    const onSubmit = (values, { setSubmitting, resetForm }) => {

        console.log(values);
        const body = JSON.stringify({
            title: 'Example',
            body: values.mensaje,
            userId: 1,
        });

        // Ejecutamos la acción de crear post
        dispatch(addPost(body)).then(() => {
            setSubmitting(true);
            resetForm();
            console.log(postState);
            setShowAlert(true);
        });
    }

    return (
        <div className="container">

            <h2>Nuevo Post</h2>

            <div className={showAlert ? "alert alert-success alert-dismissible fade show" : "alert alert-success alert-dismissible fade hide"} role="alert">
                <strong>Genial!</strong> Tu post se ha creado correctamente.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => { setShowAlert(false) }}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <PostForm onSubmit={onSubmit} />
        </div>
    )
}

export default NewPostPage;