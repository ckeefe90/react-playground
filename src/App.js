import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Accordian from './state/Accordian.js'
// import Tabs from './state/Tabs';
// import TheDate from './state/TheDate.js'
// import Counter from './state/Counter.js'

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

class App extends React.Component {
  render() {
    return <div>
      <Accordian sections={sections} />
    </div>
  }
}

export default App;
