

let mobile = (thisReplace) => {

    thisReplace.setState({width: 360, height: 620})


}

let desktop = (thisReplace) => {
    thisReplace.setState({width: window.innerWidth, height: 1080})
}

export {
    mobile,
    desktop
}