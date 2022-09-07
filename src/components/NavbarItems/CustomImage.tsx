/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in thehttp://localhost:3000/#
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';
import {Link} from "react-router-dom";
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function CustomImage(props: {
  url: string;
}): JSX.Element | null {
  const {pathname} = useLocation();
    if (props.link !== undefined) {
    const normalizedHref = useBaseUrl(props.link);
    return (
      <Link to={normalizedHref}><img
        onClick={() => {
          // eslint-disable-next-line no-alert
		  // alert("Hello");
        }}
		class={styles.image}
        src={props.url}
		width="32px"/></Link>
    );
	}
    return (
      <img
        onClick={() => {
          // eslint-disable-next-line no-alert
		  // alert("Hello");
        }}
		class={styles.image}
        src={props.url}
		width="32px"/>
    );

}
