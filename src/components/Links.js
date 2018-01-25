import React from 'react';
import Section from './common/Section.js';
import { ButtonGroup, Button } from 'react-bootstrap';

const links = [
  {
    url: 'https://github.com/kdxu',
    title: 'GitHub',
    icon: 'fa fa-github-alt'
  },
  {
    url: 'https://keybase.io/kdxu',
    title: 'Keybase',
    icon: 'fa fa-key'
  },
  {
    url: 'https://dev.to/kdxu',
    title: 'dev.to',
    icon: 'fa fa-file'
  },
  {
    url: 'https://medium.com/@kdxu',
    title: 'Medium(blog)',
    icon: "fa fa-medium"
  },
];

export default () => (
  <Section
    title="Links"
    children={
      <ButtonGroup vertical>
        {links.map(link => (
          <Button bsStyle="link" href={link.url}>
          <div line-height="1.5em">
            <i class={link.icon} aria-hidden="true"></i>
            {' '}
            <span>{link.title}</span>
          </div>
          </Button>
        ))}
      </ButtonGroup>
    }
  />
);
