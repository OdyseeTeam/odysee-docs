import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function CardContainer({ href, children, classes }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.fungusCardContainer, classes)}
    >
      {children}
    </Link>
  );
}


export default function CharacterCard({size, style, cardColumn, children}) {
  return (
      <div className={clsx("col col--" + size + " margin-bottom--lg", styles.cardColumn)} style={style}>
        <CardContainer  classes={clsx(styles.rowCard)}>
          <img src="/img/g_1080x1080p_RGB_H264Cool.png" width="192px" className={styles.fungusImage}/>
          <div className={styles.fungusCard}>
			  {children}
          </div>
        </CardContainer>
      </div>
  );
}
