import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import "./App.css"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;

