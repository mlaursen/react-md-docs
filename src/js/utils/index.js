import React from 'react';
import Avatar from 'react-md/lib/Avatars';

export const GITHUB_LINK = 'https://github.com/mlaursen/react-md';

export function randomImage({ width, height, time, section } = { width: 40 }) {
  width = !width ? 40 : width;
  height = !height ? width : height;
  section = !section ? '' : section;
  time = typeof time === 'undefined' ? Date.now() : time;


  const size = `${width}/${height}`;
  if(section) {
    return `http://lorempixel.com/${size}/${section}`;
  } else {
    return `https://unsplash.it/${width}/${height}/?random&time=${time}`;
  }
}

export function randomImages(amt, options = { width: 40 }) {
  const time = Date.now();
  return Array.apply(null, new Array(amt)).map((_, i) => {
    return randomImage(Object.assign({}, options, { time: time + i }));
  });
}

export function randomAvatars(amt, className) {
  return randomImages(amt).map(src => <Avatar key={src} src={src} className={className} />);
}

export function getViewSize() {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const b = document.getElementsByTagName('body')[0];
  return {
    width: w.innerWidth || e.clientWidth || b.clientWidth,
    height: w.innerHeight || e.clientHeight || b.clientHeight,
  };
}

export function flatten(arr) {
  return arr.reduce((flattened, toFlatten) => {
    return flattened.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

export function getRandomBoolean() {
  return Math.random() < .5;
}

export function getRandomBooleans(size) {
  return Array.apply(null, new Array(size)).map(() => getRandomBoolean());
}

export function getRandomInt({ min, max } = { min: 0, max: 10 }) {
  return Math.floor(Math.random() * max) + min;
}

export function sort(arr, key, ascending) {
  const list = arr.slice();
  const multiplier = ascending ? 1 : -1;

  list.sort((prev, curr) => {
    const v1 = prev[key];
    const v2 = curr[key];

    if(typeof v1 === 'number') {
      return v1 < v2 ? 1 : -1;
    } else {
      return v1.localeCompare(v2) * multiplier;
    }
  });

  return list;
}
