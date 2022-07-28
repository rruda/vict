import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import './App.scss';
import { CreateQuiz } from './componets/CreateQuiz/CreateQuiz';
import { Header } from './componets/Header/header';
import { HomePage } from './componets/HomePage';
import { Profile } from './componets/Profile/Profile';
import { QuizWrap } from './componets/QuizWrap/QuizWrap';
import { SearchAndFilter } from './componets/SearchAndFilter/SearchAndFilter';
import { StartQuiz } from './componets/StartQuiz/StartQuiz';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element = {<HomePage/>}/>
              <Route path='/:id' element = {<StartQuiz/>}/>
              <Route path='/profile' element = {<Profile/>}/>
              <Route path='/createQuiz' element = {<CreateQuiz/>}/>
          </Routes>
        </div>  
    </BrowserRouter>
  );
}

export default App;
