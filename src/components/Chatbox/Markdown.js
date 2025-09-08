import React from 'react';
import styles from './markdown.module.css';

const LoadingDots = () => (
  <div className={styles.loadingDots}>
    <div />
    <div />
    <div />
  </div>
);

const SimpleMarkdown = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('[') && part.includes('](')) {
          const match = /\[(.*?)\]\((.*?)\)/.exec(part);
          if (match) {
            const linkText = match[1];
            const url = match[2];
            return (
              <a href={url} key={index} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            );
          }
        }
        return part;
      })}
    </p>
  );
};

export { LoadingDots, SimpleMarkdown };
