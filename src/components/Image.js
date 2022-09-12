import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function getCdnUrl(src, width, quality) {
  return "https://thumbnails.odycdn.com/optimize/s:" + width + ":720/quality:" + quality + "/plain/https://help.odysee.tv" + src;
}

export default function Image({src, img, alt, className}) {
  const imgSrc = (src === undefined) ? useBaseUrl(img) : useBaseUrl(src)
  const env = process.env.NODE_ENV || 'development';
  if (env == "development") {
    return (<img loading="lazy" className={className} src={imgSrc} alt={alt} />);
  }
  return (
    <img 
	  className={className}
      loading="lazy" 
      src={getCdnUrl(imgSrc, 400, 85)} 
      alt={alt} 
      srcset={
        getCdnUrl(imgSrc, 400, 85) + " 320w, "  + 
        getCdnUrl(imgSrc, 600, 85) + " 600w, " + 
        getCdnUrl(imgSrc, 800, 85) + " 800w, " + 
        getCdnUrl(imgSrc, 1100, 85) + " 900w"
      } 
      sizes="100vw" 
	/>
  );
}
