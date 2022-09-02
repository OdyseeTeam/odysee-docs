import React from 'react';
import Credits from '@site/src/components/Credits';

function getIcon(inputType) {
  var type = inputType.toLowerCase()
  if (type == 'credits') {
    return Credits();
  }
  if (type == 'menu') {
	return (
	  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon--Menu" aria-hidden="true"><g><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></g></svg>
	);    
  }
  if (type == 'unlock') {
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
        class="icon icon--Unlock"
        aria-hidden="true"
      >
        <g>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </g>
      </svg>
    );
  }
  if (type == 'edit') {
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
        class="icon icon--Edit"
        aria-hidden="true"
      >
        <g>
          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </g>
      </svg>
    );
  }
  if (type == 'morevertical') {
    return (
      <svg
        size="20"
        class="icon icon--MoreVertical"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="20"
        height="20"
        fill="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g>
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="12" cy="19" r="2"></circle>
        </g>
      </svg>
    );
  }
  if (type == 'playlistadd') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 9 24 24"
        overflow="visible"
        width="12"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--PlaylistAdd"
        aria-hidden="true"
		style={{marginRight: 12 + 'px'}}
      >
        <g transform="matrix(3.4285714285714284,0,0,3.4285714285714284,0,0)">
          <rect x="0.5" y="0.5" width="10.5" height="10.5" rx="1"></rect>
          <path d="M13.5,3.5v9a1,1,0,0,1-1,1h-9"></path>
          <line x1="5.75" y1="3" x2="5.75" y2="8.5"></line>
          <line x1="3" y1="5.75" x2="8.5" y2="5.75"></line>
        </g>
      </svg>
    );
  }
  if (type == 'playlist') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 9 24 24"
        overflow="visible"
        width="12"
        height="16"
        fill="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="currentColor"
        class="icon icon--Playlist"
        aria-hidden="true"
		style={{marginRight: 12 + 'px'}}
      >
        <g transform="matrix(3.4285714285714284,0,0,3.4285714285714284,0,0)">
          <rect
            x="0.5"
            y="0.5"
            width="10.5"
            height="10.5"
            rx="1"
            fill="none"
          ></rect>
          <path d="M13.5,3.5v9a1,1,0,0,1-1,1h-9" fill="none"></path>
          <path
            d="M3.75,7.64V3.86a.36.36,0,0,1,.55-.31L7.57,5.44a.36.36,0,0,1,0,.62L4.3,8A.36.36,0,0,1,3.75,7.64Z"
            fill="none"
          ></path>
        </g>
      </svg>
    );
  }
  if (type == 'chevrondown') {
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
        class="icon icon--ChevronDown"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    );
  }
  if (type == 'chevronright') {
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
        class="icon icon--ChevronRight"
        aria-hidden="true"
      >
        <g fill="none" fill-rule="evenodd" stroke-linecap="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </g>
      </svg>
    );
  }
  if (type == 'livestream') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--Video"
        aria-hidden="true"
      >
        <g>
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </g>
      </svg>
    );
  }
  if (type == 'post') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon--Post"
        aria-hidden="true"
      >
        <g>
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </g>
      </svg>
    );
  }
  if (type == 'signout') {
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
        class="icon icon--SignOut"
        aria-hidden="true"
      >
        <g>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </g>
      </svg>
    );
  }
  if (type == 'helpcircle') {
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
        class="icon icon--HelpCircle"
        aria-hidden="true"
      >
        <g>
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12" y2="17"></line>
        </g>
      </svg>
    );
  }
  if (type == 'upgrade') {
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
        class="icon icon--Upgrade"
        aria-hidden="true"
      >
        <g>
          <path d="m2 6 10-5 10 5M2 6v12l10 5 10-5V6"></path>
          <circle cx="12" cy="10" r="5.25"></circle>
          <path d="M8.5 14.5 6 17h3l1.5 2.5 1-4h1l1 4L15 17h3l-2-2.5"></path>
        </g>
      </svg>
    );
  }
  if (type == 'users') {
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
        class="icon icon--Users"
        aria-hidden="true"
      >
        <g>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </g>
      </svg>
    );
  }
  if (type == 'award') {
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
        class="icon icon--Award"
        aria-hidden="true"
      >
        <g fill="none" fill-rule="evenodd" stroke-linecap="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </g>
      </svg>
    );
  }
  if (type == 'testtube') {
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
        class="icon icon--BarChart2"
        aria-hidden="true"
      >
        <g>
          <path d="M 8.4312337,1.6285136 V 9.4232264 L 2.2367584,22.725564 H 22.030217 L 15.773797,9.2902071 V 1.6285136 Z"></path>
          <path d="M 4.2426407,18.166369 H 12.197591"></path>
          <path d="m 6.363961,14.188893 h 5.701048"></path>
        </g>
      </svg>
    );
  }
  if (type == 'youtube') {
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
        class="icon icon--Youtube"
        aria-hidden="true"
      >
        <g>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </g>
      </svg>
    );
  }
  if (type == 'atsign') {
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
  if (type == 'uploadcloud') {
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
  return props.color !== undefined ? <span style={{color:props.color}}>{getIcon(props.type)}</span> : getIcon(props.type);
}
