import React from 'react';
import styles from './styles.module.css';

export default function OdyseeButtonRound({ children, url }) {
  return (
    <a
      target="blank"
      rel="noopener noreferrer"
      className={styles.odyseeButtonRoundLink}
      href={url}
    >
      <span className={styles.odyseeButtonRound}>{children}</span>
    </a>
  );
}
