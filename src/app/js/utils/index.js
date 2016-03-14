import React from 'react';
import Avatar from 'react-md/lib/Avatars';


// Replaced at build time
export const APP_URI_BASE = process.env.APP_URI_BASE; //eslint-disable-line no-undef
export const GITHUB_LINK = 'https://github.com/mlaursen/react-md';

export function randomImage({ width, height, time } = { width: 40 }) {
  width = !width ? 40 : width;
  height = !height ? width : height;
  time = typeof time === 'undefined' ? Date.now() : time;

  return `https://unsplash.it/${width}/${height}/?random&time=${time}`;
}

export function randomImages(amt, options = { width: 40 }) {
  const time = Date.now();
  return Array.apply(null, new Array(amt)).map((_, i) => {
    return randomImage(Object.assign({}, options, { time: time + i }));
  });
}

export function randomAvatars(amt) {
  return randomImages(amt).map(src => <Avatar key={src} src={src} />);
}
