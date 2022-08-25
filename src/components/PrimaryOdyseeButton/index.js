import React from 'react';
import styles from './styles.module.css';

export default function PrimaryOdyseeButton({ children, url }) {
  return (
    <a
      target="blank"
      rel="noopener noreferrer"
      className={styles.odyseeButtonLink}
      href={url}
    >
      <span className={styles.odyseeButton}>{children}</span>
    </a>
  );
}
