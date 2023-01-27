export const actionCreator = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  playoad: increment,
})

export const clickCounter = () => ({
  type: 'INCREMENT_CLICK',
});