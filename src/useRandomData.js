import data from './data'

const randFloat = (floor, ceil, precision = 2) => {
    const precisionValue = 10 ** precision
    const randomFloat = floor + (Math.random() * (ceil - floor))
    return Math.round(randomFloat * precisionValue) / precisionValue
}

const randInt = (floor, ceil) => {
    return randFloat(floor, ceil, 0)
}

export const randomData = () => {
}