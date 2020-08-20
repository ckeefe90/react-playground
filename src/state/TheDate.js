import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = { dateTime: new Date() };
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            this.setState({
            datetime: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (
        <div>{this.state.dateTime.toLocaleString()}</div>
        )
    }
}

export default TheDate