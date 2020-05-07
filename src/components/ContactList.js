import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import styles from './ContactList.module.scss';

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const selectedContactId = useSelector((state) => state.selectedContactId);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Messages</div>
      <div className={styles.list}>
        {contacts
          ? contacts.map((c) => (
              <Contact key={c.id} contact={c} isActive={c.id === selectedContactId} />
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}

export default ContactList;
