import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { capitalizeFirst } from '../../utils/StringUtils';
import { randomImage, randomImages, getRandomInt, getRandomBoolean } from '../../utils';
import NewsItem from './NewsItem';
import loremIpsum from 'lorem-ipsum';

const news = [{
  title: 'Day reappeared. The tempest still raged with undimished termoil.',
  subtitle: 'Corned beef proscuitto ground something',
  time: '10 min',
  titleClassName: 'two-line-clamp',
  subtitleClassName: 'line-clamp',
}, {
  title: 'There were some signs of a calm at noon.',
  subtitle: 'Things to enjoy.',
  time: '1 hr',
  titleClassName: 'two-line-clamp',
  subtitleClassName: 'line-clamp',
}, {
  title: 'Fun tropical escapes',
  subtitle: 'The night was comparatively quiet. Some of the sails were again.',
  time: '1 hr',
  titleClassName: 'line-clamp',
  subtitleClassName: 'two-line-clamp',
}, {
  title: 'Pork loin sausage shankle, keilbasas bacon beef rips',
  subtitle: 'Drumstick turkey shoulder spare parts',
  time: '1 hr',
  titleClassName: 'line-clamp',
  subtitleClassName: 'two-line-clamp',
}, {
  title: 'Cherry blossoms in bloom',
  subtitle: 'Krieger-san. My cherry blossoms... are wilting!',
  time: '2 hr',
  titleClassName: 'line-clamp',
  subtitleClassName: 'two-line-clamp',
}].concat(Array.apply(null, new Array(8)).map((_, i) => {
  const b = getRandomBoolean();

  return {
    title: capitalizeFirst(loremIpsum({
      count: getRandomInt({ min: 4, max: b ? 10 : 5 }),
      units: 'words',
    })),
    subtitle: capitalizeFirst(loremIpsum({
      count: b ? 5 : 1,
      units: b ? 'words' : 'paragraphs',
    })),
    time: `${i + 2} hr`,
    titleClassName: `${b ? 'two-' : ''}line-clamp`,
    subtitleClassName: `${b ? '' : 'two-'}line-clamp`,
    img: randomImage({ width: 100, height: 80, time: i }),
  };
}));

const imgs = randomImages(news.length, { width: 100, height: 80 });
news.forEach((news, i) => {
  news.img = imgs[i];
});

export default class NewsStand extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const newsItems = news.map((props, i) => <NewsItem {...props} key={i} />);
    return (
      <div>
        {newsItems}
      </div>
    );
  }
}
