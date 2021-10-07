import React from 'react';
import { render } from 'react-dom';

// applyMiddleware nos permitirá usar middleware con Redux.
import { createStore, applyMiddleware } from 'redux';

// Provider permitirá incluir el componente App en su interior, de modo que podamos usar Redux con cualquier componente de la aplicación.
import { Provider } from 'react-redux';

// thunk es un middleware que nos permitirá crear acciones asíncronas en Redux
import thunk from 'redux-thunk';

// composeWithDevTools es una funcion para poder inspeccionar los estados de Redux, conectando la aplicación con la extensión Redux DevTools.
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer es el conjunto de reducers
import rootReducer from './reducers';

// componente React principal
import App from './App';

// estilo css Bootstrap
import './index.css';

// función que nos permitirá crear la store de Redux, que es el componente encargado de mantener el estado de Redux en su interior.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);