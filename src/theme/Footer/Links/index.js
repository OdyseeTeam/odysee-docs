import React from 'react';
import Links from '@theme-original/Footer/Links';

export default function LinksWrapper(props) {
  console.log(props);
  return (
    <>
      <Links {...props} />
    </>
  );
}
