import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./store/index"
import { Provider } from "react-redux"
import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  Landing,
  NotFound,
  Register,
  Login,
  SharedLayout,
  ProtectedRoute,
  JobListing,
  Profile,
  AddJob,
  Reports
} from './pages';



ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/' element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          } >
            <Route path="job-listing" element={<JobListing />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path='reports' element={<Reports />} />
          </Route>
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
