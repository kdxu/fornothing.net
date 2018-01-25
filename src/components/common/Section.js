import React from 'react';

export default ({ title, children }) => (
  <div>
  <section>
  <h2>{title}</h2>
    <p>{children}</p>
  </section>
  </div>
);
