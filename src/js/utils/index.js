import React from 'react';
import Avatar from 'react-md/lib/Avatars';


// Replaced at build time
export const APP_URI_BASE = process.env.APP_URI_BASE; //eslint-disable-line no-undef
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

export function randomAvatars(amt) {
  return randomImages(amt).map(src => <Avatar key={src} src={src} />);
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

export function polyfillIntlLang(lang) {
  /*eslint-env node*/
  require(`intl/locale-data/jsonp/${lang}`);
}

export function polyfillIntlOSLang() {
  let lang = window.navigator.userLanguage || window.navigator.language;
  const [prefix, suffix] = lang.split('-');
  if(suffix) {
    lang = `${prefix}-${suffix.toUpperCase()}`;
  }

  polyfillIntlLang(lang);
}

export function smoothScroll(el, duration, to, interval = 10) {
  if(duration < 0) { return; }

  const difference = to - el.scrollTop;
  const tick = difference / duration * interval;

  setTimeout(() => {
    el.scrollTop = el.scrollTop + tick;

    if((el.scrollTop) === 0) { return; }
    smoothScroll(el, duration - interval, to, interval);
  }, interval);
}

export function flatten(arr) {
  return arr.reduce((flattened, toFlatten) => {
    return flattened.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
