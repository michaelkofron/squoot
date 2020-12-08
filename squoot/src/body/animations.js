let highestDivisible = (number) => {
    let highest

    for (let i = 1; i <= 50; i++){
        if (number % i === 0){
            highest = i
        }
    }

    return highest
}

let widthChange = (context, desiredWidth) => {

    console.log(context.state.width)
    console.log(desiredWidth)
    if (context.state.width > desiredWidth){
        console.log("less")
        let difference = desiredWidth - context.state.width
        let step = highestDivisible(difference)
        let interval = setInterval(() => {
            if (context.state.width !== desiredWidth){
                context.setState({width: context.state.width - step})
            } else {
                clearInterval(interval)
            }
        }, 25)
    } else {
        let difference = context.state.width - desiredWidth
        let step = highestDivisible(difference)
        let interval = setInterval(() => {
            if (context.state.width !== desiredWidth){
                context.setState({width: context.state.width + step})
            } else {
                clearInterval(interval)
            }
        }, 25)
    }
}   

let heightChange = (context, desiredHeight) => {

    console.log(context.state.height)
    console.log(desiredHeight)
    if (context.state.height > desiredHeight){
        console.log("less")
        let difference = desiredHeight - context.state.height
        let step = highestDivisible(difference)
        let interval = setInterval(() => {
            if (context.state.height !== desiredHeight){
                context.setState({height: context.state.height - step})
            } else {
                clearInterval(interval)
            }
        }, 25)
    } else {
        let difference = context.state.height - desiredHeight
        let step = highestDivisible(difference)
        let interval = setInterval(() => {
            if (context.state.height !== desiredHeight){
                context.setState({height: context.state.height + step})
            } else {
                clearInterval(interval)
            }
        }, 25)
    }
}  

let mobile = (thisReplace) => {

    /*
    let interval = setInterval(() => {
        if (thisReplace.state.width > 360){
            thisReplace.setState({width: thisReplace.state.width - 10})
        } else {
            clearInterval(interval)
        }
        
    }, 10) */

    widthChange(thisReplace, 360)
    heightChange(thisReplace, 620)
    

    //thisReplace.setState({width: 360, height: 620})
}

let desktop = (thisReplace) => {
    widthChange(thisReplace, 1920)
    heightChange(thisReplace, 1080)
}

export {
    mobile,
    desktop
}