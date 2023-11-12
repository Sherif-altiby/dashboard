import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/Team/Team';
import ContactInfo from './pages/Contact/ContactInfo';
import Invoices from './pages/Invoices/Invoices';

import Profile from './pages/Profile/Profile';
import Calender from './pages/Calender/Calender';
import Faq from './pages/Faq/Faq';

import Bar from './pages/Bar/Bar';
import Bie from './pages/Bie/Bie';
import Line from './pages/Line/Line';
import Geography from './pages/Geography/Geography';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} /> 
      <Route path='/team' element={<Team />} /> 
      <Route path='/contact-inf' element={<ContactInfo />} /> 
      <Route path='/invoices' element={<Invoices />} /> 

      <Route path='/profile' element={<Profile />} /> 
      <Route path='/calender' element={<Calender />} /> 
      <Route path='/faq' element={<Faq />} /> 

      <Route path='/bar' element={<Bar />} /> 
      <Route path='/pie' element={<Bie />} /> 
      <Route path='/line' element={<Line />} /> 
      <Route path='/geogarphy' element={<Geography />} /> 


    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);