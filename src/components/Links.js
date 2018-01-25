import React from 'react';
import Section from './common/Section.js';
import { ButtonGroup, Button } from 'react-bootstrap';

const links = [
  {
    url: 'https://github.com/kdxu',
    title: 'GitHub',
  },
  {
    url: 'https://keybase.io/kdxu',
    title: 'Keybase',
  },
  {
    url: 'https://dev.to/kdxu',
    title: 'dev.to',
  },
  {
    url: 'https://medium.com/@kdxu',
    title: 'Medium(blog)',
  },
];

export default () => (
  <Section
    title="Links"
    children={
      <ButtonGroup vertical>
        {links.map(link => (
          <Button bsStyle="link" href={link.url}>
            {link.title}
          </Button>
        ))}
      </ButtonGroup>
    }
  />
);
