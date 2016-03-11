function capitalizeFirst(s) {
  return s.charAt(0).toUpperCase() + s.substring(1, s.length);
}

export function toTitle(s) {
  const joined = s.split('-').reduce((prev, curr) => {
    if(prev) {
      prev += ' ';
    }

    curr = capitalizeFirst(curr);
    return prev ? prev + curr : curr;
  });

  return capitalizeFirst(joined);
}
