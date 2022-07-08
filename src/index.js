import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./store/index"
import { Provider } from "react-redux"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard, Landing, NotFound, Register, Login } from './pages';



ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
