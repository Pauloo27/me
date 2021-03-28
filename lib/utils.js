export const group = (arr, groupSize) => new Array(Math.ceil(arr.length / groupSize)).fill([])
  .map((_g, i) => arr.slice(i * groupSize, (i * groupSize) + groupSize));

export const isMobile = () => window.screen.width <= 500;
