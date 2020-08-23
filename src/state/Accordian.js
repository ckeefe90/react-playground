import React from 'react'

export default class Accordian extends React.Component {
    static defaultProps = { sections : [] };
    state = { currentSectionIndex: 0 };
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }
    render() {
        return (
        <div>
            <ul>
                {this.props.sections.map((section, i) => 
                <li key={i}>
                    <button className='title' onClick={() => this.handleButtonClick(i)}>{section.title}</button>
                    {this.state.currentSectionIndex === i && <p>{section.content}</p>}
                </li>)}
            </ul>
        </div>
        )
    }
}
