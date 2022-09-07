import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import OdyseeButton from '@site/src/components/OdyseeButton';
import PrimaryOdyseeButton from '@site/src/components/PrimaryOdyseeButton';
import OdyseeButtonRound from '@site/src/components/OdyseeButtonRound';
import Image from '@theme/IdealImage';
import Card from '@site/src/components/Card';
import ThumbnailCard from '@site/src/components/ThumbnailCard';
import OdyseeIcon from '@site/src/components/OdyseeIcon';
import CardRow from '@site/src/components/CardRow';
import MailTemplate from '@site/src/components/MailTemplate';
import CategoryCards from '@site/src/components/CategoryCards';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import DocCardList from '@theme/DocCardList';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);
library.add(...iconList);
const brandIconList = Object.keys(BrandIcons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => BrandIcons[icon]);
library.add(...brandIconList);

export default {
  ...MDXComponents,
  Credits: Credits,
  BrowserWindow: BrowserWindow,
  Image: Image,
  OdyseeButton: OdyseeButton,
  OdyseeButtonRound: OdyseeButtonRound,
  Card: Card,
  ThumbnailCard: ThumbnailCard,
  FontAwesomeIcon: FontAwesomeIcon,
  DocCardList: DocCardList,
  PrimaryOdyseeButton: PrimaryOdyseeButton,
  OdyseeIcon: OdyseeIcon,
  CardRow: CardRow,
  MailTemplate: MailTemplate,
  CategoryCards: CategoryCards,
};
