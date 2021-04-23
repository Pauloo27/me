// eslint-disable-next-line import/prefer-default-export
export const group = (arr, groupSize) => new Array(Math.ceil(arr.length / groupSize)).fill([])
  .map((_g, i) => arr.slice(i * groupSize, (i * groupSize) + groupSize));
