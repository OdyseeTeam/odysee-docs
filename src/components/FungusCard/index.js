import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

