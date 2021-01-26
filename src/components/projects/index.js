const index = () => {
  let values = {}
  let keys = Object.keys(localStorage),
  i = keys.length
  while(i--){
    values[keys[i]] = localStorage.getItem(keys[i])
  }
  return values 
}

export default index
