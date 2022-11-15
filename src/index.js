import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>
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






