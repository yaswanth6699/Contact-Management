export const convertToMillion = (val: number) => {
  const million = (val / 1000000).toFixed(0);
  return `${million}M`;
};
