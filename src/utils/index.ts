export const convertToMillion = (val: number) => {
  const million = (val / 1000000).toFixed(0);
  return `${million}M`;
};

export const customEllipses = (val: string) => {
  return val.length > 13 ? val.slice(0, 13) + "..." : val;
};
