// Code your solution in this file!
function distanceFromHqInBlocks(start){
 return Math.abs(start - 42)
}

function distanceFromHqInFeet(start){
    return (distanceFromHqInBlocks(start) * 264)
}

function distanceTravelledInFeet(start,end){
    return (Math.abs(start-end) * 264)
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2000 ){
        return 2.56
    }
    else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500 ){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}