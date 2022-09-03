import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useDocById } from '@docusaurus/theme-common/internal';

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
    <Link
      href={href}
      className={clsx("card padding--lg", styles.categoryCardContainer, classes)}
    >
      {children}
    </Link>
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
	console.log(props);

  if (props.isCategory == true) {
	var propItem = props.item;
    return (
      <div className={clsx("col col--" + props.size + " margin-bottom--lg", styles.cardColumn)} style={props.style}>
        <CategoryCardContainer>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
			<section class="row">
			  {filterItems(propItem.items).map((item, index) => (
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
            <Link to={props.to}>
				{props.thumbnail != "" ?
				  <Image
					className={clsx(styles.thumbnailCardImage,getBackgroundClass(props.tileColor))}
					img={useBaseUrl(props.thumbnail)}
					alt={`Thumbnail of ${props.title}`}
				  />
			  :
				<div height="200px"></div>
				}
            </Link>
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
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
            <Link to={props.to} class={getBackgroundClass(props.tileColor)}>
              <Image
                className={clsx(styles.thumbnailCardImageReversedColumn,getBackgroundClass(props.tileColor))}
                img={useBaseUrl(props.thumbnail)}
                alt={`Thumbnail of ${props.title}`}
              />
            </Link>
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
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
            <Link to={props.to}>
              <Image
                className={clsx(styles.thumbnailCardImageRow,getBackgroundClass(props.tileColor))}
                img={useBaseUrl(props.thumbnail)}
                alt={`Thumbnail of ${props.title}`}
              />
            </Link>
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
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
            <Link to={props.to}>
              <Image
                className={clsx(styles.thumbnailCardImageRow,getBackgroundClass(props.tileColor))}
                img={useBaseUrl(props.thumbnail)}
                alt={`Thumbnail of ${props.title}`}
              />
            </Link>
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
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
          <div>
            <Link to={props.to}></Link>
          </div>
          <div className={styles.thumbnailCard}>
            <h3>{props.title}</h3>
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
