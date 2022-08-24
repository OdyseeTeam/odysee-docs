import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import OdyseeButton from '@site/src/components/OdyseeButton';
import OdyseeButtonRound from '@site/src/components/OdyseeButtonRound';
import ThemedImage from '@theme/ThemedImage';
import Image from '@theme/IdealImage';
import ButtonCard from '@site/src/components/ButtonCard';

export default {
  ...MDXComponents,
  Credits: Credits,
  BrowserWindow: BrowserWindow,
  Image: Image,
  ThemedImage: ThemedImage,
  OdyseeButton: OdyseeButton,
  OdyseeButtonRound: OdyseeButtonRound,
  ButtonCard: ButtonCard,
};
