import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faReddit,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faBriefcase,
  faCircleInfo,
  faEnvelope,
  faHouse,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const footerIcons = {
  'fa-book': faBook,
  'fa-briefcase': faBriefcase,
  'fa-brands fa-discord': faDiscord,
  'fa-brands fa-facebook': faFacebook,
  'fa-brands fa-github': faGithub,
  'fa-brands fa-instagram': faInstagram,
  'fa-brands fa-reddit': faReddit,
  'fa-brands fa-tiktok': faTiktok,
  'fa-brands fa-twitter': faTwitter,
  'fa-circle-info': faCircleInfo,
  'fa-envelope': faEnvelope,
  'fa-house': faHouse,
  'fa-shield-halved': faShieldHalved,
};

export default function FooterLinkItem({item}) {
  const {to, href, label, prependBaseUrlToHref, ...props} = item;
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
  const footerIcon = props.faicon ? footerIcons[props.faicon] : undefined;
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
      {footerIcon &&
		  <span><FontAwesomeIcon icon={footerIcon} fixedWidth/> {' '} </span>
      }
      {label}
      {href && !isInternalUrl(href) && <IconExternalLink />}
    </Link>
  );
}
