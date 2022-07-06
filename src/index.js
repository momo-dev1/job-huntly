import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import store from "./store/index"
// import { Provider } from "react-redux"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from './pages/Landing';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

      </Routes>
    </BrowserRouter>
    {/* <Provider store={store}>
     
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
