import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        console.log('props in the constructor', props)
    super(props)
    this.state = { count: 0 }
    }
    handleButtonClick= () => {
        console.log('props in the handleButtonClick', this.props)
        console.log('state in the handleButtonClick', this.state)
        this.setState({ count: this.state.count + this.props.step })
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick} >
                Add {this.props.step}
                </button>
            </div>
        )
    }
}

export default Counter;