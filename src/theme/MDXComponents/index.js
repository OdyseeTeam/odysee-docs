import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Credits from '@site/src/components/Credits';
import BrowserWindow from '@site/src/components/BrowserWindow';
import ThemedImage from '@theme/ThemedImage';

export default {
  ...MDXComponents,
  Credits: Credits,
  BrowserWindow: BrowserWindow,
  ThemedImage: ThemedImage,
};
