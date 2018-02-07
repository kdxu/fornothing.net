import React from 'react';
import Section from './common/Section.js';

const works = [
  {
    key: 1,
    url: 'https://github.com/kdxu/loggix',
    title: 'Loggix(2017)',
    description: 'Elixir の Logger バックエンドライブラリ',
  },
  {
    key: 2,
    url: 'https://github.com/ggthq/weeping',
    title: 'Weeping(2017)',
    description: 'Argo にインスパイアされた BuckleScript 製の JSON {Decoder/Encoder}',
  },
  {
    key: 3,
    url: 'https://github.com/kdxu/InferAgda',
    title: 'InferAgda(2016)',
    description: 'Agda で正当性を証明した型推論器',
  },
  {
    key: 4,
    url: 'https://etahapi.github.io/ika/',
    title: 'ika simulator(2016)',
    description: 'イカの人工無能 with Processing',
  },
  {
    key: 5,
    url: 'https://kdxu.fornothing.net/#/gifs',
    title: 'Gifs(20xx)',
    description: 'AfterEffects 習作GIF置き場',
  },
];

export default () => (
  <Section
    title="Personal Works"
    children={works.map(work => (
      <div key={work.key}>
        <h4>
          <a href={work.url}>{work.title}</a>
        </h4>
        <p>{work.description}</p>
      </div>
    ))}
  />
);
