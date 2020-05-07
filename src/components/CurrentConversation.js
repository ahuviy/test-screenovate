import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import styles from './CurrentConversation.module.scss';

function CurrentConversation() {
  const contacts = useSelector((state) => state.contacts);
  const selectedContactId = useSelector((state) => state.selectedContactId);

  const selectedContact = selectedContactId
    ? contacts.find((c) => c.id === selectedContactId)
    : null;

  const avatarStyle = useMemo(
    () => ({ backgroundColor: selectedContact ? selectedContact.avatarColor : undefined }),
    [selectedContact]
  );

  return (
    <div className={styles.wrapper}>
      {selectedContact && (
        <>
          <div className={styles.title}>
            <div className={styles.avatar} style={avatarStyle} />
            <div>{selectedContact.name}</div>
          </div>
          <div className={styles.messages}>
            {selectedContact.messages.map((m) => (
              <Message key={m.timestamp} message={m} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CurrentConversation;
