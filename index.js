function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
        return pickupLocation - 42
    }

    else if (pickupLocation < 42) {
        return 42 - pickupLocation
    }
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)  * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    }

    else if (destination > start) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
   let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    }

    else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * .02
    }

    else if (feet > 2000 && feet <= 2500) {
        return 25
    }

    else if (feet > 2500) {
        return 'cannot travel that far'
    }
}

