import React, { useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import axios from 'axios';
import ContactList from './ContactList';
import CurrentConversation from './CurrentConversation';
import TextBox from './TextBox';
import store from '../redux/store';
import styles from './App.module.scss';

function App() {
  useEffect(() => {
    // get contacts
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      store.dispatch({ type: 'INIT_CONTACTS', payload: res.data });
    });
  }, []);

  return (
    <ReduxProvider store={store}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ContactList />
        </div>
        <div className={styles.right}>
          <CurrentConversation />
          <TextBox />
        </div>
      </div>
    </ReduxProvider>
  );
}

export default App;
