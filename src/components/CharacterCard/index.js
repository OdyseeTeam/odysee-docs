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
