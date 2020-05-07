import React from 'react';
import classNames from 'classnames';
import styles from './Message.module.scss';

function Message({ message, nextMessage }) {
  const isLastOfKind = !nextMessage || nextMessage.isIncoming !== message.isIncoming;

  return (
    <div
      className={classNames(
        styles.wrapper,
        message.isIncoming ? styles.incoming : styles.outgoing,
        isLastOfKind && styles.last
      )}>
      {message.text}
      {isLastOfKind && (
        <div
          className={classNames(
            message.isIncoming ? styles.triangletopleft : styles.triangletopright
          )}
        />
      )}
    </div>
  );
}

export default Message;
