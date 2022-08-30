import React from 'react';

export default function CardRow({children}) {
  return (
    <div class="container" style={{ padding: 0 }}>
      <div className="row">
        {children}
      </div>
    </div>
  );
}
