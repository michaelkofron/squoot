import './header.css'
import React from "react"

export default class Input extends React.Component {
    state = {
        inputValue: "https://www.thesafebrowser.com",
    }

    getRandom = () => {
        return "?r=" + Math.random().toString(36).substring(7);
    }

    changeIframe = () => {
        let frame = document.getElementsByClassName("frame")[0]
        frame.setAttribute("src", this.state.inputValue + this.getRandom())
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value}, this.changeIframe)
    }


    render () {
        return <input type='text' value={this.state.inputValue} onChange={this.handleChange} />
    }
}