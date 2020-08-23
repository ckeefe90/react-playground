import React from 'react'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordian from './Accordian.js'

describe(`Accordian Component`, () => {
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
      ]
    it('renders without error', () => {
        const wrapper = shallow(<Accordian/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders no section by default', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders open clicked section', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordian sections={sections}/>)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})