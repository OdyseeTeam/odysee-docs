import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import OdyseeButton from '@site/src/components/OdyseeButton';
import OdyseeButtonRound from '@site/src/components/OdyseeButtonRound';
import Image from '@theme/IdealImage';
import Card from '@site/src/components/Card';
import ThumbnailCard from '@site/src/components/ThumbnailCard';

export default {
  ...MDXComponents,
  Credits: Credits,
  BrowserWindow: BrowserWindow,
  Image: Image,
  OdyseeButton: OdyseeButton,
  OdyseeButtonRound: OdyseeButtonRound,
  Card: Card,
  ThumbnailCard: ThumbnailCard,
};
