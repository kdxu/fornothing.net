import React from 'react';
import './App.css';
import Section from './common/Section.js';
import { Carousel, Well } from 'react-bootstrap';

const gifs = [
  {
    url: '../gifs/flameotaku.gif',
    title: 'フレイム'
  },
  {
    url: '../gifs/strobo.gif',
    title: 'ストロボ'
  },
  {
    url: '../gifs/genkai.gif',
    title: '海'
  },
  {
    url: '../gifs/metalic.gif',
    title: 'メタリック'
  },
]

export default () => (
  <Section title="Gifs" children={
    <Well>
    <Carousel>
    {gifs.map(gif => (
      <Carousel.Item>
      <img src={gif.url} alt={gif.title}/>
      <Carousel.Caption>
      <h3>{gif.title}</h3>
      </Carousel.Caption>
      </Carousel.Item>
  ))}
    </Carousel>
    </Well>
  }
  />
);

