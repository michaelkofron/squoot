import React from "react"

import {horizontal, vertical} from './animations.js'

export default class Iframe extends React.Component {
    state = {
        width: 800,
        height: 800,
        src: "https://www.thesafebrowser.com?r=poidsas", 
        message: "Welcome! Please read the guide."
    }

    changeMessage = (message) => {
        this.setState({message: message})
        setInterval(() => {
            this.setState({message: ""})
        }, 5000)
    }

    getRandom = () => {
        return "?r=" + Math.random().toString(36).substring(7);
    }

    animate = () => {

        setInterval(() => {
            if (this.state.width > 280 && this.state.stop === false){
                this.setState({width: this.state.width - 1})
            } 
        }, 50)
    }

    doWithResult = (result) => {
       // if (result === "refresh"){
          //  this.setState({src: this.state.src.split("?")[0] + this.getRandom()})
        //}

        //let element = document.getElementsByClassName("frame")[0]

        if (result.includes("horizontal")){
            //this.animate()
            let array = result.split(" ")
            let size = parseInt(array[array.indexOf("horizontal") + 1])
            if (!isNaN(size)){
                horizontal(this, size)
                this.changeMessage("horizontal change")
            } else {
                horizontal(this, this.state.height)
            }
        } else if (result.includes("vertical")){
            let array = result.split(" ")
            let size = parseInt(array[array.indexOf("vertical") + 1])

            if (!isNaN(size)){
                vertical(this, size)
                this.changeMessage("vertical change")
            } else {
                vertical(this, this.state.height)
            }
        } else if (result.includes("refresh")){
            this.setState({src: this.state.src.split("?")[0] + this.getRandom()})
        }
    }


    speechRecognition(callback) {
        var SpeechRecognition = window.webkitSpeechRecognition;
        var SpeechGrammarList = window.webkitSpeechGrammarList;
        //var SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent;
        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();

        recognition.grammars = speechRecognitionList;
        recognition.continuous = true;
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.start()

        console.log("started")

        recognition.onresult = function(event){
            let result = event.results[0][0].transcript

            if (event.results[0].isFinal){
                console.log(result)
                callback(result)
                recognition.stop()
            }
        }



        recognition.onend = function() {
            recognition.start();
        };

        
    }

    componentDidMount(){
        this.speechRecognition(this.doWithResult)
    }

    render () {
        return (
            <div>
                <p>{this.state.message}</p>
                <p>{this.state.width}px x {this.state.height}px</p>
                <iframe className="frame" title="iframe" width={`${this.state.width}px`} height={`${this.state.height}px`} src={this.state.src} />
            </div>
        
        )
    }
}