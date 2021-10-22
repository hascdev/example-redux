import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Menu } from './components/Menu';

import MainPage from './pages/MainPage';
import NewPostPage from './pages/NewPostPage';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';

const App = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/new-post" component={NewPostPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/posts/:postId" component={PostPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App;