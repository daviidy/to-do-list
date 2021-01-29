const index = () => {
  const values = {};
  const keys = Object.keys(localStorage);
  const i = keys.length;
  while (i - 1) {
    values[keys[i]] = localStorage.getItem(keys[i]);
  }
  return values;
};

export default index;
