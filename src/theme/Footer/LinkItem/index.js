import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {props.faicon !== undefined && props.faicon != "" &&
		  <span><FontAwesomeIcon icon={props.faicon} /> {' '} </span>
      }
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
