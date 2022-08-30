import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
  children,
  title,
  description,
  to,
  thumbnail,
  size,
}) {
  return (
    <div class={"col col--" + size + " margin-bottom--lg"}>
    <CardContainer href={to}>
      <div>
        <Link to={to}>
          <Image
            className={styles.thumbnailCardImage}
            img={useBaseUrl(thumbnail)}
            alt={`Thumbnail of ${title}`}
          />
        </Link>
      </div>
      <div className={styles.thumbnailCard}>
        <h3>
          {children} {title}
        </h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </CardContainer>
    </div>
  );
}
