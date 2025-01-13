export const extractUniqueNames = data => {
  const uniqueSet = new Set();
  data.forEach(item => {
    if (item.state) uniqueSet.add(item.state.toLowerCase());
    if (item.cityName) uniqueSet.add(item.cityName.toLowerCase());
    if (item.countyName) uniqueSet.add(item.countyName.toLowerCase());
  });
  return Array.from(uniqueSet);
};
