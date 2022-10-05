import React from 'react';
import clsx from 'clsx';
import { findFirstCategoryLink } from '@docusaurus/theme-common/internal';
import ThumbnailCard from '@site/src/components/ThumbnailCard';
import {useAllPluginInstancesData} from '@docusaurus/useGlobalData';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/theme-common/internal';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Filter categories that don't have a link or no category card data.
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

/* Requires custom props in files and categories
sidebar_custom_props:
  faIcon: "fa-circle-play"
  cardThumbnail: "https://placehold.co/1200x600" #The thumbnail on the category card.
  cardSize: 12 #12 is full size, 6 is 50% width, etc.
  thumbnailLocation: "left" #Possible options: top, left, bottom, right, none
  tileColor: "blue" #Possible options: blue, cream, darkpurple, lightpurple, mauve, orange, pink
*/

/* Creates a ItemList to be placed in the header of category page. */ 
function getItemList() {
  const {siteConfig} = useDocusaurusContext();
  var itemList = {};
  itemList["@context"] = "https://schema.org";
  itemList["@type"] = "ItemList";
  itemList["itemListElement"] = [];
  useCurrentSidebarCategory().items.map((item, index) => (
    itemList["itemListElement"].push({"@type": "ListItem", "position": index + 1, "url": siteConfig.url + item.href})
  ));
  return JSON.stringify(itemList);
}

export default function CategoryCards({className}) {
  return (
    <>
	 {/*Needs more microdata on each page.
        <Head>
          <script type="application/ld+json">{getItemList()}</script>
	    </Head>*/}
      <section className={clsx('row', className)}>
        {filterItems(useCurrentSidebarCategory().items).map((item, index) => (
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
	</>
  );
}
