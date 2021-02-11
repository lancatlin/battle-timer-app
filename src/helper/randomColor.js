export default () => {
  const color = Array.from([0, 0, 0], () => Math.random() * 150 + 50)
  return `rgb(${color.join(', ')})`
}