import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Loader from './components/Loader';

// PAGES

import Home from './pages/Home';

function App() {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [loading, setLoading] = useState(true);


    // INITIAL API CALL TO SET THE NOW PLAYING

    document.body.style.overflow = loading ? 'hidden' : 'initial';

    return (
        <BrowserRouter>
            <Loader loading={loading}/>

            <Route exact path='/' render={(props) => (<Home {...props} setLoading={setLoading} />)}/>
        </BrowserRouter>
    );
}

export default App;
