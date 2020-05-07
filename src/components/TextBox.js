import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import styles from './TextBox.module.scss';

function TextBox() {
  const selectedContactId = useSelector((state) => state.selectedContactId);
  const [text, setText] = useState('');

  // We reset the text every time we change the selected contact.
  useEffect(() => {
    setText('');
  }, [selectedContactId]);

  const onInputChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const sendMessage = useCallback(
    (event) => {
      event.preventDefault();
      const payload = {
        contactId: selectedContactId,
        text,
      };

      store.dispatch({ type: 'SEND_MESSAGE', payload });
      setText('');

      // Receive echo message after 1 second.
      setTimeout(() => {
        store.dispatch({ type: 'RECEIVE_MESSAGE', payload });
      }, 1000);
    },
    [text, selectedContactId]
  );

  return (
    <form className={styles.wrapper} onSubmit={sendMessage}>
      <input
        className={styles.input}
        disabled={!selectedContactId}
        placeholder="Reply..."
        value={text}
        onChange={onInputChange}
      />
      <button className={styles.button} disabled={!selectedContactId || text === ''}>
        +
      </button>
    </form>
  );
}

export default TextBox;
