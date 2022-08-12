import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import ThemedImage from '@theme/ThemedImage';
import Image from '@theme/IdealImage';

export default {
  ...MDXComponents,
  Credits: Credits,
  BrowserWindow: BrowserWindow,
  Image: Image,
};
