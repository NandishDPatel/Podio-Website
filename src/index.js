import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap5/src/css/bootstrap.min.css';
import Main from './layout/Main';
import './layout/styles.css'
// import UseCase from './layout/UseCase';
import UseCaseMain from './layout/UseCaseMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/usecase' element={<UseCaseMain/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
