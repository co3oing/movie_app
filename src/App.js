import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
    return (
        <HashRouter>
            <Route path="/" /* path props�� ��Ȯ�� /�� ��쿡�� Home ������Ʈ ��� */ exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;