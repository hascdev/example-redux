import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Inicio</h1>
                <p>Esta es la página de inicio!</p>

                <Link to="/new-post" className="btn btn-primary mr-2">
                    Nuevo Post
                </Link>
                <Link to="/posts" className="btn btn-primary">
                    Ver Posts
                </Link>
            </div>
        </div>
    </div>
);

export default MainPage;