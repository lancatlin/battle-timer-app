export default () => {
  const color = Array.from([0, 0, 0], () => Math.floor(Math.random() * 151 + 50))
  return `rgb(${color.join(', ')})`
}