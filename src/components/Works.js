import React from 'react';
import Section from './common/Section.js';
import { ButtonGroup, Button } from 'react-bootstrap';

const works = [
  {
    url: 'https://github.com/kdxu/loggix',
    title: 'Loggix(2017)',
    description: 'Elixir の Logger バックエンドライブラリ',
  },
  {
    url: 'https://github.com/ggthq/weeping',
    title: 'Weeping(2017)',
    description: 'Argo にインスパイアされた BuckleScript 製の JSON {Decoder/Encoder}',
  },
  {
    url: 'https://github.com/kdxu/InferAgda',
    title: 'InferAgda(2016)',
    description: 'Agda で正当性を証明した型推論器',
  },
  {
    url: 'https://etahapi.github.io/ika/',
    title: 'ika simulator(2016)',
    description: 'イカの人工無能 with Processing',
  },
  {
    url: 'https://kdxu.fornothing.net/#/gifs',
    title: 'Gifs(20xx)',
    description: 'AfterEffects 習作GIF置き場',
  },
];

export default () => (
  <Section
    title="Personal Works"
    children={works.map(work => (
      <div line-height="1.0em">
        <h4>
          <a href={work.url}>{work.title}</a>
        </h4>
        <p> {work.description} </p>
      </div>
    ))}
  />
);
