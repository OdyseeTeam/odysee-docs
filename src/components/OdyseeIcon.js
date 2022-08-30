import React from 'react';
import Credits from '@site/src/components/Credits';

function getIcon(type) {
  if (type == 'credits') {
    return Credits();
  }
  if (type == 'atSign') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--AtSign"
        aria-hidden="true"
      >
        <g>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </g>
      </svg>
    );
  }
  if (type == 'dollar') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--DollarSign"
        aria-hidden="true"
      >
        <g>
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </g>
      </svg>
    );
  }
  if (type == 'wallet') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--List"
        aria-hidden="true"
      >
        <g>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </g>
      </svg>
    );
  }
  if (type == 'cogwheel') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        overflow="visible"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--Settings"
        aria-hidden="true"
      >
        <g>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </g>
      </svg>
    );
  }
  if (type == 'bell') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        overflow="visible"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--Bell"
        aria-hidden="true"
      >
        <g>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </g>
      </svg>
    );
  }
  if (type == 'key') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        overflow="visible"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--Key"
        aria-hidden="true"
      >
        <g>
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </g>
      </svg>
    );
  }
  if (type == 'person') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        overflow="visible"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--User"
        aria-hidden="true"
      >
        <g>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </g>
      </svg>
    );
  }
  if (type == 'uploadCloud') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        overflow="visible"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--UploadCloud"
        aria-hidden="true"
      >
        <g fill="none" fill-rule="evenodd" stroke-linecap="round">
          <path
            d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
            stroke-linejoin="round"
          ></path>
          <path d="M12, 13 L12, 21"></path>
          <polyline
            stroke-linejoin="round"
            transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000)"
            points="15 11 12 14 9 11"
          ></polyline>
        </g>
      </svg>
    );
  }
  return <span>couldn't find icon</span>;
}

export default function OdyseeIcon(props) {
  return getIcon(props.type);
}
