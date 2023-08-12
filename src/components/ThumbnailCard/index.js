import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";
import Image from '@site/src/components/Image';
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useDocById } from '@docusaurus/theme-common/internal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardContainer({ href, children, classes }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer, classes)}
    >
      {children}
    </Link>
  );
}
function CategoryCardContainer({ href, children, classes }) {
  return (
    <div
      className={clsx("card padding--lg", styles.categoryCardContainer, classes)}
    >
      {children}
    </div>
  );
}

function getBackgroundClass(background) {
  var bg = background.toLowerCase();
  if (bg == "blue") return styles.cardBackgroundBlue;
  if (bg == "cream") return styles.cardBackgroundCream;
  if (bg == "darkpurple") return styles.cardBackgroundDarkPurple;
  if (bg == "lightpurple") return styles.cardBackgroundLightPurple;
  if (bg == "mauve") return styles.cardBackgroundMauve;
  if (bg == "orange") return styles.cardBackgroundOrange;
  if (bg == "pink") return styles.cardBackgroundPink;
  return styles.cardBackgroundNone;
}

function filterItems(items) {
  return items.filter((item) => {
    if (item.customProps === undefined) {
      return false;
    }
    if (item.type === 'category') {
      return !!findFirstCategoryLink(item);
    }
    return true;
  });
}

function getCard(props) {
  if (props.isCategory == true) {
    var propItem = props.item;
    return (

      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CategoryCardContainer>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
            <section className="row">
              {filterItems(propItem.items).map((item, index) => (
                <React.Fragment key={index}>
                  <ThumbnailCard
                    title={item.label}
                    faIcon={item.customProps.faIcon}
                    description={useDocById(item.docId ?? undefined)?.description}
                    to={item.href}
                    thumbnail={item.customProps.cardThumbnail}
                    size={item.customProps.cardSize}
                    thumbnailLocation={item.customProps.thumbnailLocation}
                    tileColor={item.customProps.tileColor}
                    isCategory={item.type === 'category'}
                    item={item}
                  />
                </React.Fragment>
              ))}
              </section>
          </div>
        </CategoryCardContainer>
      </div>
    );
  }
  if (props.thumbnailLocation == "top") {
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer href={props.to}>
          <div>
            {
              props.thumbnail != "" ?
                <div className="card__image">
                  <img
                    loading="eager"
                    className={clsx(styles.thumbnailCardImage,getBackgroundClass(props.tileColor))}
                    src={useBaseUrl(props.thumbnail)}
                    alt={`Thumbnail of ${props.title}`}
                    />
                </div>
              :
                <div height="200px"></div>
            }
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.faIcon !== undefined && props.faIcon != "" ? <FontAwesomeIcon icon={props.faIcon} /> : ""} {props.title}</h3>
            <p className={styles.cardDescription}>{props.description}</p>
          </div>
        </CardContainer>
      </div>
    );
  }
  if (props.thumbnailLocation == "bottom") {
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer href={props.to} classes={clsx(styles.rowCardReversedColumn)}>
          <div>
            <Image
              className={clsx(styles.thumbnailCardImageReversedColumn,getBackgroundClass(props.tileColor))}
              img={useBaseUrl(props.thumbnail)}
              alt={`Thumbnail of ${props.title}`}
            />
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.faIcon !== undefined && props.faIcon != "" ? <FontAwesomeIcon icon={props.faIcon} /> : ""} {props.title}</h3>
            <p className={styles.cardDescription}>{props.description}</p>
          </div>
        </CardContainer>
      </div>
    );
  }
  if (props.thumbnailLocation == "left") {
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer href={props.to} classes={clsx(styles.rowCard)}>
          <div>
            <Image
              loading="eager"
              fixedWidth="300"
              className={clsx(styles.thumbnailCardImageRow,getBackgroundClass(props.tileColor))}
              img={useBaseUrl(props.thumbnail)}
              alt={`Thumbnail of ${props.title}`}
            />
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.faIcon !== undefined && props.faIcon != "" ? <FontAwesomeIcon icon={props.faIcon} /> : ""} {props.title}</h3>
            <p className={styles.cardDescription}>{props.description}</p>
          </div>
        </CardContainer>
      </div>
    );
  }
  if (props.thumbnailLocation == "right") {
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer href={props.to} classes={clsx(styles.rowCardReverse)}>
          <div>
            <Image
              loading="eager"
              fixedWidth="300"
              className={clsx(styles.thumbnailCardImageRow,getBackgroundClass(props.tileColor))}
              img={useBaseUrl(props.thumbnail)}
              alt={`Thumbnail of ${props.title}`}
            />
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.faIcon !== undefined && props.faIcon != "" ? <FontAwesomeIcon icon={props.faIcon} /> : ""} {props.title}</h3>
            <p className={styles.cardDescription}>{props.description}</p>
          </div>
        </CardContainer>
      </div>
    );
  }
  if (props.thumbnailLocation == "none") {
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CardContainer href={props.to}>
          <div className={styles.thumbnailCard}>
            <h3>{props.faIcon !== undefined && props.faIcon != "" ? <FontAwesomeIcon icon={props.faIcon} /> : ""} {props.title}</h3>
            <p className={styles.cardDescription}>{props.description}</p>
          </div>
        </CardContainer>
      </div>
    );
  }
  return (
    <div style={{ width: "100%" }}>
      ---------
      <br />
      manual card: {props.title} - {props.description}
      <br />
      <code>
        title: {props.title}
        <br />
        description: {props.description}
      </code>
    </div>
  );
}

export default function ThumbnailCard(props) {
  return getCard(props);
}
