import React from 'react';
import Section from './common/Section.js';

const works = [
  {
    key: 1,
    url: 'https://github.com/kdxu/memkash',
    title: 'memkash(2018)',
    description: 'elixir の memcached クライアント',
  },
  {
    key: 2,
    url: 'https://github.com/kdxu/loggix',
    title: 'loggix(2017)',
    description: 'elixir の logger バックエンドライブラリ',
  },
  {
    key: 3,
    url: 'https://github.com/ggthq/weeping',
    title: 'Weeping(2017)',
    description: 'Argo にインスパイアされた BuckleScript 製の JSON {Decoder/Encoder}',
  },
  {
    key: 4,
    url: 'https://github.com/kdxu/InferAgda',
    title: 'InferAgda(2016)',
    description: 'Agda で正当性を証明した型推論器',
  },
  {
    key: 5,
    url: 'https://etahapi.github.io/ika/',
    title: 'ika simulator(2016)',
    description: 'イカの人工無能 with Processing',
  },
  {
    key: 6,
    url: 'https://kdxu.fornothing.net/#/gifs',
    title: 'Gifs(20xx)',
    description: 'AfterEffects 習作GIF置き場',
  },
  {
    key: 7,
    url: 'https://github.com/kdxu/zodiac_tabs',
    title: 'zodiac_tabs',
    description: 'google chrome のタブを全て黄道十二星座にする拡張スクリプト',
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
