import React from 'react';
import ColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import styles from './styles.module.css';

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <div class={styles.colorModeToggle}>
        <ColorModeToggle {...props} />
      </div>
    </>
  );
}
