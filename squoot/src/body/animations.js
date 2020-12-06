

let mobile = (thisReplace) => {

    let interval = setInterval(() => {
        if (thisReplace.state.width > 360){
            thisReplace.setState({width: thisReplace.state.width - 10})
        } else {
            clearInterval(interval)
        }
        
    }, 10)
    

    //thisReplace.setState({width: 360, height: 620})
}

let desktop = (thisReplace) => {
    thisReplace.setState({width: window.innerWidth, height: 1080})
}

export {
    mobile,
    desktop
}