import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './scss/styles.scss';
import { store } from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
