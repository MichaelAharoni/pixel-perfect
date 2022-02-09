import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AppFooter} from './cmps/AppFooter.jsx';
import { HomePage } from './pages/HomePage.jsx';

export function RootCmp() {
  return (
    <section className='main-layout app-layout'>
      <BrowserRouter>
        <main className='full-layout'>
        <HomePage />
        </main>
        {/* <footer className='full-layout'>
          <AppFooter/>
        </footer> */}
      </BrowserRouter>
    </section>
  );
}
