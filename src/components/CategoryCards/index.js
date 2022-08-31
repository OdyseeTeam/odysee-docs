import React from 'react';
import clsx from 'clsx';
import {findFirstCategoryLink} from '@docusaurus/theme-common/internal';
import ThumbnailCard from '@site/src/components/ThumbnailCard';
import {useAllPluginInstancesData} from '@docusaurus/useGlobalData';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

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

/* Requires custom props in files and categories, but doesn't allow translations:
sidebar_custom_props:
  cardTitle: "What is Odysee?"
  cardDescription: "Odysee sounds cool. What is it, though?"
  faIcon: "fa-circle-play"
  cardThumbnail: "https://placehold.co/1200x600"
  cardSize: 7
*/

export default function CategoryCards({className}) {
  return (
    <section className={clsx('row', className)}>
      {filterItems(useCurrentSidebarCategory().items).map((item, index) => (
        <article key={index} className={"col col--" + item.customProps.cardSize + " margin-bottom--lg"}>
          {console.log(item)}
            <ThumbnailCard
              title={item.customProps.cardTitle}
              faIcon={item.customProps.faIcon}
              description={item.customProps.cardDescription}
              to={item.href}
              thumbnail={item.customProps.cardThumbnail}
            />
        </article>
      ))}
    </section>
  );
}
