import React from 'react';
import Head from '@docusaurus/Head';
import { onlyText } from 'react-children-utilities';

function getFAQPageSchema(props) {
  const FAQPage = {};
  FAQPage["@context"] = "https://schema.org";
  FAQPage["@type"] = "FAQPage";
  FAQPage["mainEntity"] = [];
  props.children.map((detail) => {
    /* First entry in array is the question. */
    const question = onlyText(detail.props.children[0]);
    /* Following entries in array are the answer. */
    const answer = onlyText(detail.props.children.slice(1));
    FAQPage["mainEntity"].push(
      {
        "@type": "Question",
        "name": question,
        "acceptedAnswer":
        {
          "@type": "Answer",
          "text": answer
        }
      }
    );
  });
  return JSON.stringify(FAQPage);
}

export default function FAQ(props) {
  return (
    <>
      <Head>
        <script type="application/ld+json">{getFAQPageSchema(props)}</script>
      </Head>
      {props.children}
    </>
  );
}
