import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
    return (
        <HashRouter>
            <Route path="/" /* path props가 정확히 /인 경우에만 Home 컴포넌트 출력 */ exact={true} component={Home} />
            <Route path="/about" component={About} />
        </HashRouter>
    );
}

export default App;