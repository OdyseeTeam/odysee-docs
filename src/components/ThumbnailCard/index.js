import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}
    >
      {children}
    </Link>
  );
}
export default function ThumbnailCard({
  title,
  description,
  to,
  thumbnail,
  faIcon,
}) {
  return (
    <CardContainer href={to}>
      <div>
        <Link to={to}>
          <Image
            className={styles.thumbnailCardImage}
            img={thumbnail}
            alt={`Thumbnail of ${title}`}
          />
        </Link>
      </div>
      <div className={styles.thumbnailCard}>
        <h3>
          {faIcon !== undefined && faIcon !== '' && (
            <FontAwesomeIcon icon={faIcon} />
          )}
          {faIcon !== undefined && faIcon !== '' && 
            ' '
          }
          {title}
        </h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </CardContainer>
  );
}
