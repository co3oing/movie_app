import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
    /* Link, Router ������Ʈ�� �ݵ�� HashRouter �ȿ� ���ԵǾ�� �Ѵ�. */
    return (
        <HashRouter>
            <Navigation /> 
            <Route path="/" /* path props�� ��Ȯ�� /�� ��쿡�� Home ������Ʈ ��� */ exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
        </HashRouter>
    );
}

export default App;