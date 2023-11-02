import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import MainPage from './components/pages/MainPage/MainPage';
import BookPage from './components/pages/BookPage/BookPage';

function App() {
  return (
    <div className="wrapper">
      <MainLayout>
        <MainPage/>
        <BookPage/>
      </MainLayout>
    </div>
  );
}

export default App;
