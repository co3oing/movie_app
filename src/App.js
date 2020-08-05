import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
    /* Link, Router ������Ʈ�� �ݵ�� HashRouter �ȿ� ���ԵǾ�� �Ѵ�. */
    return (
        <HashRouter>
            <Navigation /> 
            <Route path="/" /* path props�� ��Ȯ�� /�� ��쿡�� Home ������Ʈ ��� */ exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;