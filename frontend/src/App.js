import React from 'react';
import { Router } from './router/Router';
import GlobalStyle from './styles/global';

export default function App() {

  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}