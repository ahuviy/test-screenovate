import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import styles from './Contact.module.scss';
import store from '../redux/store';

function Contact({ contact, isActive }) {
  const avatarStyle = useMemo(() => ({ backgroundColor: contact.avatarColor }), [contact]);

  const selectContact = useCallback(() => {
    store.dispatch({ type: 'SELECT_CONTACT', payload: contact.id });
  }, [contact]);

  return (
    <div className={classNames(styles.wrapper, isActive && styles.active)} onClick={selectContact}>
      <div className={styles.avatar} style={avatarStyle} />
      <div className={styles.text}>
        <div>{contact.name}</div>
        {contact.messages.length > 0 && (
          <div className={styles.message}>{contact.messages[contact.messages.length - 1].text}</div>
        )}
      </div>
    </div>
  );
}

export default Contact;
