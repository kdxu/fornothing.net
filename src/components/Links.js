import React from 'react';
import Section from './common/Section.js';
import { ButtonGroup, Button } from 'react-bootstrap';

const links = [
  {
    key: 1,
    url: 'https://github.com/kdxu',
    title: 'GitHub',
    icon: 'fa fa-github-alt',
  },
  {
    key: 2,
    url: 'https://keybase.io/kdxu',
    title: 'Keybase',
    icon: 'fa fa-key',
  },
  {
    key: 3,
    url: 'https://dev.to/kdxu',
    title: 'dev.to',
    icon: 'fa fa-file',
  },
  {
    key: 4,
    url: 'https://medium.com/@kdxu',
    title: 'Medium(blog)',
    icon: 'fa fa-medium',
  },
];

export default () => (
  <Section
    title="Links"
    children={
      <ButtonGroup>
        {links.map(link => (
          <Button bsStyle="link" href={link.url} key={link.key}>
            <div line-height="1.5em">
              <i className={link.icon} aria-hidden="true" /> <span>{link.title}</span>
            </div>
          </Button>
        ))}
      </ButtonGroup>
    }
  />
);
