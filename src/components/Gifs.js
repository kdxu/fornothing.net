import React from 'react';
import Section from './common/Section';
import { Carousel, Well } from 'react-bootstrap';

const gifs = [
  {
    id: 1,
    url: '../gifs/flameotaku.gif',
    title: 'フレイム',
  },
  {
    id: 2,
    url: '../gifs/strobo.gif',
    title: 'ストロボ',
  },
  {
    id: 3,
    url: '../gifs/genkai.gif',
    title: '海',
  },
  {
    id: 4,
    url: '../gifs/metalic.gif',
    title: 'メタリック',
  },
];

export default () => (
  <div>
    <Section
      title="Gifs"
      children={
        <div>
          <Well>
            <Carousel>
              {gifs.map(gif => (
                <Carousel.Item key={gif.id}>
                  <img src={gif.url} alt={gif.title} />
                  <Carousel.Caption>
                    <h3>{gif.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Well>
          <div>
            <a
              href="https://twitter.com/intent/tweet?text=限界百合オタク&url=https://kdxu.fornothing.net/%23/gifs&hashtags=限界百合オタク"
              onClick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;"
              rel="nofollow"
              className="btn btn-social btn-twitter"
            >
              {' '}
              <span className="fa fa-twitter" />
              Tweet
            </a>
          </div>
        </div>
      }
    />
  </div>
);
