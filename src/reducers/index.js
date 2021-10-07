import { combineReducers } from 'redux';

/*
Puedes escoger el nombre que quieras para los reducers aunque, 
dado que cada uno gestiona las peticiones a un endpoint de la API que usaremos, 
tiene sentido usar un nombre similar al del endpoint.
*/
import postsReducer from './postsReducer';
import postReducer from './postReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    post: postReducer,
    comments: commentsReducer,
});

export default rootReducer;