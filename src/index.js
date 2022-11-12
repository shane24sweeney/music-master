import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter history={createBrowserHistory()}>
<Routes>
  <Route path = '/' element = {<Header><App /></Header>} />
  <Route path = '/jokes' element = {<Header> <Jokes /></Header>} />
</Routes>

</BrowserRouter>
);

/*new Promise((resolve, reject) =>  {
  return reject(new error('No Bears'));

  setTimeout(() => {
  resolve('Bears, Beets, Battlestar Galagia');
}, 2000);
})
.then(quote => {
  console.log(quote);
})
.catch((error)=>{console.log('error', error)});
*/






