import React from 'react';
import clsx from 'clsx';
import { findFirstCategoryLink } from '@docusaurus/theme-common/internal';
import ThumbnailCard from '@site/src/components/ThumbnailCard';
import {useAllPluginInstancesData} from '@docusaurus/useGlobalData';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';
import { useDocById } from '@docusaurus/theme-common/internal';

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

export default function CategoryCards({className}) {
  return (
    <section className={clsx('row', className)}>
      {filterItems(useCurrentSidebarCategory().items).map((item, index) => (
            <ThumbnailCard
              title={item.label}
              faIcon={item.customProps.faIcon}
              description={useDocById(item.docId ?? undefined)?.description}
              to={item.href}
              thumbnail={item.customProps.cardThumbnail}
			  size={item.customProps.cardSize}
			  thumbnailLocation={item.customProps.thumbnailLocation}
			  tileColor={item.customProps.tileColor}
            />
      ))}
    </section>
  );
}
