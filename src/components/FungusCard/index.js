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


export default function FungusCard(props) {
  return (
        <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer  classes={clsx(styles.rowCard)}>
          <img src="/img/LadyFungus/g_192x192p_RGB_LadyFungus_Happy.png" className={styles.fungusImage}/>
          <div className={styles.fungusCard}>
			  {props.children}
          </div>
        </CardContainer>
      </div>
  );
}

