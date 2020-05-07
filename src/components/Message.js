import React from 'react';
import classNames from 'classnames';
import styles from './Message.module.scss';

function Message({ message }) {
  return (
    <div
      className={classNames(
        styles.wrapper,
        message.isIncoming ? styles.incoming : styles.outgoing
      )}>
      {message.text}
    </div>
  );
}

export default Message;
