import React from 'react';
import './styles/App.scss';
import 'react-toastify/dist/ReactToastify.css'
import { Header } from './components/Header/Header';
import {AppContent} from "./components/Routing/AppContent";
import { Player } from './components/Player/Player';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className="page-and-player__container">
                <AppContent/>
                <Player/>
            </div>
        </div>
    );
};

export default App;