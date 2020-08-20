import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: "world!"
        }
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.setState({who: "world!"})}>World</button>
                <button onClick={() => this.setState({who: "friend!"})}>Friend</button>
                <button onClick={() => this.setState({who: "React!"})}>React</button>
            </div>
        )
    }
}

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            what: 'tick',
            count: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.callback, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    callback = () => {
        this.setState({count: this.state.count + 1})
        if(this.state.count >= 8) {
            this.setState({what: 'BOOM!!!'})
            clearInterval(this.interval)
        }
        else if(this.state.count % 2 === 0) {
            this.setState({what: 'tick'})
        }
        else {
            this.setState({what: 'tock'})
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.what}</h1>
            </div>
        )
    }
}

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    static defaultProps = {
        bulletInChamber: 8
    };
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleClick = () => {
        this.setState({spinningTheChamber: true,})
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }
    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const {bulletInChamber } = this.props
        if(spinningTheChamber) {
            return "spinning the chamber and pulling the trigger! ..."
        } 
        else if(chamber === bulletInChamber) {
            return "BANG!!!!"
        } else {
            return 'you\'re safe!'
        }
    }
    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;