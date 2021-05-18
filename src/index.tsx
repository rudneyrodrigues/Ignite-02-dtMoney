import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    //Todas as chamadas ao banco de dados serão efetuadas no endereço:
    //http://localhost:3000/api

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Salario',
          amount: 1200,
          type: 'deposit',
          category: 'Pessoal',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
