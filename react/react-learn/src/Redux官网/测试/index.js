import store from "../index"
const selectCounterValue = state => state.number

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
