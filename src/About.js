import React from 'react';
import Section from './common/Section.js';

const message = 
      'Kyoko Kadowaki. boxing, swimming, and running tiny company.';

export default () => (
  <Section title="About" children={message} />
);

