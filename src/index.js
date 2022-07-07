import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import store from "./store/index"
// import { Provider } from "react-redux"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Landing, NotFound } from './pages';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    {/* <Provider store={store}>
     
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
