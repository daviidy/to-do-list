const index = () => {
  const values = {};
  const keys = Object.keys(localStorage);
  let i = keys.length;
  while (i--) {
    values[keys[i]] = localStorage.getItem(keys[i]);
  }
  return values;
};

export default index;
