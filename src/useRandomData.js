import data from './data'

const randFloat = (floor, ceil, precision = 2) => {
    const precisionValue = 10 ** precision
    const randomFloat = floor + (Math.random() * (ceil - floor))
    return Math.round(randomFloat * precisionValue) / precisionValue
}

const randInt = (floor, ceil) => {
    return randFloat(floor, ceil, 0)
}

const randomFromArray = array => array[randInt(0, array.length - 1)]

export const randomData = () => {
    // get details from data using a random index
    const details = randomFromArray(data)

    // function to get x percentage of top speed
    const getSpeed = percentage => Math.round(percentage * details.topSpeed * 0.01)

    // get random charge percentage
    const percentage = randInt(5, 100)
    // get range based on charge percentage
    const range = Math.round(details.range * percentage / 100)
    // get charging status
    const isCharging = Boolean(randInt(0, 1))

    // get random tyre pressures
    const tyrePressures = Array.from(Array(2), () => randInt(30, 100))
    // get random image
    const image = randomFromArray(details.images)

    // get random odo-meter reading
    const odo = randFloat(100, 50_000, 1)
    // get random odo-meter reading
    const topSpeed = getSpeed(randInt(75, 100))
    // get random odo-meter reading
    const avgSpeed = getSpeed(randInt(30, 50))
    // get random odo-meter reading
    const bestEfficency = randInt(20, 25)
    // get random odo-meter reading
    const avgEfficency = randInt(25, 35)

    // create object with all data
    const randomDetails = {
        model: details.model,
        image,
        charge: {
            percentage,
            range,
            isCharging
        },
        tyrePressures,
        stats: {
            odo,
            speed: {
                best: topSpeed,
                average: avgSpeed
            },
            efficiency: {
                best: bestEfficency,
                average: avgEfficency
            }
        }
    }

    // if charging status is true calculate and add time left to details
    if (isCharging) {
        const timeLeft = Math.round(details.chargeTime * (100 - percentage) * 0.6)
        randomDetails.charge.timeLeft = timeLeft
    }

    return randomDetails
}