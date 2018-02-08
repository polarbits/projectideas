import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from "./models/RootStore";

const store = RootStore.create({});

ReactDOM.render(<Provider store = {store}>
  <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
