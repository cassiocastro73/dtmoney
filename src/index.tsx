import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return [
        {
          lalala:123
        }
      ]
    })

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return data;
    })
    
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


