import React from 'react';
import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header/Header';

const App = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    );
};

export default App;