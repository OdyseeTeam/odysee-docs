import React from 'react';
import Credits from '@site/src/components/Credits';

function getIcon(inputType, style) {
  var type = inputType.toLowerCase()
  if (type == 'credits') {
    return Credits();
  } 
  else if (type == 'back') {
    return (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="icon icon--Back" aria-hidden="true"><g transform="scale(1.3)"><path d="M5 4.00014L2 7.00024L5 10.4287" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.5 7H9.25H12.1429C14.2731 7 16 8.7269 16 10.8571V10.8571C16 12.9874 14.2731 14.7143 12.1429 14.7143H9.57143" strokeWidth="1.3" strokeLinecap="round"></path></g></svg>
    );
  }
  else if (type == 'membership') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 24 24" width="24" height="24" strokeLinecap="round" strokeLinejoin="round" class="icon icon--Membership" aria-hidden="true" overflow="visible"><g><path d="M6.39174 14.0155C6.39174 14.0155 5.13168 15.2555 3.13167 15.2555C2.63168 13.2555 4.13167 11.7555 4.13167 11.7555M15.2364 9.01455L15.0467 14.5679L12.9771 16.81L11.7008 13.9643M8.93931 2.71749L3.3256 2.84686L1.08356 4.91644L3.92923 6.19269M4.03319 9.81455C4.03319 9.81455 6.10277 4.1232 10.3282 1.96739C13.6912 0.328972 15.9935 1.99345 15.9935 1.99345C15.9935 1.99345 17.6579 4.29567 16.0195 7.65874C13.8637 11.8841 8.17236 13.9537 8.17236 13.9537C7.72425 11.1509 6.813 10.2801 4.03319 9.81455ZM12.8284 5.89949C12.6332 6.09476 12.3166 6.09476 12.1213 5.89949C11.9261 5.70423 11.9261 5.38765 12.1213 5.19239C12.3166 4.99713 12.6332 4.99713 12.8284 5.19239C13.0237 5.38765 13.0237 5.70423 12.8284 5.89949Z" stroke="currentColor" fill="transparent" strokeWidth="1.3"></path></g></svg>
    );
  }
  else if (type == 'featured') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Featured" aria-hidden="true"><circle cx="11.06" cy="9" r="3"></circle><path d="M14.03,9.53l4.53,4.531a1.414,1.414,0,0,1-2,2l-4.3-4.311"></path><line x1="8.939" y1="11.121" x2="13.181" y2="6.88"></line><line x1="15" y1="14.5" x2="15" y2="20.5"></line><line x1="13.5" y1="20.5" x2="16.5" y2="20.5"></line><ellipse cx="14.5" cy="21" rx="7.5" ry="2.5"></ellipse><line x1="11.439" y1="14" x2="7.642" y2="19.987"></line><path d="M22,21,20.141,1.947a.5.5,0,0,0-.92-.219L15.561,7.5"></path><path d="M4.5,2.5A2.231,2.231,0,0,0,7,5c-1.615-.006-2.418.86-2.5,2.5A2.211,2.211,0,0,0,2,5,2.232,2.232,0,0,0,4.5,2.5Z"></path><path d="M14,.5A2.231,2.231,0,0,0,16.5,3c-1.615-.006-2.418.86-2.5,2.5A2.211,2.211,0,0,0,11.5,3,2.232,2.232,0,0,0,14,.5Z"></path></svg>
    );
  }
  else if (type == 'life') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Life" aria-hidden="true"><g><path d="M12 23.5L12 6.836"></path><path d="M12,6.836s2-1.291,2-3.228a4.144,4.144,0,0,0-1.69-3,.49.49,0,0,0-.621,0,4.143,4.143,0,0,0-1.689,3C10,5.545,12,6.836,12,6.836Z"></path><path d="M12,10.455s.9-4.038,6.093-4.038a.5.5,0,0,1,.419.8A7.942,7.942,0,0,1,12,10.455Z"></path><path d="M12,10.455s-.9-4.038-6.093-4.038a.5.5,0,0,0-.419.8A7.942,7.942,0,0,0,12,10.455Z"></path><path d="M12,15.455s1.809-4.31,7.6-3.2a.5.5,0,0,1,.262.858A8.855,8.855,0,0,1,12,15.455Z"></path><path d="M12,15.455s-1.809-4.31-7.6-3.2a.5.5,0,0,0-.262.858A8.855,8.855,0,0,0,12,15.455Z"></path><path d="M12,19.955s-2.767-3.766-8.139-1.331a.505.505,0,0,0-.054.9A8.853,8.853,0,0,0,12,19.955Z"></path><path d="M12,19.955s2.767-3.766,8.139-1.331a.505.505,0,0,1,.054.9A8.853,8.853,0,0,1,12,19.955Z"></path></g></svg>
    );
  }
  else if (type == 'education') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Education" aria-hidden="true"><g><path d="M12,14c0-1.455,2.964-3.381,8.484-3.494a.508.508,0,0,1,.516.5v8.5a.5.5,0,0,1-.5.5c-5.533.11-8.5,2.038-8.5,3.5,0-1.457-2.971-3.385-8.5-3.5a.5.5,0,0,1-.5-.5v-8.5a.508.508,0,0,1,.516-.5C9.035,10.62,12,12.546,12,14Z"></path><path d="M12 14.001L12 23.376"></path><path d="M10,14.742A20.1,20.1,0,0,0,5.52,13.7"></path><path d="M10,17.742a20.265,20.265,0,0,0-4.521-1.048"></path><path d="M14,14.742a20.2,20.2,0,0,1,4.523-1.048"></path><path d="M14,17.742a20.213,20.213,0,0,1,4.524-1.048"></path><path d="M4.566,9A7.5,7.5,0,1,1,19.434,9"></path><path d="M9.624,9,9.189,7.259a1,1,0,0,0-.97-.758H4.651"></path><path d="M17.99,3.5H15.281a1,1,0,0,0-.97.758l-.5,2a1,1,0,0,0,.97,1.242h1.052l.245,1.469"></path></g></svg>
    );
  }
  else if (type == 'aperature') {
    return (
      <svg style={style} size="16" className="icon icon--Aperature" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="3.5" y1="3.5" x2="14.5" y2="3.5" id="Stroke-6102"></line><polygon id="Stroke-6103" points="3.5 12.5 8.5 12.5 8.5 6.5 3.5 6.5"></polygon><line x1="11.5" y1="8.5" x2="14.5" y2="8.5" id="Stroke-6104"></line><line x1="10.5" y1="10.5" x2="14.5" y2="10.5" id="Stroke-6105"></line><line x1="10.5" y1="12.5" x2="14.5" y2="12.5" id="Stroke-6106"></line><line x1="3.5" y1="14.5" x2="14.5" y2="14.5" id="Stroke-6107"></line><line x1="3.5" y1="16.5" x2="14.5" y2="16.5" id="Stroke-6108"></line><line x1="3.5" y1="18.5" x2="14.5" y2="18.5" id="Stroke-6109"></line><path d="M19.5,5.5 L21.5,5.5 L21.5,20.5 C21.5,21.052 21.053,21.5 20.5,21.5 C19.948,21.5 19.5,21.052 19.5,20.5 L19.5,2 L17.5,2 L17.5,4" id="Stroke-6110"></path><path d="M20.5,23.5 L3.5,23.5 C1.844,23.5 0.5,22.157 0.5,20.5 L0.5,0.5 L17.5,0.5 L17.5,20.5 C17.5,22.157 18.844,23.5 20.5,23.5 C22.157,23.5 23.5,22.157 23.5,20.5 L23.5,3.5 L19.5,3.5" id="Stroke-6111"></path></svg>
    );
  }
  else if (type == 'peace') {
    return (
      <svg style={style} size="16" className="icon icon--Peace" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><g transform="matrix(1,0,0,1,0,0)"><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.5,3.642a8.5,8.5,0,0,1,6.24,11.877L13.5,9.354Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.5,13.6l4.471,4.455A8.529,8.529,0,0,1,13.5,20.365Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.33,15.549,10.5,9.354V3.635A8.517,8.517,0,0,0,3.5,12,7.583,7.583,0,0,0,4.33,15.549Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5,20.364a8.543,8.543,0,0,1-4.463-2.306L10.5,13.6Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    );
  }
  else if (type == 'pop culture') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Pop Culture" aria-hidden="true"><g><path d="M23.5,12.11a7,7,0,0,1-3.27,5.59.26.26,0,0,1-.32,0,.27.27,0,0,1-.05-.31A2.71,2.71,0,0,0,20,17c.65-1.4.5-2.85-.34-3.25s-2,.41-2.67,1.77c.06-.93-.26-1.7-.86-1.88-1.27-.4-1.77,1.24-4.17,5.44-2.44-4.27-2.9-5.84-4.17-5.44-.6.18-.92.95-.86,1.88-.66-1.36-1.84-2.15-2.67-1.77S3.31,15.63,4,17a2.71,2.71,0,0,0,.18.34.27.27,0,0,1,0,.31.26.26,0,0,1-.32,0A7,7,0,0,1,.5,12.11C.5,8.93,3.17,6.18,7,4.9a.25.25,0,0,1,.32.3L7,6.73a3.37,3.37,0,0,0,.78,3,1,1,0,0,0,1.1.28,1,1,0,0,0,.65-.94V5.61a.25.25,0,0,1,.4-.2l1.6,1.2h1l1.6-1.2a.25.25,0,0,1,.4.2V9.05a1,1,0,0,0,.65.94,1,1,0,0,0,1.1-.28,3.35,3.35,0,0,0,.78-3L16.65,5.2A.25.25,0,0,1,17,4.9C20.83,6.18,23.5,8.93,23.5,12.11Z"></path></g></svg>
    );
  }
  else if (type == 'speaker') {
    return (
      <svg style={style} size="16" className="icon icon--Speaker" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5005,21.5 C13.5005,22.604 12.6055,23.5 11.5005,23.5 L2.5005,23.5 C1.3955,23.5 0.5005,22.604 0.5005,21.5 L0.5005,2.5 C0.5005,1.396 1.3955,0.5 2.5005,0.5 L11.5005,0.5 C12.6055,0.5 13.5005,1.396 13.5005,2.5 L13.5005,21.5 L13.5005,21.5 Z" id="Stroke-5155" strokeLinecap="round"></path><line x1="13.5005" y1="19.5" x2="0.5005" y2="19.5" id="Stroke-5156" strokeLinecap="round"></line><line x1="13.5005" y1="4.5" x2="0.5005" y2="4.5" id="Stroke-5157" strokeLinecap="round"></line><line x1="4.5005" y1="2.5" x2="9.5005" y2="2.5" id="Stroke-5158" strokeLinecap="round"></line><path d="M7.0005,22 C6.7245,22 6.5005,21.776 6.5005,21.5 C6.5005,21.224 6.7245,21 7.0005,21 C7.2765,21 7.5005,21.224 7.5005,21.5 C7.5005,21.776 7.2765,22 7.0005,22 L7.0005,22 Z" id="Stroke-5159"></path></svg>
    );
  }
  else if (type == 'universe') {
    return (
      <svg style={style} size="16" className="icon icon--Universe" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 25 24" overflow="visible" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><g transform="matrix(1,0,0,1,0,0)"><path d="M5.33,17.848A9.545,9.545,0,0,1,16.466,2.488" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.982,17.78C.769,19.905.363,21.554,1.048,22.24c1.04,1.039,4.294-.43,8.062-3.418" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.423,18.067l-3.58-3.58L17.8,6.53A5.054,5.054,0,0,1,20.153,5.2L22.2,4.686a.844.844,0,0,1,1.023,1.023l-.512,2.048a5.059,5.059,0,0,1-1.332,2.352Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.843,14.487,6.911,13.51a.422.422,0,0,1-.165-.7l1.022-1.022a3.383,3.383,0,0,1,3.462-.817l1.6.532Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.423,18.067,14.4,21a.422.422,0,0,0,.7.165l1.022-1.022a3.383,3.383,0,0,0,.817-3.462l-.532-1.6Z" fill="none" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    );
  }
  else if (type == 'gaming') {
    return (
      <svg style={style} size="16" className="icon icon--Gaming" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><g><path d="M17.5,9 C17.5,4.307 13.694,0.5 9,0.5 C4.306,0.5 0.5,4.307 0.5,9 L0.5,22.5 C0.5,23.051 0.95,23.5 1.5,23.5 L2,23.5 C2.551,23.5 3,23.051 3,22.5 C3,21.951 3.45,21.5 4,21.5 C4.551,21.5 5,21.951 5,22.5 C5,23.051 5.45,23.5 6,23.5 L7,23.5 C7.551,23.5 8,23.051 8,22.5 C8,21.951 8.45,21.5 9,21.5 C9.551,21.5 10,21.951 10,22.5 C10,23.051 10.45,23.5 11,23.5 L12,23.5 C12.551,23.5 13,23.051 13,22.5 C13,21.951 13.45,21.5 14,21.5 C14.551,21.5 15,21.951 15,22.5 C15,23.051 15.45,23.5 16,23.5 L16.5,23.5 C17.051,23.5 17.5,23.051 17.5,22.5 L17.5,9 L17.5,9 Z" id="Stroke-939"></path><path d="M13.5,12 C13.5,12.826 12.825,13.5 12,13.5 C11.176,13.5 10.5,12.826 10.5,12 L10.5,9 C10.5,8.176 11.176,7.5 12,7.5 C12.825,7.5 13.5,8.176 13.5,9 L13.5,12 L13.5,12 Z" id="Stroke-940"></path><path d="M11.5,11 C11.5,11.277 11.276,11.5 11,11.5 C10.724,11.5 10.5,11.277 10.5,11 C10.5,10.725 10.724,10.5 11,10.5 C11.276,10.5 11.5,10.725 11.5,11 L11.5,11 Z" id="Stroke-941"></path><path d="M7.5,12 C7.5,12.826 6.825,13.5 6,13.5 C5.176,13.5 4.5,12.826 4.5,12 L4.5,9 C4.5,8.176 5.176,7.5 6,7.5 C6.825,7.5 7.5,8.176 7.5,9 L7.5,12 L7.5,12 Z" id="Stroke-942"></path><path d="M5.5,11 C5.5,11.277 5.276,11.5 5,11.5 C4.724,11.5 4.5,11.277 4.5,11 C4.5,10.725 4.724,10.5 5,10.5 C5.276,10.5 5.5,10.725 5.5,11 L5.5,11 Z" id="Stroke-943"></path></g></svg>
    );
  }
  else if (type == 'music') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--MusicCategory" aria-hidden="true"><g><path d="M19.8 6.267a1 1 0 01-1.414 0l-1.411-1.414a1 1 0 010-1.415l.186-.186a1 1 0 01.391-.242l4.536-1.51a.927.927 0 01.949 1.535z"></path><path d="M16.975 4.853L9.55 12.277l1.414 1.414 7.425-7.424"></path><path d="M11.187 10.64a2.881 2.881 0 01-.8-2.538 6.278 6.278 0 01.738-1.99A1.15 1.15 0 009.3 4.749a6.56 6.56 0 00-1.91 3.406c-.22 1.038-1 2.463-2.1 2.485a4.638 4.638 0 00-4.6 4.746 5.927 5.927 0 001.812 4.249l1.1 1.1a5.93 5.93 0 004.249 1.812 4.639 4.639 0 004.746-4.6c0-1.1 1.235-1.789 2.286-1.755a4.13 4.13 0 003.324-1.269 1.1 1.1 0 00-.719-1.846c-3.306-.254-4-.141-4.891-1.029M7.782 13.338l2.122 2.121"></path><path d="M4.954 14.753l3.535 3.535-1.768 1.768-3.535-3.535z"></path></g></svg>
    );
  }
  else if (type == 'lifestyle') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Lifestyle" aria-hidden="true"><path d="M8.906,8.611c1.116,1.278,1.285,2.824,1.61,4.761"></path><path d="M15.716,9.317c-.323,1.42-.689,2.852-.936,4.288"></path><path d="M10.93,3.98a1.75,1.75,0,0,0-2.664-1.5,1.748,1.748,0,0,0,.026-.261,1.759,1.759,0,0,0-3.518,0,1.748,1.748,0,0,0,.026.261,1.755,1.755,0,1,0-.953,3.257A1.753,1.753,0,1,0,6.533,7.894,1.753,1.753,0,1,0,9.219,5.735,1.759,1.759,0,0,0,10.93,3.98Z"></path><path d="M21.861,4.846a1.647,1.647,0,0,0-2.508-1.411,1.552,1.552,0,0,0,.024-.245,1.656,1.656,0,1,0-3.312,0,1.553,1.553,0,0,0,.025.245,1.652,1.652,0,1,0-.9,3.067A1.65,1.65,0,1,0,17.721,8.53a1.65,1.65,0,1,0,2.91-1.558A1.632,1.632,0,0,0,20.25,6.5,1.655,1.655,0,0,0,21.861,4.846Z"></path><path d="M15.169,15.265A5.643,5.643,0,0,1,12,19.291c-.355-1.493-3.135-3.5-1.707-5.658.705-1.065,2.384-.687,2.384-.687C14.481,12.883,15.415,13.753,15.169,15.265Z"></path><path d="M20.448,13.532a5.639,5.639,0,0,1-.782,5.062c-1.041-1.126-4.449-1.509-4.265-4.09.091-1.273,1.739-1.769,1.739-1.769C18.679,11.8,19.92,12.094,20.448,13.532Z"></path><path d="M7.938,13.2s1.661.449,1.788,1.719c.256,2.575-3.139,3.054-4.149,4.209a5.645,5.645,0,0,1-.924-5.039C5.141,12.64,6.373,12.306,7.938,13.2Z"></path><path d="M18.823,17.994l-.951,4.758a.983.983,0,0,1-.964.785H8.7a.982.982,0,0,1-.963-.785l-.9-4.487"></path><circle cx="6.566" cy="4.779" r="1"></circle><circle cx="17.723" cy="5.472" r="1"></circle></svg>
    );
  }
  else if (type == 'comedy') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Comedy" aria-hidden="true"><path d="M2.000 13.500 A10.000 10.000 0 1 0 22.000 13.500 A10.000 10.000 0 1 0 2.000 13.500 Z"></path><path d="M2.834,9.495A2.5,2.5,0,0,1,1.5,5,2.5,2.5,0,1,1,5,1.5,2.5,2.5,0,0,1,9.35,3.855"></path><path d="M21.166,9.495A2.5,2.5,0,0,0,22.5,5,2.5,2.5,0,1,0,19,1.5a2.5,2.5,0,0,0-4.35,2.355"></path><path d="M8.500 14.000 A3.500 3.500 0 1 0 15.500 14.000 A3.500 3.500 0 1 0 8.500 14.000 Z"></path><path d="M18.5,14a6.5,6.5,0,0,1-13,0"></path><path d="M8.5 7L8.5 10"></path><path d="M10 8.5L7 8.5"></path><path d="M15.5 7L15.5 10"></path><path d="M17 8.5L14 8.5"></path></svg>
    );
  }
  else if (type == 'artists') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Artists" aria-hidden="true"><g><path d="M10.107,16.884,22.372,4.657a2.5,2.5,0,0,0-3.744-3.314L7.954,15.04"></path><path d="M1.285,22.879a.5.5,0,0,1,.027-.915C3.693,21,2.926,18.286,3.633,16.835a3.56,3.56,0,0,1,4.728-1.627C13.677,17.8,7.349,25.765,1.285,22.879Z"></path></g></svg>
    );
  }
  else if (type == 'sports') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Sports" aria-hidden="true"><svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g transform="matrix(2,0,0,2,0,0)"><circle cx="12" cy="12" r="11.5"></circle><path d="M3.59,19.85C5,15.6,9.28,6.37,20.47,4.24"></path><path d="M3.46,4.29C8,5.94,16.56,10.52,18.37,21.58"></path><path d="M10.54.59A8.52,8.52,0,0,1,.81,9.42"></path><path d="M11.79,23.5C7,15.82,15.94,6.89,23.5,11.7"></path></g></svg></svg>
    );
  }
  else if (type == 'rabbithole') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="icon icon--RabbitHole" aria-hidden="true"><path d="M17.865,21.451a.5.5,0,0,1-.488.609H6.123a.5.5,0,0,1-.488-.609L7.5,13.06H16Z"></path><path d="M4 13.06L20 13.06"></path><path d="M6.611 17.06L16.889 17.06"></path><path d="M11,13.06a47.171,47.171,0,0,0-1.5-8c-.851-2.554-2.077-3.474-3.5-3-1.5.5-1,2-.5,4s2.5,7,2.5,7"></path><path d="M15,13.06l1.067-3.18a4.529,4.529,0,0,0,.943.37c1.195.318,2.263-.393,1.7-1.683A7.652,7.652,0,0,0,16.648,6.02C16,5.446,14.9,4.456,13.972,5.071,12.216,6.241,11.5,13.06,11.5,13.06"></path></svg>
    );
  }
  else if (type == 'heart') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="currentColor" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Heart" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    );
  }
  else if (type == 'home') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Home" aria-hidden="true"><g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M1, 11 L12, 2 C12, 2 22.9999989, 11.0000005 23, 11"></path><path d="M3, 10 C3, 10 3, 10.4453982 3, 10.9968336 L3, 20.0170446 C3, 20.5675806 3.43788135, 21.0138782 4.00292933, 21.0138781 L8.99707067, 21.0138779 C9.55097324, 21.0138779 10, 20.5751284 10, 20.0089602 L10, 15.0049177 C10, 14.449917 10.4433532, 14 11.0093689, 14 L12.9906311, 14 C13.5480902, 14 14, 14.4387495 14, 15.0049177 L14, 20.0089602 C14, 20.5639609 14.4378817, 21.0138779 15.0029302, 21.0138779 L19.9970758, 21.0138781 C20.5509789, 21.0138782 21.000006, 20.56848 21.000006, 20.0170446 L21.0000057, 10"></path></g></svg>
    );
  }
  else if (type == 'trash') {
      return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Trash" aria-hidden="true"><g><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></g></svg>
      );
  }
  else if (type == 'sticker') {
      return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Sticker" aria-hidden="true"><g><path d="M7.13,9a.38.38,0,1,1-.38.38A.38.38,0,0,1,7.13,9"></path><path d="M5.51,15.42A7.34,7.34,0,0,0,12,19.34a7.83,7.83,0,0,0,.92-.06"></path><path d="M23.24,11.52A11.25,11.25,0,1,0,12,23.25h.5"></path><path d="M14.45,9.66a2.31,2.31,0,0,1,3.91,0"></path><line x1="23.24" y1="11.52" x2="12.5" y2="23.24"></line><path d="M12.5,23.24v-1A10.74,10.74,0,0,1,23.24,11.52"></path></g></svg>
      );
  }
  else if (type == 'menu') {
    return (
      <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 -4 24 24" overflow="visible" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon--Menu" aria-hidden="true"><g><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></g></svg>
    );    
  }
  else if (type == 'unlock') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Unlock"
        aria-hidden="true"
      >
        <g>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'edit') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Edit"
        aria-hidden="true"
      >
        <g>
          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </g>
      </svg>
    );
  }
  else if (type == 'morevertical') {
    return (
      <svg style={style}
        size="20"
        className="icon icon--MoreVertical"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="20"
        height="20"
        fill="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g>
          <circle cx="12" cy="5" r="2"></circle>
          <circle cx="12" cy="12" r="2"></circle>
          <circle cx="12" cy="19" r="2"></circle>
        </g>
      </svg>
    );
  }
  else if (type == 'playlistadd') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 9 24 24"
        overflow="visible"
        width="12"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--PlaylistAdd"
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
  else if (type == 'playlist') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 9 24 24"
        overflow="visible"
        width="12"
        height="16"
        fill="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        className="icon icon--Playlist"
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
  else if (type == 'chevrondown') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--ChevronDown"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    );
  }
  else if (type == 'chevronright') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--ChevronRight"
        aria-hidden="true"
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </g>
      </svg>
    );
  }
  else if (type == 'livestream') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Video"
        aria-hidden="true"
      >
        <g>
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </g>
      </svg>
    );
  }
  else if (type == 'post') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Post"
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
  else if (type == 'signout') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--SignOut"
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
  else if (type == 'helpcircle') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--HelpCircle"
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
  else if (type == 'upgrade') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Upgrade"
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
  else if (type == 'users') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Users"
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
  else if (type == 'award') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Award"
        aria-hidden="true"
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </g>
      </svg>
    );
  }
  else if (type == 'testtube') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--BarChart2"
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
  else if (type == 'youtube') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Youtube"
        aria-hidden="true"
      >
        <g>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </g>
      </svg>
    );
  }
  else if (type == 'atsign') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--AtSign"
        aria-hidden="true"
      >
        <g>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'dollar') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--DollarSign"
        aria-hidden="true"
      >
        <g>
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'wallet') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        overflow="visible"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--List"
        aria-hidden="true"
      >
        <g>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </g>
      </svg>
    );
  }
  else if (type == 'cogwheel') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        overflow="visible"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Settings"
        aria-hidden="true"
      >
        <g>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'bell') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        overflow="visible"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Bell"
        aria-hidden="true"
      >
        <g>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'key') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        overflow="visible"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--Key"
        aria-hidden="true"
      >
        <g>
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </g>
      </svg>
    );
  }
  else if (type == 'person') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--User"
        aria-hidden="true"
      >
        <g>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </g>
      </svg>
    );
  }
  else if (type == 'uploadcloud') {
    return (
      <svg style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -4 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        overflow="visible"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon--UploadCloud"
        aria-hidden="true"
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="round">
          <path
            d="M8, 18 L5, 18 L5, 18 C2.790861, 18 1, 16.209139 1, 14 C1, 11.790861 2.790861, 10 5, 10 C5.35840468, 10 5.70579988, 10.0471371 6.03632437, 10.1355501 C6.01233106, 9.92702603 6, 9.71495305 6, 9.5 C6, 6.46243388 8.46243388, 4 11.5, 4 C14.0673313, 4 16.2238156, 5.7590449 16.8299648, 8.1376465 C17.2052921, 8.04765874 17.5970804, 8 18, 8 C20.7614237, 8 23, 10.2385763 23, 13 C23, 15.7614237 20.7614237, 18 18, 18 L16, 18"
            strokeLinejoin="round"
          ></path>
          <path d="M12, 13 L12, 21"></path>
          <polyline
            strokeLinejoin="round"
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
  var style = {width: props.width, height: props.height};
  return props.color !== undefined ? <span style={{color:props.color}}>{getIcon(props.type, style)}</span> : getIcon(props.type, style);
}
