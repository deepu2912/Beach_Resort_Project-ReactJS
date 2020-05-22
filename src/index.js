import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';

 import { RoomProvider} from './context';
 import * as registerServiceWorker from './serviceWorker';

ReactDOM.render(
  <RoomProvider>
  <Router>
     <App />
  </Router>
  </RoomProvider>
,
  document.getElementById('root')
);

 
registerServiceWorker.register();