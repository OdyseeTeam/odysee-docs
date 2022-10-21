import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import OdyseeButton from '@site/src/components/OdyseeButton';
import PrimaryOdyseeButton from '@site/src/components/PrimaryOdyseeButton';
import OdyseeButtonRound from '@site/src/components/OdyseeButtonRound';
import Image from '@site/src/components/Image';
import Card from '@site/src/components/Card';
import FAQ from '@site/src/components/FAQ';
import ThumbnailCard from '@site/src/components/ThumbnailCard';
import OdyseeIcon from '@site/src/components/OdyseeIcon';
import MailTemplate from '@site/src/components/MailTemplate';
import CategoryCards from '@site/src/components/CategoryCards';

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faReddit } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faDiscord);
library.add(faReddit);
library.add(faFacebook);
library.add(faTiktok);
library.add(faGithub);
library.add(faInstagram);
library.add(faTwitter);

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);
library.add(faHouse);
library.add(faShieldHalved);
library.add(faBook);
library.add(faBriefcase);
library.add(faCircleInfo);
library.add(faStar);
library.add(faTimeline);
library.add(faCirclePlay);
library.add(faHandHoldingDollar);
library.add(faRightToBracket);
library.add(faUnlockKeyhole);

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
  PrimaryOdyseeButton: PrimaryOdyseeButton,
  OdyseeIcon: OdyseeIcon,
  MailTemplate: MailTemplate,
  CategoryCards: CategoryCards,
  FAQ: FAQ,
};
