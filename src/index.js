export default (arr, key) => {
  if (!arr || !Array.isArray(arr)) {
    throw new Error('The first parameter must be an array')
  }
  if (!key) throw new Error('The second parameter must be supplied')
  return arr.reduce((p, c) => {
    if (c[key]) {
      return [...p, c[key]]
    }
    return p
  }, [])
}
